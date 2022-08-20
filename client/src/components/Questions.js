import { Link } from "@reach/router";
import AskQuestion from "./AskQuestion";

function Questions(props) {
  const { data, addQuestion } = props;
  console.log(data)

  return (
    <>
      <div className="ask-question">
        <AskQuestion addQuestion={addQuestion}/>
      </div>
      
      <h1>All questions</h1>
      <div>
        {
          data.map( question => <div className="question-summary" key={question._id}>
            <Link to={`/question/${question.id}`}>{question.title}</Link>
          </div> )
        }
      </div>

    </>
  );
}

export default Questions;
