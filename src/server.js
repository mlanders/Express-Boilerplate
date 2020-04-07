require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const Sentry = require("@sentry/node");

const routes = require("./routes/v1/router");

Sentry.init({
	dsn: "add-your-dsn-number-here",
	release: "Express-Boilerplates@" + process.env.npm_package_version,
	environment: process.env.SENTRY_ENV,
});

// Middleware
server.use(Sentry.Handlers.requestHandler()); // Sentry must be first
server.use(helmet()); // secure servers by setting various HTTP headers
server.use(cors()); // enable CORS - Cross Origin Resource Sharing

// Routes
server.use("/", routes);

// Sentry error handler must be before any other error middleware and after all controllers
server.use(Sentry.Handlers.errorHandler());

module.exports = server;
