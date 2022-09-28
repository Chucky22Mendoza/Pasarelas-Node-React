import React from 'react';
import getQueryParams from '../utils/urlParams.js';
import paramsExpected from '../utils/paramsExpected.js';
import Header from './plans/header';
import Main from './plans/main';
import env from '../config/enviroment';

const App = () => {
    const queryParams = getQueryParams(window.location.search);
    const params = ["bussinessId", "page", "mail"];
    const existsAllParams = paramsExpected(queryParams, params);
    if (!queryParams.hasOwnProperty("page")) {
        window.location.href = env.NEGOCIO_URL;
        return;
    }
    queryParams.urlBack = null;
    if (queryParams.page === "backoffice") {
        queryParams.urlBack = env.BACKOFFICE_URL;
    }
    if (queryParams.page === "pdv") {
        queryParams.urlBack = env.PDV_URL;
    }
    if (!existsAllParams) {
        window.location.href = queryParams.urlBack;
        return;
    }
    if (queryParams.hasOwnProperty("msg")) {
        console.log(queryParams.msg); //Mensaje de cancel_url
    }

    return (
        <div className="content">
            <input type="hidden" id="selectorTypePlan" value="month" />
            <input type="hidden" id="selectorTypeCoin" value="mxn" />
            <Header queryParams={queryParams}/>
            <Main queryParams={queryParams}/>
        </div>
    );
}

export default App;