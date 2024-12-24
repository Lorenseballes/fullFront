import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Formulario() {

    const [nombre, setNombre] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [plan, setPlan] = useState(''); 
    const [sociedad, setSociedad] = useState('');
    

    const handleSubmit = async(e) => {
        e.preventDefault();

        
        try {

            console.log('URL del endpoint:', process.env.REACT_APP_API_URL_SERVER_POST);
            await axios.post(`${process.env.REACT_APP_API_URL_SERVER_POST}`, {
                nombre,
                email,
                password,
                plan,
                sociedad
            });

            handleReset();

            Swal.fire({
                title: 'Enviado!',
                text: 'Click para seguir',
                icon: 'success',
                confirmButtonText: 'Ok'
            })

            console.log('Datos enviados correctamente');

        } catch (error) {

            console.log('Error al enviar los datos ' + error);

            handleReset();
            
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error  al enviar los datos',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            
        }
    }

    const handleReset = () => {
        setNombre('');
        setEmail('');
        setPassword('');
        setPlan('');
        setSociedad('');
    }


    return (
        <>
        <h1 className='container mt-5 text-center'>
            Formulario de Registro
        </h1>
        <div className='d-flex container mt-5 '>
            <Form className='w-75 shadow-lg p-4 rounded' onSubmit={handleSubmit}>
                <Form.Group className="mb-5" htmlFor="nombre">
                    <Form.Label className="fw-bold">Nombre</Form.Label>
                    <Form.Control 
                        id="nombre"
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Tu nombre" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-5" htmlFor="email">
                    <Form.Label className="fw-bold ">Email</Form.Label>
                    <Form.Control
                    id="email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-5" htmlFor="password">
                    <Form.Label className="fw-bold" >Password</Form.Label>
                    <Form.Control
                    id="password"
                        type="password" 
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                        placeholder="password"
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-5" htmlFor="plan">
                <Form.Label  className="fw-bold">Seleccionar plan</Form.Label>
                    <select  
                    id="plan" 
                    className="form-select" 
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)} 
                    required
                    >
                        <option value="" disabled>Seleccionar Plan...</option>
                        <option value="pase libre">Pase libre</option>
                        <option value="3 veces por semana">3 veces por semana</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-5" htmlFor="sociedad">
                    <Form.Label className="fw-bold">Sociedad Médica</Form.Label>
                    <Form.Control 
                    id="sociedad"
                        type="text" 
                        value={sociedad}
                        onChange={(e) => setSociedad(e.target.value)} 
                        placeholder="Sociedad Medica" 
                        required
                        />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="success" type="submit" size="lg" className="w-45">Enviar Datos</Button>
                    <Button variant="outline-warning" onClick={handleReset} size="lg" className="w-45">Limpiar Campos</Button>
                </div>
            </Form>

        </div>
        </>
    );
}

export default Formulario;