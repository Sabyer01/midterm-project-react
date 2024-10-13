import React, { useState } from 'react';

function AddItem({ addItem }) {
  const [item, setItem] = useState({ id: '', name: '', quantity: '', price: '', category: 'Clothing' });
  const [error, setError] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;

    // If the field is quantity or price, convert the value to a number
    const newValue = (name === 'quantity' || name === 'price') ? Number(value) : value;

    // Reset error message if input is valid
    if ((name === 'quantity' || name === 'price') && newValue < 0) {
      setError('Quantity and Price cannot be negative.'); // Set error message for negative input
    } else {
      setError(''); // Reset error message
    }

    setItem({ ...item, [name]: newValue });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Check for negative values before submission
    if (item.quantity < 0 || item.price < 0) {
      setError('Quantity and Price cannot be negative.'); // Show error message on submit
      return;
    }

    // Pass the values as is; quantity and price will now be numbers
    addItem(item.id, item.name, item.quantity, item.price, item.category);
    // Reset values after submission
    setItem({ id: '', name: '', quantity: '', price: '', category: 'Clothing' });
    setError(''); // Reset error message after successful addition
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" value={item.id} onChange={handleInputChange} placeholder="ID" required />
      <input type="text" name="name" value={item.name} onChange={handleInputChange} placeholder="Name" required />
      <input type="number" name="quantity" value={item.quantity} onChange={handleInputChange} placeholder="Quantity" required />
      <input type="number" name="price" value={item.price} onChange={handleInputChange} placeholder="Price" required />
      
      <select name="category" value={item.category} onChange={handleInputChange}>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
        
      </select>
      {error && <p style={{ color: 'black' }}>{error}</p>} {/* Display error message */}
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;
