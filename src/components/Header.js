// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>내 웹앱</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
};

export default Header;