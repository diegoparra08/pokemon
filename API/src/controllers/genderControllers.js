const axios = require('axios');

const mapGender = (gender) => {

    const genderInfo = {

        id: gender.data.id,
        name: gender.data.name,
        pokemonSpecies: gender.data.pokemon_species_details.map(specie => ({
            specieName: specie.pokemon_species.name,
            specieID: specie.pokemon_species.url.split('/').filter(Boolean).pop()
        }))
    }

    return genderInfo;
};


const getGenderByIdController = async (id) => {

    const response = await axios(`https://pokeapi.co/api/v2/gender/${id}`)

    const genderData = mapGender(response);

    return genderData;
}

module.exports = { getGenderByIdController };