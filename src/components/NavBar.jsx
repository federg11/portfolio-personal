import logo from '../assets/logo.png';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand text-white" href="#home"><img className='logo' src={logo} alt="" /></a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                                <a className="nav-link" aria-current="page" href="#home">Inicio</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#about">Sobre mí</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#projects">Proyectos</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#skills">Habilidades</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar