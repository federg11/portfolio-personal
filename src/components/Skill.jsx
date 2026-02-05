import htmlImage from '../assets/imagenes/html5.png';
import cssImage from '../assets/imagenes/css.png';
import jsImage from '../assets/imagenes/js.png';
import reactImage from '../assets/imagenes/react.png';
import bootImage from '../assets/imagenes/bootstrap.png';
import tailwindImage from '../assets/imagenes/tailwindcss.png';
import mongoImage from '../assets/imagenes/mongoDB.png';
import nodeImage from '../assets/imagenes/node.png';
import expressImage from '../assets/imagenes/express.png';





const Skill = () => {
    return (
        <div id="skills" className='skills'>
            <h3 className='text-white text-center fw-bold'>Tecnologías</h3>
            <div className='grid-container py-5'>
                    <div className='skill-body'>
                        <img src={htmlImage} className='img-fluid' alt="" />
                        <div className='text-white text-center'>HTML 5</div>
                    </div>
                    <div className='skill-body'>
                        <img src={cssImage} className='img-fluid' alt="" />
                        <div className='text-white text-center'>CSS</div>
                    </div>
                    <div className='skill-body'>
                        <img src={jsImage} className='img-fluid' alt="" />
                        <div className='text-white text-center'>JAVASCRIPT</div>
                    </div>
                    <div className='skill-body'>
                        <img src={reactImage} className='img-fluid' alt="" />
                        <div className='text-white text-center'>REACT JS</div>
                    </div>
                    <div className='skill-body'>
                        <img src={bootImage} className='img-fluid' alt="" />
                        <div className='text-white text-center'>BOOTSTRAP</div>
                    </div>
                    <div className='skill-body'>
                        <img src={tailwindImage} className='img-fluid rounded' alt="" />
                        <div className='text-white text-center'>TAILWIND CSS</div>
                    </div> 
                    <div className='skill-body'>
                        <img src={mongoImage} className='img-fluid rounded' alt="" />
                        <div className='text-white text-center'>MONGODB</div>
                    </div>
                    <div className='skill-body'>
                        <img src={nodeImage} className='img-fluid rounded' alt="" />
                        <div className='text-white text-center'>NODE JS</div>
                    </div>
                    <div className='skill-body'>
                        <img src={expressImage} className='img-fluid rounded' alt="" />
                        <div className='text-white text-center'>EXPRESS JS</div>
                    </div>      
            </div>
            <hr className='line' />
        </div>
    )
}

export default Skill