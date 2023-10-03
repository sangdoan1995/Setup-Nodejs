import express from 'express';
import webRouter from './route/route'
let app = express();

webRouter(app);
let port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log('server run in port' + port)
})
