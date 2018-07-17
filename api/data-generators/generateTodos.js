const faker = require("faker");
const mongoose = require("mongoose");
const dbConfig = require("./database.config.js");
let TodoModel = require('./models/todo');

class generateTodos {
  constructor(number) {
    const encodedPassword = encodeURIComponent(dbConfig.password);
    mongoose
      .connect(`mongodb://localhost:${encodedPassword}@localhost:10255/admin?ssl=true`)
      .then(() => {
        this.generateTodos(number);
        console.log("Done generate");
      })
      .catch(err => {
        console.log("Faild to connect to database, Exiting...");
        process.exit();
      });
  }

  generateTodos(number) {
    for(let i=0; i < number; i++){
        this.generateTodo();
    }
  }

  generateTodo(){
    let todo = { text: "" };
    todo.text = faker.lorem.words();
    let uModel = new TodoModel(todo);
    uModel.save();
  }
}

new generateTodos(10000);