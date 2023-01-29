const { Router } = require('express');
// Importar todos los routers;
const recetasRouter = require('./recetasRouter');
const dietasRouter = require('./dietasRouter');


const router = Router();

// Configurar los routers
router.use('/recipes', recetasRouter);
router.use('/deits', dietasRouter);

module.exports = router;
