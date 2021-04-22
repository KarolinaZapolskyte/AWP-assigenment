module.exports = (mongoose) => {
  const questionScheme = new mongoose.Schema({
    id: Number,
    title: String,
    desc: String,
    tags: [String]
  });

  const answerScheme = new mongoose.Schema({
    id: Number,
    answerText: String
  });

  const scoreScheme = new mongoose.Schema({
    id: Number,
    scorePoints: Number
  });

  const questionModel = mongoose.model('question', questionScheme);
  const answerModel = mongoose.model('answer', answerScheme);
  const scoreModel = mongoose.model('score', scoreScheme);

  async function getQuestions() {
    try {
      return await questionModel.find();
    } catch (error) {
      console.error("getQuestions:", error.message);
      return {};
    }
  }

  async function getQuestion(id) {
    try {
      return await questionModel.findById(id);
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
    }
  }

  async function createQuestion(title, desc, tags) {
    let nextId = 2;
    let question = new questionModel({id: nextId, title: title, desc: desc, tags: tags});
    nextId++
    return question.save();
  }

  async function getAnswers() {
    try {
      return await answerModel.find();
    } catch (error) {
      console.error("getAnswer:", error.message);
      return {};
    }
  }

  async function createAnswer(id, answerText) {
    let answer = new answerModel({id: id, answerText: answerText});
    return answer.save();
  }

  async function getScore() {
    try {
      return await scoreModel.find();
    } catch (error) {
      console.error("getScore:", error.message);
      return {};
    }
  }

  async function createScore(id, scorePoints) {
    let scoreValue = new scoreModel({id: id, scorePoints: scorePoints});
    return scoreValue.save();
  }

  return {
    getQuestions,
    getQuestion,
    createQuestion,
    getAnswers,
    createAnswer,
    getScore,
    createScore
  }
}