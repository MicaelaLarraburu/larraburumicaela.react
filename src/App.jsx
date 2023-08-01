import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from './components/Contacto';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="¡Bienvenido!" />} />
          <Route exact path="/category/:selectedCategory" element={<ItemListContainer greeting="¡Bienvenido!" />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
