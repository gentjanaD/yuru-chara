const roots = require('express').Router();
const {getAll} = require("./controllers/controller.mascot");

roots.get("/mascot", getAll);