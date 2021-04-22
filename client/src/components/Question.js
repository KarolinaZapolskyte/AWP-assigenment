import { useState, useEffect } from 'react';
import { Router } from "@reach/router";
import Answers from './Answers'

const API_URL = process.env.REACT_APP_API;

function Question(props) {
  const { id, getQuestion } = props;
  const question = getQuestion(id);

  const [answers, setAnwer] = useState([]);
  const [scores, setScore] = useState([]);
  
  useEffect(() => { 
    const fetchData = async () => {
      const url = `${API_URL}/answers`;
      const scoreUrl = `${API_URL}/score`;

      const response = await fetch(url);
      const scoreResponse = await fetch(scoreUrl);
      const data = await response.json();
      const scoreData = await scoreResponse.json();
      setAnwer(data);
      setScore(scoreData)
    }; 
    fetchData();
  }, []); 


  function addAnswer(id, answer) {
    const data = { 
      id: id,
      answer: answer
    };
    console.log(answer);

    const postData = async () => {
  
      const url = `${API_URL}/answers`;
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

  function postScore(id, score) {
    const data = { 
      id: id,
      score: score
    };
    console.log(score);

    const postData = async () => {
  
      const url = `${API_URL}/score`;
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
  // filter scores with the same id as question
  let scoreValue = scores.filter(function( score ) {
    return score.id === question.id;
  });

  // sum of score
  var ScoreVal = scoreValue.reduce((accum,item) => accum + item.score, 0);
  console.log(ScoreVal);

  
  function voteUp() {
    document.getElementsByClassName('up')[0].style.fill = "#f48024";
    document.getElementsByClassName('down')[0].style.fill = "#bbc0c4";
    postScore(question.id, 1);
    window.location.reload();
  }

  function voteDown() {
    document.getElementsByClassName('up')[0].style.fill = "#bbc0c4";
    document.getElementsByClassName('down')[0].style.fill = "#f48024";
    postScore(question.id, -1);
    window.location.reload();
  }

  
    // Conditional rendering
    if (question === undefined) {
      return <p>Nothing here</p>;
    } else return (
      <>
      <div className="row">
        <div className="column">
          <div className="row voting-row">
            <div className="column voting">
              <svg aria-hidden="true" className="up" width="36" height="36" viewBox="0 0 36 36" onClick={(event) => {
                voteUp()
                }}>
                <path d="M2 26h32L18 10 2 26z"></path>
              </svg>
              <p>{ScoreVal}</p>
              <svg aria-hidden="true" className="down" width="36" height="36" viewBox="0 0 36 36" onClick={(event) => {
                voteDown()
                }}>
                <path d="M2 10h32L18 26 2 10z"></path>
              </svg>
              </div>
            <div className="column">
          <h3>Question: {question.title}</h3>
          <p>{question.desc}</p>
          {question.tags
              ? question.tags.map(tag => {
                  return (
          <div className="tags">
            <p>Tags:</p>
            <ul>
              <li>{tag}</li>
            </ul>
          </div>
        );
      })
    : null}
        </div>
              
              </div>
            </div>
          <div className="column">
            <div className="question-block-image"></div>
          </div>
      </div>
          <div className="answers">
        <Router>
          <Answers path='/' data={answers} addAnswer={addAnswer} getQuestion={getQuestion} />
        </Router>
          </div>
       
      </>
    );
  }
  
  export default Question;
  