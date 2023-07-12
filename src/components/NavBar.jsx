import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/acerca">Acerca de</a></li>
        <li>
      <CartWidget />
      </li>
      
      </ul>
      
      
    </nav>
    
  );
};

export default NavBar;
