import React from 'react';
import './Login.css';
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import GestionUsuario from '../Usuarios/Admin/GestionUsuario/GestionUsuario';

const Login = () => {
    return (
        <div className='login'>
            <div className="formLogin">
            <div className="usa">
                <div className="usu"></div>
            </div>
            <div className="loginForm">
                <form action="" className="Formlogin">
                    <h1>Login</h1>

                    <div className="input-box">
                        <label ><VscAccount /> Usuario: </label><br />
                        <input type="text" className='usuario' required />
                    </div><br />
                    <div className="input-box">
                        <label htmlFor=""><RiLockPasswordLine /> Contraseña: </label><br />
                        <input type="password" className='contrasena' required />
                    </div><br />
                    <div className="btnIniciarSesion">
                        <button >
                            Iniciar Sesión
                        </button>
                    </div><br />
                    <div className="remember-forgod">
                        <label > <input type="checkbox" />Recuerdame <label >  </label></label>
                        <a href="#">  ¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="register">
                        <p>¿No tienes cuenta aún? <a href="#">Registrar</a></p>
                    </div>
                </form>
            </div>
            </div>
        </div>

    );
};
export default Login;


