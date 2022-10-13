import React from 'react';
import env from '../../config/enviroment'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { emailNotFound } from '../../utils/login';
import { useNavigate } from "react-router-dom";

const FacebookButton = (props) => {
    console.log(props.urlBack);
    const navigate = useNavigate();

    const handleResponse = async (res) => {
        const userData = await axios.post(`${env.YIMIMOBILITY_URL}/restaurant/bussinessCheck2`, {
            email: res.email
        }).then(({data}) => {
            console.log(data);
            if (data.codigo == "002") {
                document.getElementById("emailInputCheck").value = res.email;
                emailNotFound(data.respuesta);
                return null;
            }
            if (data.datos.length > 0) {
                return {
                    mail: data.datos[0].email,
                    bussinessId: data.datos[0].id,
                    urlBack: props.urlBack
                };
            }
            document.getElementById("emailInputCheck").value = res.email;
            emailNotFound("Usuario no encontrado.");
            return null;
        }).catch(error => {
            document.getElementById("emailInputCheck").value = res.email;
            emailNotFound("Error del servidor: " + error.message + ".");
            return null;
        });

        if (userData === null) {
            window.location.href = env.NEGOCIO_URL;
        }
        if (userData !== null) {
            sessionStorage.setItem("bussinessId", userData.bussinessId);
            sessionStorage.setItem("mail", userData.mail);
            sessionStorage.setItem("urlBack", userData.urlBack);
            navigate(`/subscription/${userData.bussinessId}/${userData.mail}/${userData.urlBack}`);
        }
        return;
    };

    return (
        <form>
            <FacebookLogin
                appId={env.FACEBOOK_APP_ID}
                autoLoad={false}
                callback={handleResponse}
                fields="email"
                textButton="Facebook"
                icon={<img src="/img/login/login-facebook-icon.svg" alt="Facebook"/>}
            />
        </form>
    );
};

export default FacebookButton;