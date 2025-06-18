// src/components/ArrayRenderingExample.jsx
import React, { useState } from 'react';

function ArrayRenderingExample() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']); //
  const clearItems = () => setItems([]);
  const addItems = () => setItems(['Grape', 'Kiwi', 'Mango']);
  return (
    <div className="example-container">
      <h4>Array-Based Rendering with Conditions</h4>
      {items.length > 2 ? ( //
        <ul className="item-list">
          {items.map((item, index) => ( //
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="no-items">No items</p> //
      )}
      <button onClick={clearItems}>Clear Items</button>
      <button onClick={addItems}>Add Items</button>
    </div>);}

export default ArrayRenderingExample;