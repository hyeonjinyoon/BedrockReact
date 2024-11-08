// App.js
import React, { useEffect } from 'react';
import { App as CapacitorApp } from '@capacitor/app';

function App() {
  useEffect(() => {
    // 예시: 앱이 백그라운드로 갔다가 다시 돌아왔을 때 수행할 작업
    CapacitorApp.addListener('appStateChange', (state) => {
      console.log('App state changed. Is active:', state.isActive);
    });

    // 예시: 앱이 종료되기 직전 수행할 작업
    CapacitorApp.addListener('backButton', () => {
      console.log('Back button pressed');
    });

    // Clean up listeners on component unmount
    return () => {
      CapacitorApp.removeAllListeners();
    };
  }, []);

  return (
    <div className="App">
      <h1>Welcome to My Capacitor App</h1>
      <p>웹뷰로 https://bedrock.es 사이트를 로드 중입니다.</p>
    </div>
  );
}

export default App;