import axios from 'axios';

// Función para obtener los detalles de un Pokémon (usando la URL base de la API de Pokémon)
export const fetchPokemon = async (dispatch) => {
  try {
    // Traer información de Ditto (puedes cambiar esto por otro Pokémon si lo deseas)
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    
    // Despachar la acción para guardar la información de Ditto
    dispatch({ type: 'SET_POKEMON', payload: response.data });
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
};
