import React, { useEffect } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  useEffect(() => {
    const currentScript = document.querySelector(`script[plugin-key="${process.env.REACT_APP_FEEDBANK_KEY}"]`);
    if (currentScript) {
      currentScript.remove();
      document.querySelector('.fb-plugin')?.remove();
    }
    let script = document.createElement('script');
    script.src = 'https://cdn.feedbank.app/plugin.js';
    script.defer = true;
    script.setAttribute('plugin-key', process.env.REACT_APP_FEEDBANK_KEY ?? 'TORP');
    script.setAttribute('data-fb-button-color', '#e4e4e4');
    document.head.insertAdjacentElement('beforeend', script);
  }, []);

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
