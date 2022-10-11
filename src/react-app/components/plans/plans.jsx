import React from 'react';
import Selector from './selector-plan';
import HeaderMain from './header-main';
import Banner from './banner';

const plans = (props) => {
    return (
        <section className="precios d-flex fd-column container">
            <HeaderMain />
            <Selector queryParams={props.queryParams}/>
            <Banner />
        </section>
    );
}

export default plans;