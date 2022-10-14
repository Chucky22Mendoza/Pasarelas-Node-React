import React from 'react';
import SelectorType from './selector-type';
import SelectorCountry from './selector-country';

const headerMain = () => {
    return (
        <section id="selectorsContent" className="d-flex fd-row jc-space-between">
            <SelectorType />
            <SelectorCountry />
        </section>
    );
};

export default headerMain;