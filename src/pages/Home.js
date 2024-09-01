import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Formulario Principal</h1>
      <p>Selecciona uno de los formularios a continuación:</p>
      <ul className="form-links">
        <li><Link to="/ejercicio1">Ejercicio 1</Link></li>
        <li><Link to="/ejercicio2">Ejercicio 2</Link></li>
        <li><Link to="/ejercicio3">Ejercicio 3</Link></li>
        <li><Link to="/ejercicio4">Ejercicio 4</Link></li>
        <li><Link to="/ejercicio5">Ejercicio 5</Link></li>
      </ul>
    </div>
  );
};

export default Home;
