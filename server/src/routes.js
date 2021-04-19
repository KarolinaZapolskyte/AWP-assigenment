module.exports = () => {
  const express = require("express");
  const router = express.Router();

  const data = [
    { id: 1, title: 'Question 1', desc: "Question 1 description", answer: '', score: 0 },
    { id: 2, title: 'Question 2', desc: "Question 2 description", answer: '', score: 0 },
    { id: 3, title: 'Question 3', desc: "Question 3 description", answer: '', score: 0 },
  ];
  const answerData = [
    {id: 1, answer: 'hello'}
  ];
  let nextId = 4;
  /**** Routes ****/
  router.get("/question", (req, res) => {
    res.json(data);
  });

  router.post("/question", (req, res) => {
    const newQuestion = { 
      id: nextId,
      title: req.body.title, 
      desc: req.body.desc,
      tags: req.body.tags,
      score: 0
    };

   
    const newAnswer = {
      answer: req.body.answer
    }
  
    newId++;
    data.push(newAnswer);
    res.json(newAnswer);
  
    nextId++;
    data.push(newQuestion);
    res.json(newQuestion);
  });

  return router;
}
