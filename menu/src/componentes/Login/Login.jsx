import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className="usa">
                <div className="usu"></div>
            </div>
            <div class="container">
                <div class="formLogin"></div>
                <div class="loginForm">
                    <form action="" className="loginForm">
                        <h1>Login</h1>
                        <div className="input-box">
                            <label htmlFor="">Usuario: </label><br />
                            <input type="text" required />
                        </div><br />
                        <div className="input-box">
                            <label htmlFor="">Contraseña: </label><br />
                            <input type="password" required />
                        </div><br />
                        <div className="remember-forgod">
                            <label > <input type="checkbox" />Recuerdame <label >  <a href="#">  ¿Olvidaste tu contraseña?</a></label></label>
                        </div>
                        <div className="register">
                            <p>¿No tienes cuanta aun? <a href="#">Registrar</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;