import React from 'react';
import './App.css';

function App() {
  const settings = loadData("userSettings");

  var deviceId = "";

  if (settings == null) {
    deviceId = generateUUID();
    saveData("userSettings", { device_id: deviceId });
  }
  else {
    deviceId = settings.device_id;
  }

  const iframeSrc = `https://bedrock.es?deviceId=${deviceId}`;

  return (
    <div className="App safe-area">
      <iframe
        src={iframeSrc}
        title="Bedrock Site"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      ></iframe>
    </div>
  );
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function generateUUID() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export default App;
