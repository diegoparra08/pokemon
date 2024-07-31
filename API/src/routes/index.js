const { default: axios } = require('axios');
const { Router } = require('express');
const pokemonsRouter = require('../routes/pokemonsRoutes');
const gendersRouter = require('../routes/gendersRouter');


const router = Router();

router.use('/pokemons', pokemonsRouter);
router.use('/genders', gendersRouter);


module.exports = router;