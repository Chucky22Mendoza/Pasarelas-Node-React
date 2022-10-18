'use strict'

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');
const createError = require("http-errors");

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
app.get("/subscription/:bussinessId/:mail/:page", (req, res) => {
    res.redirect("/");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// settings
app.set("port", process.env.PORT || 4000);

/**
 * Módulo inicializador de aplicación
 * @module app
 */
module.exports = app;