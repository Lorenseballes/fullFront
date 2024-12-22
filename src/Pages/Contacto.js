

const Contacto = () => {
    return (
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <form className="bg-white p-4 rounded shadow">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control border-0 shadow-sm" 
                                id="nombre" 
                                placeholder="Ingresa tu nombre" 
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control border-0 shadow-sm" 
                                id="email" 
                                placeholder="Ingresa tu correo electrónico" 
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comentarios" className="form-label">Comentarios</label>
                            <textarea 
                                className="form-control border-0 shadow-sm" 
                                id="comentarios" 
                                rows="3" 
                                placeholder="Escribe tus comentarios" 
                                required
                            ></textarea>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-secondary shadow-sm">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contacto;