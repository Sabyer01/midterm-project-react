import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayItem from './components/DisplayItem';
import LowStockItem from './components/LowStockItem';
import SortItem from './components/SortItem';
import SearchItem from './components/SearchItem';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  function removeItem(id) {
    const itemToRemove = items.find(item => item.id === id);

    if (!itemToRemove) {
      setModalMessage('Item with this ID is not found!');
      setShowModal(true);
      return;
    }

    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
    setModalMessage('Item with this ID removed successfully!');
    setShowModal(true);
  }

  function addItem(id, name, quantity, price, category) {
    if (items.find(item => item.id === id)) {
      setModalMessage('Item with this ID already exists!');
      setShowModal(true);
      return;
    }

    setItems(prevItems => [
      ...prevItems,
      { id, name, quantity: parseInt(quantity, 10), price: parseFloat(price), category },
    ]);
    setModalMessage('Item added successfully!');
    setShowModal(true);
  }

  function updateItem(id, field, newValue) {
    const itemToUpdate = items.find(item => item.id === id);
  
    if (itemToUpdate) {
      const updatedValue = field === 'price' ? parseFloat(newValue) : parseInt(newValue, 10);
      const updatedItems = items.map(item => {
        if (item.id === id) {
          return { ...item, [field]: updatedValue };
        }
        return item;
      });
      setItems(updatedItems);
      setModalMessage('Item with this ID updated successfully!');
    } else {
      setModalMessage('Item with this ID is not found!');
    }
  
    setShowModal(true);
  }

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/add" className="nav-btn">Add Item</Link>
          <Link to="/update" className="nav-btn">Update Item</Link>
          <Link to="/remove" className="nav-btn">Remove Item</Link>
          <Link to="/search" className="nav-btn">Search Item</Link>
          <Link to="/sort" className="nav-btn">Sort Items</Link>
          <Link to="/lowstock" className="nav-btn">Low Stock Items</Link>
        </nav>

        <header className="header">
          <div className="header-card">
            <h1>DLSL Inventory System</h1>
          </div>
        </header>

        <div className="main-container">
          <Routes>
            <Route path="/" element={<DisplayItem items={items} />} />
            <Route path="/add" element={<AddItem addItem={addItem} />} />
            <Route path="/update" element={<UpdateItem items={items} updateItem={updateItem} />} />
            <Route path="/remove" element={
              <RemoveItem
                items={items}
                removeItem={removeItem}
                setModalMessage={setModalMessage}
                setShowModal={setShowModal}
              />
            } />
            <Route path="/search" element={<SearchItem items={items} />} />
            <Route path="/sort" element={<SortItem items={items} setSortedItems={setItems} />} />
            <Route path="/lowstock" element={<LowStockItem items={items} />} />
          </Routes>
        </div>

        {showModal && <Modal message={modalMessage} onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
