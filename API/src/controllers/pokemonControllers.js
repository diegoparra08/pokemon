const axios = require('axios');
require('dotenv').config();
const { Op, Model } = require('sequelize');
//const {  } = require('../db')
//const URL = 'https://api.rawg.io/api/games'

const mapPokemon = (pokemon) => {

    const pokemonInfo = {
        id: pokemon.data.id,
        name: pokemon.data.name,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        abilities: pokemon.data.abilities.map(ability => ({
            abilityName: ability.ability.name
           })),
        image: pokemon.data.sprites.front_default
    }

    return pokemonInfo
};

const getByIdController = async (id) => {

    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const pokemonDetail = mapPokemon(response);

    return pokemonDetail;
}

const getByNameController = async (name) => {
    
    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const pokemonDetail = mapPokemon(response);

    return pokemonDetail;


}



module.exports = { getByIdController, getByNameController };