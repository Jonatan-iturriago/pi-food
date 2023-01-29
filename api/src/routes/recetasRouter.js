const { Router } = require('express');
const recetasRouter = Router();
const {getAll, getByName, postReceta, getById} = require('../handlers/handlerRecipes');

recetasRouter.get('/',getAll);

recetasRouter.get('/name',getByName);

recetasRouter.get('/:id',getById);

recetasRouter.post('/',postReceta);

module.exports = recetasRouter;