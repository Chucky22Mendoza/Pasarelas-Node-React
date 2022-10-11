import React from 'react';

const banner = () => {
    return (
        <div className="banner">
            <div className="cards">
                <img src="/img/banner/visa.svg" alt="" />
                <img src="/img/banner/master-card.svg" alt="" />
                <img src="/img/banner/american-express.svg" alt="" />
                <img src="/img/banner/ipay.svg" alt="" />
                <img src="/img/banner/gpay.svg" alt="" />
            </div>
            <span>Por tu seguridad todos los pagos son procesados con Stripe</span>
        </div>
    );
};

export default banner;