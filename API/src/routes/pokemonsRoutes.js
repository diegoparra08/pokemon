const { getPokemonByName, getPokemonById, getAllPokemons } = require('../handlers/pokemonHandlers');

const pokemonsRouter = require('express').Router();

pokemonsRouter.get('/all', getAllPokemons);
pokemonsRouter.get('/:id', getPokemonById);
pokemonsRouter.get('/', getPokemonByName);

module.exports = pokemonsRouter;