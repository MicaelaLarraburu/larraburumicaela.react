import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/home';
import Productos from './components/Productos'; // Importa el componente Productos 
import Contacto from './components/Contacto'; // Importa el componente Contacto 
import Acerca from './components/Acerca'; // Importa el componente Acerca 
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';

const App = () => {

  
   const categorias = [
    { id: 1, nombre: 'Categoría 1' },
    { id: 2, nombre: 'Categoría 2' },
    { id: 3, nombre: 'Categoría 3' },
  ];

  return (
    <Router>
      <div>
        <NavBar categorias={categorias} />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
