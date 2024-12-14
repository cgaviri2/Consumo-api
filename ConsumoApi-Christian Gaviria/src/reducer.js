export const initialState = {
    pokemon: null, // Cambiamos a pokemon porque estamos trabajando con datos de Pokémon
    selectedPokemon: null,
  };
  
  export const pokemonReducer = (state, action) => {
    switch (action.type) {
      case 'SET_POKEMON':
        return {
          ...state,
          pokemon: action.payload,
        };
      case 'SELECT_POKEMON':
        return {
          ...state,
          selectedPokemon: action.payload,
        };
      case 'DESELECT_POKEMON':
        return {
          ...state,
          selectedPokemon: null,
        };
      default:
        return state;
    }
  };
  