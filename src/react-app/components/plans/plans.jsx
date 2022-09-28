import React from 'react';
import Selector from './selector-plan';
import HeaderMain from './header-main';

const plans = (props) => {
    return (
        <section className="precios d-flex fd-column container">
            <HeaderMain />
            <Selector queryParams={props.queryParams}/>
        </section>
    );
}

export default plans;