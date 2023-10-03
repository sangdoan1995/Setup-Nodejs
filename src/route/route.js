import express from "express";

let router = express.Router();

let webRouter = (app) => {
    router.get('/')

    return app.use('/', router);
}
module.exports = {
    webRouter
}