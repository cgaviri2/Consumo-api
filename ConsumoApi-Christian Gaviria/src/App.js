import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Importamos el archivo CSS
import PokemonDetail from './components/PokemonDetail'; // Componente de detalles
import SearchBar from './components/SearchBar';

function App() {
  const [state, setState] = useState({ pokemon: null, error: null });

  const handleSearch = (searchTerm) => {
    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`;
    axios
      .get(searchUrl)
      .then((response) => {
        console.log(response.data); // Verificamos qué estamos recibiendo
        setState({ ...state, pokemon: response.data, error: null });
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
        setState({ ...state, error: 'No se pudo encontrar este Pokémon' });
      });
  };

  const handleCloseDetail = () => {
    setState({ ...state, pokemon: null });
  };

  return (
    <div className="App">
      <h1>Pokémon</h1>
      <SearchBar onSearch={handleSearch} />

      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

      {/* Mostrar los detalles si tenemos datos de un Pokémon */}
      {state.pokemon && (
        <div className="pokemon-container">
          <h3>{state.pokemon.name}</h3>
          <img
            src={state.pokemon.sprites.front_default}
            alt={state.pokemon.name}
          />
          <PokemonDetail pokemon={state.pokemon} onClose={handleCloseDetail} />
        </div>
      )}
    </div>
  );
}

export default App;
