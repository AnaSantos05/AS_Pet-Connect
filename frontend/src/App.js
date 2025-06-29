import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Page from './pages/index';
import MenuPet from './pages/MenuPet';
import OwnerHomeInterface from './pages/OwnerHomeInterface';
import PetMenu from './pages/PetMenu';
import Register from './pages/Register';
import PetAssignedPin from './pages/PetAssignedPin';
import OwnerMap from './pages/OwnerMap';
import AddPet from './pages/AddPet';
import OwnerFinal from './pages/OwnerFinal';
import OwnerReview from './pages/OwnerReview';
import PetTakerHome from './pages/PetTakerHome';
import AddService from './pages/AddService';
import PetAssignedChat from './pages/PetAssignedChat';
import Phone from './pages/Phone';
import ChatOwner from './pages/ChatOwner';
import PetTakerSettings from './pages/PetTakerSettings';
import PetTakersList from './pages/PetTakersList';
import PetRequestService from './pages/PetRequestService';
import PetTakerMap from './pages/PetTakerMap';
import ServiceRequests from './pages/ServiceRequests';
import PetTakerProfile from './pages/PetTakerProfile';
import OwnerSettings from './pages/OwnerSettings';
import VerificationPetTaker from './pages/VerificationPetTaker';
import PetMenuAssigned from './pages/PetMenuAssigned';
import RegisterServiceMenu from './pages/RegisterServiceMenu'
import UserProfilePetOwnerOnSettings from './pages/userprofilepetowner';
import { FunctionProvider } from './contexts/FunctionContext';
import PetHotelDetails from './pages/PetHotel';

import PetSitterAddServiceInterface from './pages/PetSitterAddServiceInterface'
import PetSitterTakerHomeInterface from './pages/PetSitterTakerHomeInterface'

import PetHotelDetailsWithForm from './pages/PetHotelService';

import PaymentProcedure from './pages/PetHotelPaymentChoice';
import PaymentSuccessful from './pages/PetHotelPaymentDone';

import PaymentSuccessfulPetTaker from './pages/PetTakerPaymentDone';
import Store from './pages/Store';
import PaymentConfirmation from './pages/BuyItem';

import PaymentSuccessfulStore from './pages/StoreDone';

import PetServices from './pages/PetServices';
import { PetTakerNotifications } from './pages/PetTakerNotifications';

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

          <Route path="/OwnerHomeInterface" element={<OwnerHomeInterface />} />
          <Route path="/PetMenu/:petName" element={<PetMenu />} />

          {/* Define a rota para a página do menu */}
          <Route path="/RegisterServiceMenu" element={<RegisterServiceMenu />} />

          <Route path='/userprofilepetowner' element={<UserProfilePetOwnerOnSettings />} />

          <Route path='/Register' element={<Register />} />

          <Route path='/OwnerSettings' element={<OwnerSettings />} />

          <Route path='/VerificationPetTaker' element={<VerificationPetTaker />} />

          <Route path="/PetMenuAssigned/:petName" element={<PetMenuAssigned />} />

          <Route path="/PetAssignedPin/:petName" element={<PetAssignedPin />} />

          <Route path='/OwnerMap' element={<OwnerMap />} />

          <Route path='/AddPet' element={<AddPet />} />

          <Route path='/OwnerReview' element={<OwnerReview />} />

          <Route path='/PetAssignedChat' element={<PetAssignedChat />} />

          <Route path='/Phone' element={<Phone />} />

          <Route path='/PetTakerHome' element={<PetTakerHome />} />

          <Route path='/AddService' element={<AddService />} />

          <Route path='/PetTakerMap' element={<PetTakerMap />} />

          <Route path="/PetTakersList/:petName/:type" element={<PetTakersList />} />

          <Route path="/PetRequestService/:petName" element={<PetRequestService />} />

          <Route path="/PetTakerProfile" element={<PetTakerProfile />} />

          <Route path="/OwnerFinal" element={<OwnerFinal />} />

          <Route path="/ServiceRequests" element={<ServiceRequests />} />

          <Route path="/PetHotel" element={<PetHotelDetails />} />

          <Route path="/PetTakerSettings" element={<PetTakerSettings />} />

          <Route path='/PetSitterTakerHomeInterface' element={<PetSitterTakerHomeInterface />} />

          <Route path='/add-service' element={<PetSitterAddServiceInterface />} />

          <Route path="/PetHotelService" element={<PetHotelDetailsWithForm />} />

          <Route path="/PetHotelPaymentChoice" element={<PaymentProcedure />} />

          <Route path="/PaymentSuccessful" element={<PaymentSuccessful />} />

          <Route path="/PaymentSuccessfulPetTaker" element={<PaymentSuccessfulPetTaker />} />
          
          <Route path="/ChatOwner" element={<ChatOwner />} />

          <Route path="/Store" element={<Store />} />

          <Route path="/BuyItem" element={<PaymentConfirmation />} />

          <Route path="/PaymentSuccessfulStore" element={<PaymentSuccessfulStore />} />

          <Route path="/PetServices/:petName" element={<PetServices />} />

          <Route path="/PetTakerNotifications" element={<PetTakerNotifications />} />



        </Routes>
      </BrowserRouter>
    </FunctionProvider>
  );
};

export default App;
