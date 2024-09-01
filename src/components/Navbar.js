import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que este archivo exista y esté correctamente enlazado

const Navbar = ({ username, email }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-item">Home</Link></li>
        <li><Link to="/products" className="navbar-item">Products</Link></li>
        <li><Link to="/forms" className="navbar-item">Forms</Link></li>
      </ul>
      {username && email && (
        <div className="user-info">
          <span>Bienvenido, {username} ({email})</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
