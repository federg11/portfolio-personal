/* eslint-disable no-unused-vars */


// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, title, description, repo, link }) => {
    return (

        <div className="col-md-4 col-xs-12 col-sm-12">
            <div className="card">
                <img src={image} className="card-img-top" alt="Card 1" />
                <div className="card-text-overlay">
                    <div className="d-flex flex-column">
                        <h5>{title}</h5>
                        <p>{description}</p>
                        <div className="card__link">
                        <a href={repo} target="blank"><i className="bi bi-github"></i></a>
                        <a href={link} target="blank"><i className="bi bi-link"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectCard