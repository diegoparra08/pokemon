import { GET_POKEMON_BY_ID } from '../actions/actions'

const initialState = {
    pokemonDetail: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // Casos de acción
      default:
        return state;
    }
  };

  export default reducer;