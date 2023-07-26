import React from 'react';

const DetalleProducto = ({ productId }) => {
  //  lista de productos con sus detalles.
  const productos = [
    { id: 1, nombre: 'Mate Nahuel', precio: 150, descripcion: 'Un mate de excelente calidad.' },
    { id: 2, nombre: 'Mate Pionero', precio: 120, descripcion: 'Un mate tradicional con historia.' },
    { id: 3, nombre: 'Mate Brc', precio: 180, descripcion: 'Un mate elegante y resistente.' },
  ];

  // Buscamos el producto en la lista según el ID proporcionado.
  const productoSeleccionado = productos.find((producto) => producto.id === parseInt(productId));

  // Si el producto no existe, mostramos un mensaje de error.
  if (!productoSeleccionado) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <h3>{productoSeleccionado.nombre}</h3>
      <p>Precio: ${productoSeleccionado.precio}</p>
      <p>{productoSeleccionado.descripcion}</p>
    </div>
  );
};

export default DetalleProducto;
