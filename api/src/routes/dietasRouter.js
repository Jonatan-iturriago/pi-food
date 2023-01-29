const { Router } = require('express');
const dietasRouter = Router();
const {getAllDietas} = require('../handlers/handlerDiets');



dietasRouter.get('/',getAllDietas);


module.exports = dietasRouter;
