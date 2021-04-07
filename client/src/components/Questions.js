import { Link } from "@reach/router";

function Questions(props) {
  const { data } = props;

  return (
    <>
      <h1>All questions</h1>
      <div>
        {
          data.map( question => <div className="question-summary">
            <Link to={`/question/${question.id}`}>{question.title}</Link>
          </div> )
        }
      </div>
    </>
  );
}

export default Questions;
