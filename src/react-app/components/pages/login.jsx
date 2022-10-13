import React, { useState } from 'react';
import {closeLoginPassword, expReg, emailNotFound, emailFound, passwordIncorrect} from '../../utils/login';
import axios from 'axios';
import env from '../../config/enviroment';
import getQueryParams from '../../utils/urlParams';
import paramsExpected from '../../utils/paramsExpected.js';
import { useNavigate } from "react-router-dom";
import Checkout from './checkout';
import GoogleButton from '../services/GoogleButton';
import FacebookButton from '../services/FacebookButton';

const login = () => {
    const queryParams = getQueryParams(window.location.search);
    const params = ["page"];
    const existsAllParams = paramsExpected(queryParams, params);
    const navigate = useNavigate();
    const ssBussinessId = sessionStorage.getItem("bussinessId");
    const ssMail = sessionStorage.getItem("mail");
    const ssPage = sessionStorage.getItem("urlBack");

    if ((ssBussinessId !== undefined && ssBussinessId !== null) && (ssMail !== undefined && ssMail !== null) && (ssPage !== undefined && ssPage !== null)) {
        navigate(`/subscription/${ssBussinessId}/${ssMail}/${ssPage}`);
        window.history.pushState("", "", `/subscription/${ssBussinessId}/${ssMail}/${ssPage}`);
        const paramsSubs = {
            bussinessId: ssBussinessId,
            mail: ssMail,
            page: ssPage
        };
        return (<Checkout queryParams={paramsSubs} />);
    }

    queryParams.urlBack = null;
    if (!queryParams.hasOwnProperty("page") || queryParams.page === "backoffice" || !existsAllParams) {
        queryParams.urlBack = "backoffice";
    }
    if (queryParams.page === "pdv") {
        queryParams.urlBack = "pdv";
    }

    const [inputs, setInputs] = useState({ email: '', password: '' });

    const onChangeHandler = e => {
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        });
    }

    const checkEmailHandler = async () => {
        if (inputs.email.length == 0) {
            emailNotFound("El campo correo es requerido.");
            return;
        }

        if (!expReg.test(inputs.email)) {
            emailNotFound("El correo ingresado es inválido.");
            return;
        }

        await axios.post(`${env.YIMIMOBILITY_URL}/restaurant/bussinessCheck`, {
            email: inputs.email
        }).then(async (res) => {
            res = res.data;
            if (res.datos.length > 0) {
                emailFound(inputs.email);
                return;
            }

            await axios.post(`${env.YIMIMOBILITY_URL}/restaurant/bussinessCheck2`, {
                email: inputs.email
            }).then((res) => {
                res = res.data;
                if (res.codigo == "002") {
                    emailNotFound(res.respuesta);
                    return;
                }
                if (res.datos.length > 0) {
                    emailFound(inputs.email);
                    return;
                }
                emailNotFound("Correo no encontrado.");
                return;
            }).catch((error) => {
                emailNotFound("Error del servidor: " + error.message + ".");
                return;
            });
        }).catch((error) => {
            emailNotFound("Error del servidor: " + error.message + ".");
            return;
        });
        return;
    }

    const loginForm = async () => {
        if (inputs.password.length == 0) {
            passwordIncorrect("El campo contraseña es requerido.");
            return;
        }
        if (inputs.password.length < 6) {
            passwordIncorrect("La contraseña debe ser de al menos 6 caracteres.");
            return;
        }

        const userData = await axios.post(`${env.YIMIMOBILITY_URL}/restaurant/LoginAnalitica`, {
            email: inputs.email,
            pass: inputs.password
        }).then(res => {
            res = res.data;
            if (res.codigo === "000") {
                passwordIncorrect("Contraseña incorrecta.");
                return null;
            }
            return {
                mail: inputs.email,
                bussinessId: res.datos[0].id,
                nombre: res.datos[0].nombre,
                adminId: res.datos[0].admin.id,
                nombreAdmin: res.datos[0].admin.nombre,
                urlBack: queryParams.urlBack
            };
        }).catch(error => {
            passwordIncorrect("Error del servidor: " + error.message + ".");
            return null;
        });

        if (userData !== null) {
            sessionStorage.setItem("bussinessId", userData.bussinessId);
            sessionStorage.setItem("mail", userData.mail);
            sessionStorage.setItem("urlBack", userData.urlBack);
            navigate(`/subscription/${userData.bussinessId}/${userData.mail}/${userData.urlBack}`);
        }

        return;
    };

    return (
        <div className="body d-flex ai-center fd-column">
            <nav className="nav-bar d-flex ai-center">
                <a href=""><img src="/img/login/logo-yimi.svg" alt="Yimi's Logo"/></a>
                <a href="https://api.whatsapp.com/send?phone=5213121685029&text=Hola!%20quiero%20informacion%20sobre%20Yimi%20!" target="_blank">
                    <button className="nav-button d-flex ai-center">
                        Ayuda
                        <img src="/img/login/question.svg" alt="Question Icon"/>
                    </button>
                </a>
            </nav>
            <div className="frame">
                <div id="loginFirst" className="content-login">
                    <div className="login d-flex">
                        <div className="owl-login owl-carousel owl-theme">
                            <div className="item login-slide d-flex fd-column fd-column">
                                <div>Registra productos y controla tu inventario</div>
                                <p>Un par de clicks y estás listo para comenzar.</p>
                                <img src="/img/login/inventarioyimi.webp" alt="Stock"/>
                            </div>
                            <div className="item login-slide d-flex fd-column">
                                <div>Registra las ventas e imprime tickets</div>
                                <p>Comparte tickets por WhatsApp, e-mail o imprímelos.</p>
                                <img src="/img/login/ventasyrecibosyimi.webp" alt="Sales"/>
                            </div>
                            <div className="item login-slide d-flex fd-column">
                                <div>Administrar todo tu personal es muy fácil</div>
                                <p>Tu tienda en tiempo real en la mano de cada vendedor.</p>
                                <img src="/img/login/administraciondepersonalyimi.webp" alt="Team"/>
                            </div>
                            <div className="item login-slide d-flex fd-column">
                                <div>Crea una tienda online de tus productos</div>
                                <p>Y recibe tus pedidos directo en Yimi.</p>
                                <img src="/img/login/tiendaenlineayimi.webp" alt="Online"/>
                            </div>
                            <div className="login-slide d-flex fd-column item">
                                <div>Informes sencillos que vas a adorar</div>
                                <p>Yimi te brinda una visión completa de lo que ocurre en tu negocio.</p>
                                <img src="/img/login/informesyimi.webp" alt="Graphs"/>
                            </div>
                        </div>
                        <div className="login-options d-flex fd-column ai-center">
                            <div className="login-header d-flex fd-column ai-center">
                                <p>Ingresa o crea una cuenta</p>
                                <p>Es gratis y sin contratos a largo plazo</p>
                            </div>
                            <div className="input-container">
                                <span id="emailEmpleado" className="input-error"></span>
                                <input type="text" name="email" onChange={onChangeHandler} id="emailInputCheck" className="input-general" required placeholder="E-mail"/>
                                <label>E-mail</label>
                            </div>
                            <div className="blue-button" onClick={checkEmailHandler}>
                                <p>Continuar</p>
                            </div>
                            <div className="login-alt-options d-flex ai-center fd-column">
                                <p>O ingresa con</p>
                                <div className="login-opciones">
                                    {/* <form>
                                        <button type="submit">
                                            <img src="/img/login/login-facebook-icon.svg" alt="Facebook"/>
                                            <p>Facebook</p>
                                        </button>
                                    </form> */}
                                    <FacebookButton urlBack={queryParams.urlBack} />
                                    <div></div>
                                    <GoogleButton urlBack={queryParams.urlBack} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loginPassword" className="content-login fd-column hidden">
                    <div className="registro d-flex fd-column ai-center">
                        <img className="yimi-outline" src="/img/login/yimi-outline.svg" alt=""/>
                        <div className="login-header d-flex fd-column ai-center">
                            <p>Te damos la bienvenida</p>
                            <p id="emailFoundContainer"></p>
                        </div>
                        <div className="form-container d-flex ai-center fd-column">
                            <div className="input-container">
                                <span id="passwordError" className="input-error"></span>
                                <input id="passWordLogin" onChange={onChangeHandler} name="password" className="input-general" type="password" required placeholder="Contraseña"/>
                                <label>Contraseña</label>
                                <div id="passwordToggler" className="passwordToggler">
                                    <img className="passH" src="/img/login/password-hidden.svg" alt=""/>
                                    <img className="passS" src="/img/login/password-shown.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="blue-button" onClick={loginForm}>
                            <p>Ingresar</p>
                        </div>
                    </div>
                    <div className="control-buttons">
                        <div onClick={closeLoginPassword}>
                            <img src="/img/login/arrow-variants-blue.svg" alt="" style={{transform: 'rotate(180deg)'}}/>
                            <p>Regresar</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;