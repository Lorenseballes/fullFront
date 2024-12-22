import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate(); // Inicializar el hook
    const handleEditar = (id) => {
        navigate(`/editar/${id}`); // Redirigir a la ruta de edición
    };

    const URL = process.env.REACT_APP_API_URL_SERVER_GET;

    useEffect(() => {

            const obtenerUsuarios = async () => {
                try {
                const respuesta = await axios.get(URL);
                setUsuarios(respuesta.data);

            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo cargar la lista de usuarios.',
                });
            }
        };

            obtenerUsuarios();

            //console.log(usuarios);

    }, []);

    const eliminarUsuario = async (id) => {

        console.log(id);
        
        try {
            const respuesta = await axios.delete(`http://localhost:9000/user/${id}`);
            setUsuarios(usuarios.filter(usuario => usuario._id !== id));
            console.log(respuesta);

        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    }

    const confirmarEliminación = (id) => {

        console.log(id);
        
        Swal.fire({
            title: "Estás seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarUsuario(id);
                Swal.fire({
                    title: "Usuario Eliminado!",
                    icon: "success"
                });
            }
        });

        
    }



    return (
        <>
            <h1 className='container mt-5 text-center'>
                Clientes Activos
            </h1>
            <div className='container mt-5 text-center'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Plan</th>
                            <th>Sociedad Médica</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario._id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.plan}</td>
                                <td>{usuario.sociedad}</td>
                                <td>
                                <button className="btn btn-outline-warning me-2"
                                        onClick={() => handleEditar(usuario._id)}> Editar 
                                </button>
                                <button
                                        className='btn btn-danger'
                                        onClick={() => { confirmarEliminación(usuario._id) }}> Eliminar
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Usuarios;