const express = require('express');
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, 'templates');

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    //**node index.js para iniciar o projeto */
    console.log(`App listen in port ${port}`);
});