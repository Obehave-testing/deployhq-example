const express = require('express');
const path = require('path');

function start() {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.static(path.join(__dirname, 'static')));

    const server = app.listen(port, function () {
        const host = server.address().address;
        console.log('Web server listening on http://%s:%s', host, port);
    });

    return app;
}

start();