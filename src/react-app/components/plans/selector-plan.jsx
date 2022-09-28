import React from 'react';
import select from '../../request/checkout';

const selector = (props) => {
    const selectPlus = async (event) => {
        window.location.href = await select.plus(event, props.queryParams);
    }
    const selectPremium = async (event) => {
        window.location.href = await select.premium(event, props.queryParams);
    }

    return (
        <div className="prices d-flex jc-center">
            <div className="price blue d-flex fd-column">
                <div className="price-plan d-flex ai-center">
                    <img src="/img/plus-plan-icon.svg" alt=""/>
                    <p>Plus</p>
                </div>
                <div className="price-price d-flex">
                    <p name="lblCoin">MXN$</p>
                    <p name="plusValue">249</p>
                    <span name="lblTime">al mes</span>
                </div>
                <div className="price-plan-h">
                    <p>Dispositivos ilimitados</p>
                </div>
                <ul className="d-flex fd-column">
                    <li>Control de inventario</li>
                    <li>Tickets impresos</li>
                    <li>Estadísticas avanzadas</li>
                    <li>Usuarios ilimitados</li>
                    <li>Ventas en Instagram y Facebook</li>
                    <li>Gestión avanzada de pedidos</li>
                </ul>
                <a onClick={selectPlus}>
                    <button className="d-flex ai-center jc-center">Seleccionar plan</button>
                </a>
                <div className="recomended-plan">
                    <img src="/img/star-recomended.svg" alt=""/>
                    <p>Recomendado</p>
                </div>
            </div>
            <div className="price orange d-flex fd-column">
                <div className="price-plan d-flex ai-center">
                    <img src="/img/premium-plan-icon.svg" alt=""/>
                    <p>Premium</p>
                </div>
                <div className="price-price d-flex">
                    <p name="lblCoin">MXN$</p>
                    <p name="premiumValue">549</p>
                    <span name="lblTime">al mes</span>
                </div>
                <a className="price-plan-h">
                    <p>Ventas desde tu computadora</p>
                </a>
                <ul className="d-flex fd-column">
                    <li>Gestión de mesas</li>
                    <li>Múltiples impresoras</li>
                    <li>Importación de productos</li>
                    <li>Modificadores de productos</li>
                    <li>Inventario con recetas</li>
                    <li>Facturación electrónica</li>
                </ul>
                <a onClick={selectPremium}><button className="d-flex ai-center jc-center">Seleccionar plan</button></a>
            </div>
        </div>
    );
};

export default selector;