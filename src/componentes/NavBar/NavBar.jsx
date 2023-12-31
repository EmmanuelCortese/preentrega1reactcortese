import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <h1>Mi Tienda</h1>
      <nav>
        <ul>
          <li>Productos 1</li>
          <li>Productos 2</li>
          <li>Productos 3</li>
          <li>Productos 4</li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  );
}

export default NavBar;
