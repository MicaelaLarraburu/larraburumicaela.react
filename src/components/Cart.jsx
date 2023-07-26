import React, { useState } from 'react';

const Cart = () => {
  // Utilizamos el estado `cartItems` para almacenar los productos agregados al carrito.
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito.
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para eliminar un producto del carrito.
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  // Función para obtener la cantidad total de elementos en el carrito.
  const getTotalItems = () => {
    return cartItems.length;
  };

  return (
    <div className="cart">
      <img src="./public/carrito.png" alt="Carrito" className="cart-icon" />
      <span className="item-count">{getTotalItems()}</span>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Cart;

