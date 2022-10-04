'use strict'

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');

//webpack
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const config = require('../webpack.config');

const app = express();

//VARIABLES DE ENTORNO
require("dotenv").config();

//middlewares
app.use(webpackDev(webpack(config)));
app.use(morgan("dev"));
app.use(cors());
// app.use(express.json()); before stripe
// Use JSON parser for all non-webhook routes
// app.use(require("./middlewares/webhook"));

app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
        next();
    } else {
        express.urlencoded({extended: false});
        express.json()(req, res, next);
    }
});

// static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use("/", require("./routes/stripe.routes"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// settings
app.set("port", process.env.PORT || 4000);
// app.set("https_port", process.env.HTTPS_PORT || 443);

/**
 * Módulo inicializador de aplicación
 * @module app
 */
module.exports = app;