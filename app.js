const express = require('express');

const codesService = require("./services/codes.service")
const baseService = require("./services/base.service");
const linksService = require("./services/codes.service");
const counterRepository= require('./services/memory/counter.repository');
const linksRepository = require('./services/links.service');
const linksController = require('./controllers/links.controllers');

const app = express();

function startApp() {
    const codesService = codesService(counterRepository, baseService, 1000);

    const links = linksService(linksRepository, codesService, 10, 256);

    const linkRouterController = linksController(linksService, "/", 30)
   
}

module.exports = app;
