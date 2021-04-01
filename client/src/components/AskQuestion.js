import { useState } from 'react';

function AskQuestion(props) {
  const { askQuestion } = props;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  // Conditional rendering
  return (
    <>
    <div className="main container">
      <h1 className="bold">Ask Question</h1>

      <div className="question-boxes">
      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      <br />
      <input onChange={(event) => setBody(event.target.value)} type="text" />
      <br />
      <textarea onChange={(event) => setTags(event.target.value)} />
      </div>

      <button type="button" className="blue" onClick={(event) => {
        const ingArray = tags.split(" ");
        askQuestion(title, body, ingArray);
      }}>Post Your Question
      </button>
    </div>
    </>
  );
}

export default AskQuestion;
