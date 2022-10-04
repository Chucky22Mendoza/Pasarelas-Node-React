const express = require('express');

/**
 * Valida si la url es "/webhook" entonces no hace nada porque el body se requiere en raw state. Si es cualquier otra url 
 * el body deberá de parsearse a JSON
 * 
 * @module webhook
 * @param {Request} req Datos enviados desde la petición http
 * @param {Response} res Respuesta a la petición http
 * @param {Next} next Siguiente método del endpoint
 * @since 1.0.0
 * @version 1.0.0
 * @author Jesús Mendoza <loginlock22@gmail.com>
 * @link https://loginlock-portfolio.js.org/
 */
module.exports = (req, res, next) => {
    if (req.originalUrl === '/webhook') {
        console.log("Is the --> webhook");
        next(); // Do nothing with the body because I need it in a raw state.
    } else {
        express.json()(req, res, next);  // ONLY do express.json() if the received request is NOT a WebHook from Stripe.
    }
};
