import Carousel from 'react-bootstrap/Carousel';
import ImgUno from '../image/img1.jpg';
import ImgDos from '../image/img2.jpg';
import ImgTres from '../image/img3.jpg';
import ImgCuatro from '../image/imagen4.jpg';
import Button from 'react-bootstrap/Button';
import '../CSS/Home.css'


const Home = () => {
    return (
        <>
        <Carousel>
        <Carousel.Item>
        <img src={ImgUno} width="100%" alt='img'/>
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={ImgDos} width="100%" alt='img'/>
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={ImgTres} width="100%" alt='img'/>
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={ImgCuatro} width="100%" alt='img'/>
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 className="display-4 fw-normal text-body-emphasis">PRECIOS MEGAFIT</h1>
    <p className="fs-5 text-body-secondary">Suscribite al plan que más te conviene</p>
    </div>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Pase libre</h4>
        </div>
        <div className="card-body">
            <h1 className="card-title pricing-card-title">$2500<small className="text-body-secondary fw-light">/mo</small></h1>
            <h3 className='fw-light mt-3 mb-4' >Acceso libre a todos los clubes y todas las clases</h3>
            <Button variant="outline-secondary">Subscribite hoy!</Button>{' '}
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
            <h4 className="my-0 fw-normal">3 días a la semana</h4>
        </div>
        <div className="card-body">
            <h1 className="card-title pricing-card-title">$2000<small className="text-body-secondary fw-light">/mo</small></h1>
            <h3 className='fw-light mt-3 mb-4' >Acceso 3 dias a la semana al club suscripto</h3>
            <Button variant="outline-secondary">Subscribite hoy!</Button>{' '}
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-success">
        <div className="card-header py-3 text-bg-success border-success">
            <h4 className="my-0 fw-normal">Suscripción anual</h4>
        </div>
        <div className="card-body">
            <h1 className="card-title pricing-card-title">$20.000</h1>
            <h3 className='fw-light mt-3 mb-4' >Acceso libre a todos los clubes y todas las clases</h3>
            <Button variant="outline-secondary">Subscribite hoy!</Button>{' '}
        </div>
        </div>
    </div>
    </div>
        </>
        
    );
}
export default Home;