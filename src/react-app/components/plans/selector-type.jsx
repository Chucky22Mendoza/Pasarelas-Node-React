import React from 'react';
import change from '../../utils/changeEvents';

const selectorType = () => {
    const mensual = () => {
        change.plan(0, "month");
        change.prices(document.getElementById("selectorTypeCoin").value);
    }

    const anual = () => {
        change.plan(1, "anual");
        change.prices(document.getElementById("selectorTypeCoin").value);
    }

    return (
        <div className="selector-plan" name="selector-type-plan">
            <div className="option-plan active" name="selector-type" onClick={mensual}>
                <p>Mensual</p>
            </div>
            <div className="option-plan" name="selector-type" onClick={anual}>
                <p>Anual</p>
            </div>
            <div id="back-price-plan" className="back-price-plan">A</div>
            <div className="discount-lbl">
                <p>-16%</p>
            </div>
        </div>
    );
};

export default selectorType;