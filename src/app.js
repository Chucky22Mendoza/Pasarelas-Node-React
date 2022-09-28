'use strict'

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');
const fs = require('fs');

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
app.use(express.urlencoded({extended: false}));
// app.use(express.json()); before stripe
// Use JSON parser for all non-webhook routes
app.use(require("./middlewares/webhook"));

// static files
app.use(express.static(path.join(__dirname, 'public')));

const params = null;
//routes
app.use("/", require("./routes/stripe.routes"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// settings
app.set("port", process.env.PORT || 4000);

/**
 * Módulo inicializador de aplicación
 * @module app
 */
module.exports = app;