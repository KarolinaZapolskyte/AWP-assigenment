import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API;

function Question(props) {
  const { id, getQuestion } = props;
  const question = getQuestion(id);
  
  const [answers, setAnswers] = useState("");

  useEffect(() => { 
    const fetchData = async () => {
      const url = `${API_URL}/question`;

      const response = await fetch(url);
      const data = await response.json();
      setAnswers(data);
    }; 
    fetchData();
  }, []); 

  const postData = async () => {
    const data = { 
      answer: answers
    };

    const url = `${API_URL}/question`;
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
  
  function voteUp() {
    document.getElementsByClassName('up')[0].style.fill = "#f48024"
    document.getElementsByClassName('down')[0].style.fill = "#bbc0c4"
  }

  function voteDown() {
    document.getElementsByClassName('up')[0].style.fill = "#bbc0c4"
    document.getElementsByClassName('down')[0].style.fill = "#f48024"
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
                question.score = question.score + 1
                }}>
                <path d="M2 26h32L18 10 2 26z"></path>
              </svg>
              <p>{question.score}</p>
              <svg aria-hidden="true" className="down" width="36" height="36" viewBox="0 0 36 36" onClick={(event) => {
                voteDown()
                question.score = question.score - 1
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
      {question.answers
        ? question.answers.map(answer => {
        return (
          <div className="answers">
            <h2>Answers</h2>
            <div className="row">
              <div className="column">
                <div className="answer">
                  <div className="vote"></div>
                </div>
              </div>
              <div className="column">
                <div className="answer-image"></div>
              </div>
            </div>
          </div>
        );
      })
    : null}
      <div className="post-answer">
      <h2>Your answer</h2>
        <div className="row">
            <div className="column">
                <div className="answer-box">
                    <textarea onChange={(event) => setAnswers(event.target.value)} type="text" />
                </div>
                <div className="tips-image"></div>
                <br />
                <button type="button" className="blue" onClick={(event) => {
                  postData()
                    // window.location.reload()
                    }}>Post Your Answer
                </button>
            </div>
            <div className="column">
                <div className="post-answer-image"></div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Question;
  