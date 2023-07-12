import React from 'react';

const CartWidget = () => {
  const itemCount = 32   ; 

  return (
    <div className="cart-widget">
            <img src="./public/carrito.png" alt="Carrito" className="cart-icon" />

      {itemCount > 0 && <span className="item-count">{itemCount}</span>} {/* Notificación con el número fijo */}
    </div>
  );
};

export default CartWidget;