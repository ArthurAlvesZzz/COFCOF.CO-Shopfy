import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import B2B from './pages/B2B';
import Origin from './pages/Origin';
import MapPartners from './pages/MapPartners';
import Subscription from './pages/Subscription';
import Cafes from './pages/Cafes';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cafes" element={<Cafes />} />
          <Route path="assinaturas" element={<Subscription />} />
          <Route path="origem" element={<Origin />} />
          <Route path="onde-nos-encontrar" element={<MapPartners />} />
          <Route path="para-empresas" element={<B2B />} />
          <Route path="contato" element={<Contact />} />
          
          {/* Redirects for old routes */}
          <Route path="assinatura" element={<Navigate to="/assinaturas" replace />} />
          <Route path="empresas" element={<Navigate to="/para-empresas" replace />} />
          <Route path="parceiros" element={<Navigate to="/onde-nos-encontrar" replace />} />
          <Route path="onde-encontrar" element={<Navigate to="/onde-nos-encontrar" replace />} />
          
          {/* Catch all to redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

