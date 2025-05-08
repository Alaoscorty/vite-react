import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AuthenticationLogin from './pages/AuthenticationLogin';
import AuthenticationRegister from './pages/AuthenticationRegister';
import ReservationForm from './pages/ReservationForm';
import ProductPage from './pages/ProductPage';
import RecapCommande from './pages/RecapCommande';
import CryptoPage from './pages/CryptoPage';
import ProposPage from './pages/ProposPage';
import CommandePage from './pages/CommandePage';
import PrivateRoute from "./components/PrivateRouter";
import Notifications from './pages/Notifications';
import RecapReservation from './pages/RecapReservation';
import AchatProduits from './pages/AchatProduits';
import ProduitsDisponibles from './pages/ProduitsDisponibles';
import Chat from './pages/Chat';
import ParrainerPage from './pages/ParrainerPage';

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthenticationLogin" element={<AuthenticationLogin />} />
        <Route path="/AuthenticationRegister" element={<AuthenticationRegister />} />
        <Route path="/Reservations" element={<ReservationForm />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/produits" element={<AchatProduits />} />
        <Route path="/disponibles" element={<ProduitsDisponibles />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/parrainer" element={<ParrainerPage />} />
        <Route path="/recapCommande" element={<RecapCommande />} />
        <Route path="/recapReservation" element={<RecapReservation />} />
        <Route path="/propos" element={<ProposPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/commandes" element={<CommandePage />} />
        <Route path="/Crypto" element={<CryptoPage />} />

        {/* 🔐 Page protégée */}
        <Route
          path="/HomePage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
