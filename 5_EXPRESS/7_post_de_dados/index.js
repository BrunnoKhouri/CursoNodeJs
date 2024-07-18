const express = require('express');
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, 'templates');

//** Ler o body da request. */ 

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Configurar o motor de templates EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
});

app.post('/users/save', (req, res) => {
    console.log('body', req.body);
    const User = req.body;
    if (User) {
        console.log(`User ${User.name}, salvo no sistema`);
        res.render('userAdd', {
            userName: User.name
        });
    }
    res.sendFile(`${basePath}/userForm.html`);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log('id:', id);

    res.sendFile(`${basePath}/users.html`);
});

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