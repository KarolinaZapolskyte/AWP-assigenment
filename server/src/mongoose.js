const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/awpAssignmentDB", { 
  useNewUrlParser: true, useUnifiedTopology: true  });

  async function doStuff() {
  
    const questionScheme = new mongoose.Schema({
      title: String,
      desc: String,
      tags: [String]
    });
  
    const QuestionModel = mongoose.model("Question", questionScheme);
  
    // Part 1: Create a document
    let question1 = new QuestionModel({
      title: "Question 1",
      desc: "Description of question 1",
      tags: []
    });
    console.log("question1", question1);
    try {
      const savedPizza = await pizza.save();
      console.log("savedPizza", savedPizza);
    } catch (error) {
      console.error(error);
    }
  
    // Part 2: Searching for a document
    pizza = await RecipeModel.findOne({title: "Pizza"});
    console.log("findOne pizza", pizza);
  
    // Part 3: Update a pizza?
    // 1. Find document
    // 2. Make changes to the document
    // 3. Save it again
    const pizzaToUpdate = await RecipeModel.findOne({title: "Pizza"});
    pizzaToUpdate.title = "Some other pizza";
    pizzaToUpdate.description = "Another type of pizza";
    await pizzaToUpdate.save();
    console.log("pizzaToUpdate", pizzaToUpdate);
  
    // Part 4: Find all pizzas
    let pizzaArray = await RecipeModel.find();
    console.log("pizzaArray", pizzaArray);
  
    // Part 5: Delete some pizzas
    await RecipeModel.deleteMany({title: "Pizza"});
  }