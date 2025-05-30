import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Page from './pages/index';
import MenuPet from './pages/MenuPet';
import OwnerHomeInterface from './pages/OwnerHomeInterface';
import PetMenu from './pages/PetMenu';
import Register from './pages/Register';
import OwnerSettings from './pages/OwnerSettings';
import VerificationPetTaker from './pages/VerificationPetTaker';
import PetMenuAssigned from './pages/PetMenuAssigned';
import RegisterServiceMenu from './pages/RegisterServiceMenu'
import UserProfilePetOwnerOnSettings from './pages/userprofilepetowner';
import { FunctionProvider } from './contexts/FunctionContext';

const App = () => {
  return (
    <FunctionProvider>
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

          {/* Define a rota para a página do menu */}
          <Route path="/PetMenu" element={<PetMenu />} />

          {/* Define a rota para a página do menu */}
          <Route path="/RegisterServiceMenu" element={<RegisterServiceMenu />} />

          <Route path='/userprofilepetowner' element={<UserProfilePetOwnerOnSettings />} />

          <Route path='/Register' element={<Register />} />

          <Route path='/OwnerSettings' element={<OwnerSettings />} />

          <Route path='/VerificationPetTaker' element={<VerificationPetTaker />} />

          <Route path='/PetMenuAssigned' element={<PetMenuAssigned />} />

        </Routes>
      </BrowserRouter>
    </FunctionProvider>
  );
};

export default App;