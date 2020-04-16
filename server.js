const express = require('express');

const RecipesRouter = require("./receipes/recipes-router.js")

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

module.exports = server;
