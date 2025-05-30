import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Page from '../pages/Home.jsx';
import Login from '../pages/About.jsx';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />} /> {/* Página inicial */}
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;