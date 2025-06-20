import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext.jsx';
import AppRoutes from './AppRoutes.jsx';
import { LoaderProvider } from './context/LoaderContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoaderProvider>
        <AppRoutes />
        </LoaderProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
