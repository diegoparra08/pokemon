import axios from 'axios';

export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';

const pokemonsEndpoint = 'http://localhost:3001/poke-API/pokemons'

export const getPokemons = (index) => {

    return async (dispatch) => {

        try {

            const { data } = await axios(`${pokemonsEndpoint}/all?index=${index}`);

            dispatch({
                type: GET_POKEMONS,
                payload: data
            });

        } catch (error) {

            throw new Error(`Error fetching pokemons: ${error.message}`);
        }
    }
};

export const getPokemonById = (id) => {

    return async (dispatch) => {

        try {

            const { data } = await axios(`${pokemonsEndpoint}/${id}`);

            dispatch({
                type: GET_POKEMON_BY_ID,
                payload: data,
            })

        } catch (error) {

            throw new Error(`Error fetching pokemon by ID: ${error.message}`);
        }
    }
};

export const getPokemonByName = (name) => {

    return async (dispatch) => {

        try {

            const { data } = await axios(`${pokemonsEndpoint}/?name=${name}`);

            dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: data,
            })

        } catch (error) {

            throw new Error(`Error fetching pokemon by Name: ${error.message}`);
        }
    }
};