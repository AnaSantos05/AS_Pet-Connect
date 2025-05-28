import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Page from './pages/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define a rota para a página inicial */}
        <Route path="/" element={<Page />} />

        {/* Define a rota para a página de login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;