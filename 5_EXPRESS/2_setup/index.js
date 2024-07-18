const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send('Olá Mundo!!');
});

app.listen(port, () => {
    //**node index.js para iniciar o projeto */
    console.log(`App listen in port ${port}`);
});