const express = require('express');
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, 'templates');

const checkAuth = function (req, res, next) {

    req.authStatus = true;

    if (req.authStatus) {
        console.log('Está logado');
        next();
    } else {
        console.log('Faça o login');
    }

}

app.use(checkAuth);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    //**node index.js para iniciar o projeto */
    console.log(`App listen in port ${port}`);
});

//** PASSOS PARA USAR NODEMON */
//**1° npm install nodemon --save-dev */
//**2° crie o script no packege "start": "nodemon ./index.js localhost 3000" */