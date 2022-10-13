import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../plans/header';
import Main from '../plans/main';
import env from '../../config/enviroment';

const index = (props) => {
    const params = useParams();
    let queryParams = {};
    if (!params.hasOwnProperty('bussinessId') && !params.hasOwnProperty('mail') && !params.hasOwnProperty('urlBack')) {
        queryParams = {
            urlBack: props.queryParams.page == "pdv" ? env.PDV_URL : env.BACKOFFICE_URL,
            mail: props.queryParams.mail,
            bussinessId: props.queryParams.bussinessId,
            page: props.queryParams.page
        }
    } else {
        queryParams = {
            urlBack: params.urlBack == "pdv" ? env.PDV_URL : env.BACKOFFICE_URL,
            mail: params.mail,
            bussinessId: params.bussinessId,
            page: params.urlBack
        }
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

export default index;