import '../CSS/ecommerce.css';
import Enargy from '../image/enargy.webp';
import Colageno from '../image/complex.webp';
import Whey from '../image/whey.webp';
import Remeradama from '../image/remeradama.avif';
import Zapatillas from '../image/zapatillas.webp';
import RemeraHombre from '../image/remera.avif';
import Set from '../image/entrenamiento-en-casa.jpg';
import Correa from '../image/correa-munequera.webp';
import Botella from '../image/botella.jpg';
import  { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Ecommerce = () => {

    const productos = [
        { nombre: 'Enargy Gel', precio: 2500, descripcion: 'Ideal para trabajo aeróbico', img: Enargy },
        { nombre: 'Colageno Complex', precio: 4000, descripcion: 'Para huesos y cartílagos', img: Colageno },
        { nombre: 'Whey Protein', precio: 3500, descripcion: 'Proteína de elevada calidad', img: Whey },
        { nombre: 'Remera adidas Dama', precio: 1500, descripcion: 'Remera para dama', img: Remeradama },
        { nombre: 'Zapatillas under armour', precio: 5500, descripcion: 'Zapatillas deportivas', img: Zapatillas },
        { nombre: 'Remera adidas Hombre', precio: 1800, descripcion: 'Remera deportiva para hombre', img: RemeraHombre },
        { nombre: 'Set de entrenamiento', precio: 2500, descripcion: 'Set de 4 accesorios', img: Set },
        { nombre: 'Correa muñequera', precio: 1000, descripcion: 'Muñequera para deporte', img: Correa },
        { nombre: 'Botella Puma', precio: 800, descripcion: 'Botella con laterales engomados', img: Botella },
    ];

    const agregarAlCarrito = (producto) => {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
        carrito.push(producto); 
        localStorage.setItem('carrito', JSON.stringify(carrito)); 
        alert("Producto agregado al carrito");
    };

    return(

        <main className="seccionCards">
        <h2 className="tituloEcommerce">SUPLEMENTOS</h2>
        <section className="fila">
            {productos.map((producto, index) => (
                <div key={index} className="card">
                    <img src={producto.img} alt={producto.nombre} />
                    <div className="cardContenido">
                        <h3 className="cardTitulo">{producto.nombre} ${producto.precio}</h3>
                        <p className="cardDescripcion">{producto.descripcion}</p>
                        <Link to="/" className="boton">Leer más</Link>
                        <Button onClick={() => agregarAlCarrito(producto)} className="comprar" variant="secondary">Agregar al carrito</Button>
                    </div>
                </div>
            ))}
        </section>
    </main>

    );
}

export default Ecommerce;