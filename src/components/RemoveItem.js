import React, { useState } from 'react';

function RemoveItem({ items, removeItem, setModalMessage, setShowModal }) { // Accept props
  const [id, setId] = useState('');

  function handleRemove(event) {
    event.preventDefault();
    const itemToRemove = items.find(item => item.id === id);
    if (itemToRemove) {
      removeItem(id); // Proceed with removal
    } else {
      // Show a modal with a message saying the item is not available
      setModalMessage('Item with this ID is not found!');
      setShowModal(true); // Trigger the modal
    }
  }

  return (
    <form onSubmit={handleRemove}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Item ID"
        required
      />
      <button type="submit">Remove Item</button>
    </form>
  );
}

export default RemoveItem;
