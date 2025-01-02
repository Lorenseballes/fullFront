import '../src/CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navegacion';
import Footer from './Componentes/Footer';
import Home from './Pages/Home';
import Usuarios from './Pages/Usuarios';
import Registrarse from './Pages/Registrarse';
import Contacto from './Pages/Contacto';
import Nosotros from './Pages/Nosotros';
import Ecommerce from './Pages/Ecommerce';
import Carrito from './Componentes/Carrito';
import EditarFormulario from './Pages/EditarFormulario';
import Login from './Pages/Login';
import ReservarHora from './Pages/ReservarHora';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



function App() {

  const [authenticated, setAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
      return authenticated ? children : <Navigate to="/login" />;
    };

  return (
  <>
  <Navegacion/>
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/user/register' element={<Registrarse />} />
    <Route path='/usuarios' element={<Usuarios />} />
    <Route path="/user/:id" element={<EditarFormulario />} />
    <Route path='/contacto' element={<Contacto />} />
    <Route path='/nosotros' element={<Nosotros />} />
    <Route path='/ecommerce' element={<Ecommerce />} />
    <Route path='/carrito' element={<Carrito />} />
    <Route path='/login' element={<Login setAuthenticated={setAuthenticated} />}/>
    <Route path='/reservar-hora' element={
        <ProtectedRoute authenticated={authenticated}>
            <ReservarHora />
        </ProtectedRoute>
    }
/>

    </Routes>

  <Footer/>
  </>
  );
}

export default App;
