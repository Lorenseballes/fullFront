import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../image/logo.png';
import  { Link } from 'react-router-dom';


const Navegacion = () => {
    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand >
        <a href="/">
            <img src={Logo} width="100" height="100"alt='logo'/>
            </a>
        </Navbar.Brand>
        <Nav className="me-auto justify-content-center w-100">
        <Link className="text-reset text-decoration-none mx-2" to="/clubes">Clubes</Link>
        <Link className="text-reset text-decoration-none mx-2" to="/ecommerce">Ecommerce</Link>
        <Link className="text-reset text-decoration-none mx-2" to="/contacto">Contacto</Link>
        <Link className="text-reset text-decoration-none mx-2" to="/nosotros">Nosotros</Link>
        <Link className="text-reset text-decoration-none mx-2" to="/user/register">Registrarse</Link>
        <Link className="text-reset text-decoration-none mx-2" to="/usuarios">Usuarios</Link>
        <Link className="text-reset text-decoration-none mx-2" to="/login">Login</Link>
        <Link to="/carrito"><i class="bi bi-cart-check-fill"></i></Link>
        </Nav>
        </Container>
        </Navbar>
        </>
    );
}

export default Navegacion;