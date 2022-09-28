const { Router } = require("express");
const bodyParser = require('body-parser');
const { config, createCheckoutSession, webhook, checkoutsList } = require("../controller/stripe.controller");
const router = Router();

router.get("/config", config);
router.post("/create-checkout-session", createCheckoutSession);
router.get('/checkout-list', checkoutsList);
router.post("/webhook", bodyParser.raw({type: 'application/json'}), webhook);

/**
 * Módulo de rutas de stripe
 * @module stripe_routes
 */
module.exports = router;