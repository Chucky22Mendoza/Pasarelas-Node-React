import React from 'react';
import change from '../../utils/changeEvents';

const selectorCountry = () => {
    const mxnCountry = () => {
        change.prices("mxn");
        change.country(0);
    }
    const usdCountry = () => {
        change.prices("usd");
        change.country(1);
    }
    const clpCountry = () => {
        change.prices("clp");
        change.country(2);
    }
    const copCountry = () => {
        change.prices("cop");
        change.country(3);
    }
    const qCountry = () => {
        change.prices("q");
        change.country(4);
    }
    const penCountry = () => {
        change.prices("pen");
        change.country(5);
    }

    return (
        <div className="selector-plan"  name="selector-type-country">
            <div className="option-plan active" name="selector-country" onClick={mxnCountry}>
                <p>MXN</p>
            </div>
            <div className="option-plan" name="selector-country" onClick={usdCountry}>
                <p>USD</p>
            </div>
            <div className="option-plan" name="selector-country" onClick={clpCountry}>
                <p>CLP</p>
            </div>
            <div className="option-plan" name="selector-country" onClick={copCountry}>
                <p>COP</p>
            </div>
            <div className="option-plan" name="selector-country" onClick={qCountry}>
                <p>Q</p>
            </div>
            <div className="option-plan" name="selector-country" onClick={penCountry}>
                <p>PEN</p>
            </div>
            <div id="back-price-country" className="back-price-country">A</div>
        </div>
    );
};

export default selectorCountry;