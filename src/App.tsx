import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Link from './components/Link';
import { io, Socket } from 'socket.io-client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
