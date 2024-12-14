import React from 'react';

function PokemonDetail({ pokemon, onClose }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', marginTop: '20px' }}>
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: '150px', height: '150px' }}
      />
      <p>Height: {pokemon.height} decimetres</p>
      <p>Weight: {pokemon.weight} hectograms</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default PokemonDetail;
