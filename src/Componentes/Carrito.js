import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Carrito = () => {

    const [carrito, setCarrito] = useState([]);
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const productosCarrito = JSON.parse(localStorage.getItem('carrito'));

        if (!productosCarrito || productosCarrito.length === 0) {
            alert('No hay productos en el carrito');
            navigate('/ecommerce');
        } else {
            setUser(window.sessionStorage.getItem('user'));
            setCarrito(productosCarrito);
        }
    }, [navigate]);

    const eliminarDatos = () => {
        localStorage.removeItem('carrito');
        navigate('/ecommerce');
    };

    const eliminarProducto = (index) => {
        const nuevoCarrito = carrito.filter((_, i) => i !== index);
        setCarrito(nuevoCarrito);
        localStorage.setItem('producto', JSON.stringify(nuevoCarrito));
    };

    return (

        <div className="container text-center">
        <h1>Carrito de {user}</h1>
        {carrito.map((producto, index) => (
            <div key={index} className="card">
                <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <button onClick={() => eliminarProducto(index)} className="btn btn-outline-secondary">
                        Eliminar
                    </button>
                </div>
            </div>
        ))}
        <button onClick={eliminarDatos} className="btn btn-outline-secondary">Comprar</button>
    </div>

);
};

export default Carrito;