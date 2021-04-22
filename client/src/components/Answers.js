import PostAnswer from "./PostAnswer";

function Answers(props) {
    const { data, addAnswer, id, getQuestion } = props;
    const question = getQuestion(id);

    // find answers with the same id as question
    const answer = data.filter(function( ans ) {
        return ans.id === question.id;
    });

  return (
    <>
      
      <h1>All answers</h1>
          <div className="row">
          <div className="column">
            <div className="answer">
              <div className="vote"></div>
        {
          answer.map( answer =>  
            <p>{answer.answerText}</p>
            )
        }
            </div>
          </div>
          <div className="column">
            <div className="answer-image"></div>
          </div>
        </div>
      <div className="post-answer">
        <PostAnswer addAnswer={addAnswer} id={question.id} />
      </div>

    </>
  );
}

export default Answers;
