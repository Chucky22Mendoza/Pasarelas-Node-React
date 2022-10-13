import React from 'react';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';

const SocialMediaButtons = (props) => {
    return (
        <div className="login-opciones">
            <FacebookButton urlBack={props.urlBack} />
            <div></div>
            <GoogleButton urlBack={props.urlBack} />
        </div>
    );
};

export default SocialMediaButtons;