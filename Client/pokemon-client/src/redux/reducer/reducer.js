import { GET_POKEMON_BY_ID, GET_POKEMONS, GET_POKEMON_BY_NAME } from '../actions/actions'

const initialState = {
  pokemonDetail: {},
  pokemonDetailByName: {},
  allPokemons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
      };

    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonDetailByName: action.payload,
      }

    default:
      return state;
  }
};

export default reducer;