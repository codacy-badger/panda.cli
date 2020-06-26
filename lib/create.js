// ###### DEPENDENCIES ######

// INQUIRER - A collection of common interactive command line user interfaces.
const inquirer = require("inquirer");

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require("jsonfile");

module.exports = {
  CreateTodo: (JsonObject, PathToFile) => {
    // Defined the prompt
    const CreateQuestion = {
      type: "question",
      name: "CreateTodo",
      message: "What shold to be the name of the new todo item?",
    };

    inquirer
      .prompt(CreateQuestion)
      .then((answers) => {
        // Add item to array
        JsonObject.todo.unshift(answers.CreateTodo);

        // Write to todo.json
        jsonfile.writeFile(PathToFile, JsonObject,
          (err) => {
            if (err) console.log(err);
          });
      });
  },
};
