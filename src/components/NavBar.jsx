import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li>
          <div>
            <span>Productos</span>
            <ul>
              <li>
                <Link to="/category/Mates">Mates</Link>
              </li>
              <li>
                <Link to="/category/Accesorios">Accesorios</Link>
              </li>
            </ul>
          </div>
        </li>
        <li><Link to="/Contacto">Contacto</Link></li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;