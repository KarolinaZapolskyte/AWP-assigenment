import React from 'react';
import { Router } from "@reach/router";

import "../src/css/style.css";

// components
import Home from './components/Home';
import AskQuestion from './components/AskQuestion';

function App() {

  return (
    <>
      <Router>
        <Home path="/"></Home>
        <AskQuestion path="/ask-question"></AskQuestion>
      </Router>
    </>
  );
}

export default App;
