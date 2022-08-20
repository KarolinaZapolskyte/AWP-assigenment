import { useState, useEffect } from 'react';
import { Router } from "@reach/router";

import Questions from "./components/Questions";
import Question from "./components/Question";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [questions, setQuestion] = useState([]);

  useEffect(() => { 
    async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setQuestion(data);
    }; 
    getData();
  }, []); 
  
  function getQuestion(id) {
    return questions.find(question => question.id === parseInt(id));
  }

  function addQuestion(title, desc, tags) {
    let nextId = 2;

    const data = { 
      id: nextId,
      title: title, 
      desc: desc,
      tags: tags 
    };

    nextId++;
    
    async function postData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const reply = await response.json();
      console.log(reply);

    }; 
    postData();
  }

  return (
    <>
      <div className="main container">
        <Router>
          <Questions path="/" data={questions} addQuestion={addQuestion}></Questions>
          <Question path="/question/:id" getQuestion={getQuestion} ></Question>
        </Router>
      </div>
    </>
  );
}

export default App;
