const { parse } = require("path");

module.exports = (qaDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get("/questions",  async (req, res) => {
    const questions = await qaDB.getQuestions()
    res.json(questions);
  });

  router.get("/questions/:id", async (req, res) => {
    const question = await qaDB.getQuestion(req.params.id)
    res.json(question);
  });

  router.post("/questions", async (req, res) => {
    const newQuestion = await qaDB.createQuestion(req.body.title, req.body.desc, req.body.tags);
    await newQuestion.save();
    res.json(newQuestion);
  });

// ---------------------------------------------------------- //
  
  router.get("/answers", async (req, res) => {
    const answers = await qaDB.getAnswers()
    res.json(answers);
  });

  router.post("/answers", async (req, res) => {
    const newAnswer = await qaDB.createAnswer(parseInt(req.body.id), req.body.answer)

    await newAnswer.save();
    res.json(newAnswer);
  });
  
// ---------------------------------------------------------- //

  router.get("/scores", async (req, res) => {
    const scores = await qaDB.getScore()
    res.json(scores);
  });

  router.post("/scores", async (req, res) => {
    const newScore = await qaDB.createScore(parseInt(req.body.id), parseInt(req.body.score));

    await newScore.save()
    res.json(newScore);
  });
  

  return router;
}
