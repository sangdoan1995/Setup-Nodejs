import express from 'express';
import webRouter from './route/route'
import connectDB from './config/connectDB';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine'
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);

webRouter(app);
connectDB();

let port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log('server run in port:' + port)
})
