import React, { useState } from 'react';

function UpdateItem({ items, updateItem }) {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleUpdate(event) {
    event.preventDefault();

    // Check if newValue is less than or equal to 0
    if (newValue <= 0) {
      setErrorMessage('The Quantity or Price value cannot be less than or equal to 0');
      return;
    }

    // Call updateItem with the current state values
    updateItem(id, field, newValue);
    setId(''); // Clear the input field after update
    setNewValue(''); // Clear the new value field after update
    setErrorMessage(''); // Clear error message after successful update
  }

  return (
    <>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Item ID"
          required
        />
        <select value={field} onChange={(e) => setField(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder={`Enter New ${field.charAt(0).toUpperCase() + field.slice(1)}`}
          required
        />
        {errorMessage && <p style={{ color: 'black' }}>{errorMessage}</p>} {/* Display error if present */}
        <button type="submit">Update Item</button>
      </form>
    </>
  );
}

export default UpdateItem;
