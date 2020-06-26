#!/usr/bin/env node
// ###### DEPENDENCIES ######

// ###### LIB #####

// DELETE.js
const del = require("./lib/delete.js");

// CREATE.js
const create = require("./lib/create.js");

// ###### PATH ######

// Path to todo.json
const PathToFile = `${__dirname}/todo.json`;
const JsonTodo = require(PathToFile);

// ###### other VARIABLES / OBJECTS ######

// JsonObject
const JsonObject = JsonTodo;

// ###### M ######
// ###### A ######
// ###### I ######
// ###### N ######

const Arguments = process.argv[2];

if (Arguments === "delete") {
  del.DeleteTodo(JsonObject, PathToFile);
} else if (Arguments === "create") {
  create.CreateTodo(JsonObject, PathToFile);
}
