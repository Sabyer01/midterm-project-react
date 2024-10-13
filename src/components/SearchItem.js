import React, { useState } from 'react';

function SearchItem({ items }) {
  const [id, setId] = useState('');  // Holds the input ID
  const [item, setItem] = useState(null);  // Holds the searched item, initially null
  const [searchedId, setSearchedId] = useState(''); // Holds the ID for which the search was executed

  function handleSearch(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const foundItem = items.find(item => item.id === id);
    
    // Update state based on search results
    if (foundItem) {
      setItem(foundItem); // Set the found item
      setSearchedId(id); // Set the searched ID
    } else {
      setItem(null); // Set to null if not found
      setSearchedId(id); // Still set the searched ID for displaying "no results"
    }
  }

  return (
    <div>
      {/* Search form always visible */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)} // Update the ID state when typing
          placeholder="Enter Item ID"
          required
        />
        <button type="submit">Search Item</button>
      </form>

      {/* Show the search ID and results if an item is found */}
      {searchedId && (
        <div className="table-container3">
          <h3>Search Results for ID: {searchedId}</h3>
          {item ? (
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
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>P{item.price.toFixed(2)}</td>
                  <td>{item.category}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No results for ID: {searchedId}</p> // Display message if no item found
          )}
        </div>
      )}
    </div>
  );
}

export default SearchItem;
