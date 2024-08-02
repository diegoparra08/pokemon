const axios = require('axios');
require('dotenv').config();
const { Op, Model } = require('sequelize');
const { PokemonModel } = require('../../db')
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

    return pokemonInfo;
};

const getByIdController = async (id) => {

    const pokemonInDB = await PokemonModel.findOne({
        where: { id }
    })

    if (!pokemonInDB) {

        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokemonDetail = mapPokemon(response);

        postPokemonToDB(pokemonDetail)
        console.log("Not in DB, brought from API");
        return pokemonDetail;

    };

    console.log("Found in DB");
    return pokemonInDB;

}

const getByNameController = async (name) => {

    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const pokemonDetail = mapPokemon(response);

    postPokemonToDB(pokemonDetail)

    return pokemonDetail;
};

const getAllPokemonsController = async () => {

    let pokemonsArray = [];

    for(let i = 1; i <= 120; i++){
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonDetail = mapPokemon(response);
        pokemonsArray.push(pokemonDetail);
    }
    return pokemonsArray;

};


const postPokemonToDB = async (pokemonDetail) => {

    const { id, name, height, weight, abilities, image } = pokemonDetail;

    try {

        const [postPokemon, created] = await PokemonModel.findOrCreate({
            where: { name },
            defaults: {
                id,
                name,
                height,
                weight,
                abilities,
                image
            }
        });

        return postPokemon;

    } catch (error) {

        console.error("Error in postPokemonToDB:", error);
        throw new Error('Failed to save Pokémon to the database');

    }
};



module.exports = { getByIdController, getByNameController, getAllPokemonsController };