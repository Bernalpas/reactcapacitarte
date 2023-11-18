
//5. Importamos los Links
import { Link } from 'react-router-dom';


const Navegacion = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

            {/* 6. Ubicamos a Link dentro de las anclas */}

                <Link to='/' className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/main' className="nav-link">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/formulario' className="nav-link">Formulario</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/personajes' className="nav-link" aria-disabled="true">Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                aria-disabled="true"
                                target="_blank"
                                rel="noopener noreferrer"
                                href='https://www.capacitarte.org/'
                            >Capacitarte</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

//function Navegacion() {}


export default Navegacion;