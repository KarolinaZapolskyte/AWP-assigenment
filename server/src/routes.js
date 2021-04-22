module.exports = () => {
  const express = require("express");
  const router = express.Router();

  const dataQuestion = [
    { id: 1, title: 'Question 1', desc: 'Question 1 description' },
    { id: 2, title: 'Question 2', desc: 'Question 2 description' },
    { id: 3, title: 'Question 3', desc: 'Question 3 description' },
  ];
  const answerData = [
    {id: 1, answerText: 'Answer to the first question'}
  ];
  const scoreData = [
    { id: 1, score: 0 },
    { id: 2, score: 0 },
    { id: 3, score: 0 }
  ];

  let nextId = 4;
  /**** Routes ****/
  router.get("/question", (req, res) => {
    res.json(dataQuestion);
  });

  router.post("/question", (req, res) => {
    const newQuestion = { 
      id: nextId,
      title: req.body.title, 
      desc: req.body.desc,
      tags: req.body.tags,
      score: 0
    };
  
    nextId++;
    dataQuestion.push(newQuestion);
    res.json(newQuestion);
  });

  
  router.get("/answers", (req, res) => {
    res.json(answerData);
  });

  router.post("/answers", (req, res) => {

   
    const newAnswer = {
      id: parseInt(req.body.id),
      answerText: req.body.answer
    }

    answerData.push(newAnswer);
    res.json(newAnswer);
  });
  

  router.get("/score", (req, res) => {
    res.json(scoreData);
  });

  router.post("/score", (req, res) => {
    const newScore = { 
      id:parseInt(req.body.id),
      score: parseInt(req.body.score)
    };

    scoreData.push(newScore);
    res.json(newScore);
  });
  

  return router;
}
