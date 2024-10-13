import React from 'react';

function LowStockItem({ items }) {
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div>
      <div className="inventory-message">
      {lowStockItems.length === 0 ? (
        <div className="no-items-form">
        <h3>No Items Available</h3>
        <p>There is no low stock items.</p>
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
            {lowStockItems.map(item => (
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

export default LowStockItem;