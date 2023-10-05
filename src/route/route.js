import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

let webRouter = (app) => {
    router.get('/', homeController.GetData)
    router.post('/post', homeController.PostData)
    return app.use('/', router);
}
module.exports = {
    webRouter
}