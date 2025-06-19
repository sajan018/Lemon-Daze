import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './routes/Login/Login.jsx'
import Register from './routes/Register/Register.jsx'
import AddProduct from './routes/AddProduct/AddProduct.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectefRoutes from './ProtectedRoutes.js'
import { AuthProvider } from './context/authContext.jsx'
import Header from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/addProduct" element={
              <ProtectefRoutes>
                < AddProduct />
              </ProtectefRoutes>} />
          </Routes>
        </Header>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
