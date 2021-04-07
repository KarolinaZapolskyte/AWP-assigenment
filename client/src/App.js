import { useState } from 'react';
import { Router } from "@reach/router";


import "../src/css/style.css";

// components
import AskQuestion from './components/AskQuestion';
import Questions from "./components/Questions";
import Question from "./components/Question";

function App() {
  const [questions] = useState([
    { id: 1, title: 'Pizza 1', description: "Pizza is nice 1" },
    { id: 2, title: 'Pizza 2', description: "Pizza is nice 2" },
    { id: 3, title: 'Pizza 3', description: "Pizza is nice 3" },
  ]);

  function getQuestion(id) {
    return questions.find(question => question.id === parseInt(id));
  }
  return (
    <>
    <div className="main container">
      <Router>
        <AskQuestion path="/ask-question"></AskQuestion>
        <Questions path="/" data={questions}></Questions>
        <Question path="/question/:id" getQuestion={getQuestion} ></Question>
      </Router>
    </div>
    </>
  );
}

export default App;
