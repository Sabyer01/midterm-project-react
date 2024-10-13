import React, { useState } from 'react';

function DisplayItem({ items }) {
  const [filteredItems, setFilteredItems] = useState(items); // State for filtered items

  // Function to display all items
  const handleDisplayAll = () => {
    setFilteredItems(items);
  };

  // Function to filter items by category
  const handleDisplayByCategory = (category) => {
    const filtered = items.filter(item => item.category === category);
    setFilteredItems(filtered);
  };

  return (
    <div className="table-container">
      <div className="inventory-message">
        {/* Buttons to filter items */}
        <div className="filter-buttons">
          <button onClick={handleDisplayAll}>Display All Items</button>
          <button onClick={() => handleDisplayByCategory('Clothing')}>Display Clothing</button>
          <button onClick={() => handleDisplayByCategory('Electronics')}>Display Electronics</button>
          <button onClick={() => handleDisplayByCategory('Entertainment')}>Display Entertainment</button>
        </div>

        {filteredItems.length === 0 ? (
          <div className="no-items-form">  {/* Form-like div for "no items available" message */}
            <h3>No Items Available</h3>
            <p>Please add an item to get started.</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>P{item.price.toFixed(2)}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DisplayItem;
