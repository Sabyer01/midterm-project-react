import React, { useState } from 'react';

function SortItem({ items, setSortedItems, handleNavigation }) {
  const [field, setField] = useState('quantity');
  const [order, setOrder] = useState('asc');

  function handleSort(event) {
    event.preventDefault();
    const sorted = [...items].sort((a, b) => {
      if (order === 'asc') {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    });
    setSortedItems(sorted);
    handleNavigation('home'); // Redirect to home after sorting
  }

  return (
    <form onSubmit={handleSort}>
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button type="submit">Sort Items</button>
    </form>
  );
}

export default SortItem;

