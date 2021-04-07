function Question(props) {
    const { id, getQuestion } = props;
    const question = getQuestion(id);
  
    // Conditional rendering
    if (question === undefined) {
      return <p>Nothing here</p>;
    } else return (
      <>
        <h3>Question: {question.title}</h3>
  
        <p>{question.description}</p>
      </>
    );
  }
  
  export default Question;
  