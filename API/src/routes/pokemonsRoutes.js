const { getPokemonByName, getPokemonById } = require('../handlers/pokemonHandlers');

const pokemonsRouter = require('express').Router();

pokemonsRouter.get('/:id', getPokemonById);
pokemonsRouter.get('/', getPokemonByName);

module.exports = pokemonsRouter;