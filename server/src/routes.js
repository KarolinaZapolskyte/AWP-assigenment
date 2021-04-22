const { parse } = require("path");

module.exports = (qaDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get("/questions",  async (req, res) => {
    try {
      const questions = await qaDB.getQuestions()
      res.json(questions);
    } catch (error) {
      console.error("error:", error.message);
    }
  });

  router.get("/questions/:id", async (req, res) => {
    try {
      const question = await qaDB.getQuestion(req.params.id)
      res.json(question);
    } catch (error) {
      console.error("error:", error.message);
    }
  });

  router.post("/questions", async (req, res) => {
    try {
      const newQuestion = await qaDB.createQuestion(req.body.title, req.body.desc, req.body.tags);
      await newQuestion.save();
      res.json(newQuestion);
    } catch (error) {
      console.error("error:", error.message);
    }
  });

// ---------------------------------------------------------- //
  
  router.get("/answers", async (req, res) => {
    try {
      const answers = await qaDB.getAnswers()
      res.json(answers);
    } catch (error) {
      console.error("error:", error.message);
    }
  });

  router.post("/answers", async (req, res) => {
    try {
      const newAnswer = await qaDB.createAnswer(parseInt(req.body.id), req.body.answer)
      await newAnswer.save();
      res.json(newAnswer);
    } catch (error) {
      console.error("error:", error.message);
    }
  });
  
// ---------------------------------------------------------- //

  router.get("/scores", async (req, res) => {
    try {
      const scores = await qaDB.getScore()
      res.json(scores);
    } catch (error) {
      console.error("error:", error.message);
    }
  });

  router.post("/scores", async (req, res) => {
    try {
      const newScore = await qaDB.createScore(parseInt(req.body.id), parseInt(req.body.score));
      await newScore.save()
      res.json(newScore);
    } catch (error) {
      console.error("error:", error.message);
    }
  });
  

  return router;
}
