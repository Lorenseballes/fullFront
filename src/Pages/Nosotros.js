import Imagen1 from '../image/imagen1.jpg';
import Imagen2 from '../image/imagen2.jpg';
import Imagen3 from '../image/imagen3.jpg';


const Nosotros = () => {
    return(
        <>
        <div className="container mt-5">
        <div className="row featurette">
        <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Bienvenidos a MEGAFIT <span className="text-body-secondary"></span></h2>
        <p className="lead">
            En MEGAFIT, creemos que el ejercicio es más que un simple esfuerzo físico: es un camino hacia el bienestar integral. Somos una comunidad apasionada por la salud, el equilibrio y el crecimiento personal.
            Nuestro objetivo es brindarte un espacio donde puedas alcanzar tus metas, ya sea ganar fuerza, mejorar tu condición física o simplemente disfrutar de un estilo de vida más activo. Aquí encontrarás un ambiente inclusivo, entrenadores dedicados y equipos de última generación para ayudarte a dar lo mejor de ti.
            ¡Únete a nuestra familia y transforma tu vida con nosotros!</p>
        </div>
        <div className="col-md-5 mb-4">
        <img src={Imagen1} width="550" height="450" alt='imagen'/>
        </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
        <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1"> <span class="text-body-secondary"></span></h2>
        <p className="lead">Nuestro equipo de entrenadores altamente capacitados trabaja contigo para diseñar planes personalizados que maximicen tu progreso.
        Ya sea que estés comenzando tu viaje fitness o buscando llevar tus resultados al siguiente nivel, tenemos todo lo que necesitas: clases dinámicas, áreas de entrenamiento funcional, y un ambiente motivador donde cada día es una nueva oportunidad para superarte.</p>
        </div>
        <div className="col-md-5 md-4">
        <img src={Imagen2} width="550" height="450" alt='imagen'/>
        </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
        <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1"> <span class="text-body-secondary"></span></h2>
        <p className="lead">Desde equipos de última generación hasta clases virtuales y herramientas de seguimiento digital, nuestro enfoque moderno está diseñado para optimizar tu tiempo y esfuerzo.
        Queremos que disfrutes cada sesión y sientas que estás invirtiendo en tu bienestar. Más que un gimnasio, somos tu aliado en este camino hacia una vida activa, saludable y plena.</p>
        </div>
        <div className="col-md-5" mb-4>
        <img src={Imagen3} width="550" height="450" alt='imagen'/>
        </div>
    </div>
    <hr className="featurette-divider"/>
    </div>
        </>
        

    );
}

export default Nosotros;
