require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_TEST);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const axios = require('axios');

if (!process.env.STRIPE_SECRET_KEY_TEST || !process.env.STRIPE_PUBLISHABLE_KEY_TEST) {
    console.log('The .env file is not configured. Follow the instructions in the readme to configure the .env file. https://github.com/stripe-samples/subscription-use-cases');
    console.log('');
    process.env.STRIPE_SECRET_KEY_TEST ? '' : console.log('Add STRIPE_SECRET_KEY to your .env file.');
    process.env.STRIPE_PUBLISHABLE_KEY_TEST ? '': console.log('Add STRIPE_PUBLISHABLE_KEY to your .env file.');
    process.env.STATIC_DIR ? '' : console.log('Add STATIC_DIR to your .env file. Check .env.example in the root folder for an example');
    process.exit();
}

/**
 * Método para retornar la STRIPE_PUBLISHABLE_KEY de Stripe. Petición HTTP tipo GET
 * @param {Request} req Datos enviados desde la petición http
 * @param {Response} res Respuesta a la petición http
 * @return {JSON} Respuesta del servidor: {'publishableKey': STRIPE_PUBLISHABLE_KEY}
 * @since 1.0.0
 * @version 1.0.0
 * @async
 * @author Oswaldo Tovar <oswaldotovar32@gmail.com>
 * @author Jesús Mendoza <loginlock22@gmail.com>
 * @link https://github.com/oswaldotovar32
 * @link https://loginlock-portfolio.js.org/
 */
const config = async (req, res) => {
    return res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY_TEST });
}

/**
 * Método para crear una sesión de subscripción y retornar un link de pago denominado checkout, esto realizado con la API de Stripe.
 * Este método espera los parametros en el body: id, id_negocio, type_subscription, months_bought, success_url, mail, back_page. Petición HTTP tipo POST.
 * @param {Request} req Datos enviados desde la petición http
 * @param {Response} res Respuesta a la petición http
 * @return {JSON} Respuesta del servidor: {'redirect': session.url}
 * @since 1.0.0
 * @version 1.0.0
 * @async
 * @author Oswaldo Tovar <oswaldotovar32@gmail.com>
 * @author Jesús Mendoza <loginlock22@gmail.com>
 * @link https://github.com/oswaldotovar32
 * @link https://loginlock-portfolio.js.org/
 */
const createCheckoutSession = async (req, res) => {
    try {
        const { id, id_negocio, type_subscription, months_bought, success_url, mail, back_page } = req.body;
        const id_licencia = {"plus": "ad67dc80-09e1-11ec-ba08-448a5b46a0a1", "premium": "eed575dc-09e2-11ec-ba09-448a5b46a0a1", "gratis": "609b4bf4-09e0-11ec-ba07-448a5b46a0a1"}[type_subscription];
        const metadata = { "id_negocio": id_negocio, "id_licencia": id_licencia, "months_bought": months_bought};

        const session = await stripe.checkout.sessions.create({
            line_items: [{price: id, quantity: 1}],
            mode: 'subscription',
            metadata: metadata,
            customer_email: mail,
            success_url: success_url,
            cancel_url: `${process.env.HTTPS_HOST}/subscription/${id_negocio}/${mail}/${back_page}`,
        });

        res.status(200).json({'redirect': session.url});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
}

/**
 * Método de anclaje que observa los pagos de Stripe, al realizarse correctamente se crea una licencia de yimi, espera los datos en metada de fk_id_usuario,
 * fk_id_licencia y mounthBought, el identificador de fk_id_pasarela para Stripe es 6ccfc3e0-3d9d-11ed-b58e-42010a800006 y forma_pago es d. Es una petición HTTP tipo POST
 * pero propia de Stripe, este no debe de ser consultado por terceros
 * 
 * @param {Request} req Datos enviados desde la petición http
 * @param {Response} res Respuesta a la petición http
 * @return {JSON} Respuesta del servidor: {'received': true}
 * @since 1.0.0
 * @version 1.0.0
 * @async
 * @author Oswaldo Tovar <oswaldotovar32@gmail.com>
 * @author Jesús Mendoza <loginlock22@gmail.com>
 * @link https://github.com/oswaldotovar32
 * @link https://loginlock-portfolio.js.org/
 */
const webhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log("Webhook Error: " + err.message);
        res.status(500).send(`Webhook Error: ${err.message}`);
        return;
    }

    //ONLY EVENTS OF CHECKOUT HAS METADATA PASSED BY SESSION CHECKOUT FOR SUBSCRIPTION
    const data = event.data.object;
    console.log(`NEW EVENT TYPE -> ${event.type}`);
    console.log("event -> ", event);
    switch (event.type) {
        case 'checkout.session.async_payment_failed':
            console.log("checkout.session.async_payment_failed");
            // Then define and call a function to handle the event checkout.session.async_payment_failed
            break;
        case 'checkout.session.async_payment_succeeded':
            console.log("checkout.session.async_payment_succeeded");
            // Then define and call a function to handle the event checkout.session.async_payment_succeeded
            break;
        case 'checkout.session.completed':
            console.log("checkout.session.completed");
            // Then define and call a function to handle the event checkout.session.completed
            let dataLicense = {
                fk_id_usuario: data.metadata.id_negocio,
                fk_id_licencia: data.metadata.id_licencia,
                fk_id_pasarela: '6ccfc3e0-3d9d-11ed-b58e-42010a800006',
                mounthBought: data.metadata.months_bought,
                forma_pago: 'd'
            };
            console.log('data to send for create license', dataLicense);
            await axios.post(`${process.env.LICENSE_URL}/createLicenceAndroidApple`, dataLicense);
            break;
        case 'checkout.session.expired':
            console.log("checkout.session.expired");
            // Then define and call a function to handle the event checkout.session.expired
            break;
            // ... handle other event types
        default:
            console.log(`Unhandled event type -> ${event.type}`);
            res.status(200).json({ received: true });
            return;
    }

    res.status(200).json({ received: true });
}

/**
 * Método para obtener las últimos 3 sesiones de checkout. Petición HTTP tipo POST
 * 
 * @param {Request} req Datos enviados desde la petición http
 * @param {Response} res Respuesta a la petición http
 * @return {JSON} Respuesta del servidor: [sessions]
 * @since 1.0.0
 * @version 1.0.0
 * @async
 * @author Oswaldo Tovar <oswaldotovar32@gmail.com>
 * @author Jesús Mendoza <loginlock22@gmail.com>
 * @link https://github.com/oswaldotovar32
 * @link https://loginlock-portfolio.js.org/
 */
const checkoutsList = async (req, res) => {
    const {limit} = req.query;
    try {
        const sessions = await stripe.checkout.sessions.list({
            limit: limit,
        });
        res.status(200).json(sessions);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
}

/**
 * Módulo de controlador de stripe
 * @module stripe_controller
 */
module.exports = {
    config,
    createCheckoutSession,
    webhook,
    checkoutsList
}
