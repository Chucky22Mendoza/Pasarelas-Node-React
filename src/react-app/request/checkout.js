import axios from 'axios';
import pricesId from '../utils/pricesId';
const select = [];

const subscription = async (typeSubscription, params) => {
    const selectorTypePlan = document.getElementById("selectorTypePlan");
    const months = selectorTypePlan.value == "month" ? 1 : 12;
    const price_id = pricesId[`${typeSubscription}-${selectorTypePlan.value}`];
    const data = {
        id: price_id,
        id_negocio: params.bussinessId,
        type_subscription: typeSubscription,
        months_bought: months,
        success_url: params.urlBack,
        mail: params.mail,
        back_page: params.page
    };

    const response = await axios.post('/create-checkout-session', data);
    return response.data.redirect;
}

const plus = async (event, params) => {
    event.preventDefault();
    return await subscription("plus", params);
}

const premium = async (event, params) => {
    event.preventDefault();
    return await subscription("premium", params);
}

select.plus = plus;
select.premium = premium;
select.subscription = subscription;

export default select;