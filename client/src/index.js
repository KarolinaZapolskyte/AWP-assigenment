import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <footer>
      <p className="hidden">Hidden text</p>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);