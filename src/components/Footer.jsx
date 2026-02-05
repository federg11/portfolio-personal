
const Footer = () => {
    return (
        <footer className="footer-content mt-5">
            <div className="footer-body">
                <a href="https://www.linkedin.com/in/federico-galup-a28791178" target="blank"><i className="bi bi-linkedin fw-400"></i></a>
                <a href="https://github.com/federg11" target="blank"><i className="bi bi-github fw-400"></i></a>
            </div>
            <p className="text-white text-center">Sitio Desarrollado por FRG {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer