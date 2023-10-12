import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

let webRouter = (app) => {
    router.get('/', homeController.getData)
    router.get('/test', homeController.testData)
    router.post('/post', homeController.postData)
    return app.use('/', router);
}
module.exports = webRouter;
