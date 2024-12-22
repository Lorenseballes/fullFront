import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Login({ setAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/login', { email, password },);
            if (response.data && response.data.token) {
                setAuthenticated(true); // Cambiar el estado de autenticación
                alert('Inicio de sesión exitoso');
                navigate('/reservar-hora'); // Redirigir al usuario
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Hubo un problema al iniciar sesión');
        }
    };

    return (
        <>
        <div className="container mt-5">
            <h1 className="text-center">Iniciar Sesión</h1>
            <Form className="w-50 mx-auto" onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese su email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese su contraseña"
                        required
                    />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Iniciar sesión
                </Button>
            </Form>
        </div>
        </>
    );
}

export default Login;
