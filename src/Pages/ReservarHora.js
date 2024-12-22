import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ReservarHora() {
    const handleReserva = (e) => {
        e.preventDefault();
        alert('Hora reservada con éxito');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Reservar Hora</h1>
            <Form className="w-50 mx-auto" onSubmit={handleReserva}>
                <Form.Group className="mb-3" controlId="fecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="hora">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Reservar
                </Button>
            </Form>
        </div>
    );
}

export default ReservarHora;
