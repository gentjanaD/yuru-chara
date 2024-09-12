const roots = require('express').Router();
const {getAll,addMascot,toggleFavourite,getMascot,deleteMascot} = require("./controllers/controller.mascot");

roots.get("/mascot", getAll);

roots.post('/mascots', addMascot);

roots.put('/mascots/:id', toggleFavourite);

roots.get('/mascots/:id', getMascot);

roots.delete('/mascots/:id',deleteMascot)

module.exports = roots