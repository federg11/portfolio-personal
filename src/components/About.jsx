const About = () => {

return(
   <div className="mb-5">
     <div id="about" className="hero py-5">
        <h2 className='text-white text-center mb-4 fw-bold mt-5'>Sobre <span className='text-primary'>Mí</span></h2>
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <p className="text-white text-center fs-5 mb-4">
                        ¡Hola! Soy <strong className="text-primary">Federico</strong>, 
                        desarrollador web full stack con orientación hacia el frontend.
                    </p>
                    
                    <p className="text-white text-center fs-5 mb-5">
                        Estoy siempre buscando nuevos desafíos que me permitan crecer 
                        profesionalmente y aportar valor dentro de equipos de desarrollo. 
                        Me encanta aprender sobre las nuevas tecnologías y estoy abierto a 
                        oportunidades de aprendizaje y crecimiento profesional.
                    </p>
                </div>
            </div>
        </div>
            <div className="text-center mb-4">
                <h5 className="text-white mb-3">Conectemos</h5>
                <div className="d-flex justify-content-center gap-3 mb-3">
                    <a 
                        href="https://www.linkedin.com/in/federico-galup-a28791178" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary rounded-pill px-4 py-2 text-decoration-none"
                    >
                        <i className="bi bi-linkedin me-2"></i>
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/federg11" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-light rounded-pill px-4 py-2 text-decoration-none"
                    >
                        <i className="bi bi-github me-2"></i>
                        GitHub
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/18e6uZxXt7nCPiXZal6iwRi0WHSArp2CC/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-success rounded-pill px-4 py-2 text-decoration-none"
                    >
                        <i className="bi bi-file-earmark-person me-2"></i>
                        CV
                    </a>
                </div>
            </div>
            <hr className='line' />
    </div>
   </div>
)


}


export default About;