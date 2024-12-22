import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditarFormulario() {
    const { id } = useParams(); // Obtener el ID desde la URL
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [plan, setPlan] = useState('');
    const [sociedad, setSociedad] = useState('');

    // Cargar los datos del usuario al montar el componente
    useEffect(() => {
        // Obtener los datos del usuario desde la API
        axios.get(`http://localhost:9000/user/${id}`)
            .then((response) => {
                const usuario = response.data;
                setNombre(usuario.nombre);
                setEmail(usuario.email);
                setPlan(usuario.plan);
                setSociedad(usuario.sociedad);
            })
            .catch((error) => {
                console.log('Error al cargar los datos del usuario:', error);
            });
    }, [id]);

    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const updatedUser = {
            nombre,
            email,
            password,
            plan,
            sociedad,
        };

        // Enviar los datos modificados a la API
        axios.put(`http://localhost:9000/user/${id}`, updatedUser)
            .then((response) => {
                console.log('Usuario actualizado correctamente');
                // Vaciar los campos después de guardar
            setNombre('');
            setEmail('');
            setPassword('');
            setPlan('');
            setSociedad('');
            
            })
            .catch((error) => {
                console.log('Error al actualizar el usuario:', error);
            });
    };

    return (
        <div className="d-flex container mt-5">
            <Form className="w-75 shadow-lg p-4 rounded" onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="nombre">
                    <Form.Label className="fw-bold">Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Tu nombre" 
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="email">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com" 
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="plan">
                    <Form.Label className="fw-bold">Seleccionar plan</Form.Label>
                    <select 
                        id="inputState" 
                        className="form-select" 
                        value={plan} 
                        onChange={(e) => setPlan(e.target.value)} 
                        required
                    >
                        <option value="">Seleccionar Plan...</option>
                        <option value="Pase libre">Pase libre</option>
                        <option value="3 veces por semana">3 veces por semana</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-4" controlId="sociedad">
                    <Form.Label className="fw-bold">Sociedad Médica</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={sociedad}
                        onChange={(e) => setSociedad(e.target.value)} 
                        placeholder="Sociedad Medica" 
                        required
                    />
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Button variant="success" type="submit" className='mt-4'>Guardar cambios</Button>
                    <Button variant="outline-warning" className='mt-4' onClick={() => {
                    setNombre('');
                    setEmail('');
                    setPassword('');
                    setPlan('');
                    setSociedad(''); 
                    }}>Limpiar Campos</Button>
                </div>
            </Form>
        </div>
    );
};

export default EditarFormulario;
