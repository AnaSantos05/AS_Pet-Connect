import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Page from './pages/index';
import MenuPet from './pages/MenuPet';
import OwnerHomeInterface from './pages/OwnerHomeInterface';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define a rota para a página inicial */}
        <Route path="/" element={<Page />} />

        {/* Define a rota para a página de login */}
        <Route path="/login" element={<Login />} />

        {/* Define a rota para a página de registro */}
        <Route path="/MenuPet" element={<MenuPet />} />

        {/* Define a rota para a página dos animais */}
        <Route path="/OwnerHomeInterface" element={<OwnerHomeInterface />} />



      </Routes>
    </BrowserRouter>
  );
};

export default App;