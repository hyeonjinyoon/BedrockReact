import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>홈</Link>
        <Link to="/about" style={linkStyle}>어바웃</Link>
      </nav>
      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <p>안녕하세요! React 웹앱에 오신 것을 환영합니다.</p>
    </div>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#f4f4f4',
  padding: '10px',
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: '#333',
};

const contentStyle = {
  padding: '20px',
  textAlign: 'center',
};


export default App;
