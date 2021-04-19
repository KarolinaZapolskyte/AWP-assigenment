import { useState } from 'react';

function AskQuestion(props) {
  const { addQuestion } = props;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");

  // Conditional rendering
  return (
    <>
        <h1 className="bold">Ask Question</h1>
        <div className="row">
          <div className="column">
            <div className="question-boxes">
              <label>Subject</label>
              <input onChange={(event) => setTitle(event.target.value)} type="text" />
              <br />
              <label>Message</label>
              <textarea onChange={(event) => setDesc(event.target.value)} type="text" />
              <br />
              <label>Tags</label>
              <input onChange={(event) => setTags(event.target.value)} />
            </div>
            <br />
            <button type="button" className="blue" onClick={(event) => {
              const ingArray = tags.split(" ");
              addQuestion(title, desc, ingArray);
              document.getElementsByClassName('ask-question')[0].style.display="none";
              window.location.reload();
              }}>Post Your Question
            </button>
          </div>
          <div className="column">
            <div className="question-image"></div>
          </div>
        </div>
    </>
  );
}

export default AskQuestion;
