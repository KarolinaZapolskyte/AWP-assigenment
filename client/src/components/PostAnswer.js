import { useState } from 'react';

function PostAnswer(props) {
  const { addAnswer, id } = props;

  const [answers, setAnswer] = useState("");

  // Conditional rendering
  return (
    <>
      <h2>Your answer</h2>
        <div className="row">
            <div className="column">
                <div className="answer-box">
                    <textarea onChange={(event) => setAnswer(event.target.value)} type="text" />
                </div>
                <div className="tips-image"></div>
                <br />
                <button type="button" className="blue" onClick={(event) => {
                    addAnswer(id, answers)
                    window.location.reload()
                    }}>Post Your Answer
                </button>
            </div>
            <div className="column">
                <div className="post-answer-image"></div>
            </div>
        </div>
    </>
  );
}

export default PostAnswer;
