// ###### DEPENDENCIES ######

// INQUIRER - A collection of common interactive command line user interfaces.
const inquirer = require("inquirer");

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require("jsonfile");

// REMOVE-FROM-ARRAY - remove an index from an array
const removeFromArray = require("@amphibian/remove-from-array");

module.exports = {
  DeleteTodo: (JsonObject, PathToFile) => {
    // Defined the prompt
    const DeleteList = {
      type: "list",
      name: "DeleteTodo",
      message: "What you wish to delete from your todo-list?",
      choices: JsonObject.todo,
    };

    inquirer
      .prompt(DeleteList)
      .then((answers) => {
        // Delete the answer from the array
        removeFromArray(answers.DeleteTodo, JsonObject.todo);

        // Write to todo.json
        jsonfile.writeFile(PathToFile, JsonObject,
          (err) => {
            if (err) console.log(err);
          });
      });
  },
};
