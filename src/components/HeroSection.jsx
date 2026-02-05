import image from '../assets/imagenes/perfil.jpg';

const HeroSection = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-6 col-md-8 mx-auto text-center">
                        <div className="hero-content">
                            {/* Foto de perfil con efecto modern */}
                            <div className="hero-image-wrapper mb-5">
                                <div className="hero-image-container">
                                    <img 
                                        src={image} 
                                        alt="Federico Galup - Desarrollador Web" 
                                        className="hero-image"
                                    />
                                    <div className="hero-image-overlay"></div>
                                </div>
                            </div>
                            
                            {/* Texto principal con animaciones */}
                            <div className="hero-text">
                                <h1 className="hero-title">
                                    <span className="hero-name">Federico Galup</span>
                                    <span className="hero-role">Desarrollador Full Stack</span>
                                </h1>
                                
                                {/* Links directos */}
                                <div className="hero-links mt-4">
                                    <a href="#projects" className="hero-link">
                                        <i className="bi bi-folder"></i>
                                        <span>Proyectos</span>
                                    </a>
                                    <a href="#contact" className="hero-link">
                                        <i className="bi bi-envelope"></i>
                                        <span>Contacto</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection