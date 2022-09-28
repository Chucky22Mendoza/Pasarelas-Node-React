import React from 'react';
import Plans from './plans';
import Comparative from './comparative';

const main = (props) => {
    return (
        <section id="main">
            <Plans queryParams={props.queryParams}/>
            <Comparative queryParams={props.queryParams}/>
            <Plans queryParams={props.queryParams}/>
        </section>
    );
}

export default main;