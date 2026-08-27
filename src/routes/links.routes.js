const { Router } = require('express');

function createrLinksRoutes (linksController) {
    const router = Router();

    router.post("/api/links", linksController.shorten);
    router.get("/api/links/:code", linksController.redirect);

    return router;
}

module.exports = createrLinksRoutes;