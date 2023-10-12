import express from 'express';

let viewEngine = (app) => {
    app.use(express.static('./src/view'));
    app.set("view engine", "ejs");//jsp,blade
    app.set("view", './src/view');
}
module.exports = viewEngine;