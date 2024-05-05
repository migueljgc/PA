import './GestionUsuario.css';
import './script'


const GestionUsuario = () => {
    return (
        <div className='GestionUsuario'>
            <div className="usa">
                <div className="menu">
                    <header className="main-header">
                        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
                        <input type="checkbox" id="btn-nav" />
                        <nav>
                            <ul className="men">
                                <li><a href="#">1</a></li>

                            </ul>
                        </nav>

                    </header>
                </div>
                <div className="usuario">
                    <div className="user-menu">
                        <div className="user-info">
                            <img src='/pqrspng.png' alt="Foto de perfil" className="profile-picture" width="35%" height="40%" />
                            <br />
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dropdown-content">
                            <span className="username">¡Hola, Admin!</span><br />
                            <a href="#"><i className="fa fa-plus"></i>Editar usuario</a>
                            <a href="#"><i className="fa fa-sign-out"></i> Salir</a>
                        </div>
                    </div>
                </div>
                <div className="imag">
                    <img src="/iconprofile.png" alt="x" />
                </div>
                <div className="datos"></div>
            </div>



        </div>
    );
};



export default GestionUsuario;