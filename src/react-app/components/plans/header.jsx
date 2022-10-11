import React from 'react';

const header = (props) => {
    const logout = () => {
        sessionStorage.setItem('bussinessId', null);
        sessionStorage.setItem('mail', null);
        sessionStorage.setItem('urlBack', null);
        sessionStorage.clear();
        window.location.href = "/";
    }

    return (
        <section id="header">
            <div className="header-flex">
                <div>
                    <a onClick={logout}>
                        <img src="/img/back.svg" alt=""/>
                    </a>
                </div>
                <img src="/img/yimi-logo.svg" alt=""/>
                <div>
                    <a className="whats-support" href="https://api.whatsapp.com/send?phone=5213121161953" target="_blank">Soporte Yimi <img src="/img/wapp.svg" alt=""/></a>
                </div>
            </div>
            <div>
                <h3>{props.queryParams.mail}</h3>
                <a onClick={logout}>Cerrar sesión</a>
            </div>
        </section>
    );
}

export default header;