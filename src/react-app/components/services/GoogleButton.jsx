import React, { useEffect } from 'react';
import env from '../../config/enviroment'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { emailNotFound } from '../../utils/login';
import { useNavigate } from "react-router-dom";

const GoogleButton = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: env.GOOGLE_CLIENT_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = async (res) => {
        console.log('success:', res.profileObj);
        const userData = await axios.post(`${env.YIMIMOBILITY_URL}/restaurant/bussinessCheck2`, {
            email: res.profileObj.email
        }).then(({data}) => {
            console.log(data);
            if (data.codigo == "002") {
                document.getElementById("emailInputCheck").value = res.profileObj.email;
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
            document.getElementById("emailInputCheck").value = res.profileObj.email;
            emailNotFound("Usuario no encontrado.");
            return null;
        }).catch(error => {
            document.getElementById("emailInputCheck").value = res.profileObj.email;
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

    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
        <form action="">
            <GoogleLogin
                clientId={env.GOOGLE_CLIENT_ID}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img src="/img/login/login-google-icon.svg" alt="Google"/>
                        <p>Google</p>
                    </button>
                )}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </form>
    );
};

export default GoogleButton;