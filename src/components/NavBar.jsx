import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca de</Link>
        </li>
      </ul>
      <Cart />
    </nav>
  );
};

export default NavBar;

