import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './contexts/AuthContexts'; // ← Ajout de l'import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ← Ajout du provider */}
      <App />
    </AuthProvider>
  </StrictMode>
);
