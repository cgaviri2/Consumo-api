import React from 'react';

function ItemList({ items, onItemClick }) {
  return (
    <div>
      {items.map(item => (
        <div
          key={item.id}
          onClick={() => onItemClick(item)}
          style={{
            cursor: 'pointer',
            marginBottom: '10px',
            border: '1px solid #ddd',
            padding: '10px',
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.body.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
