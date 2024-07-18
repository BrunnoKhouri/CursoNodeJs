// app.js

const express = require('express');
const setupSwagger = require('./swagger'); // Caminho para o arquivo swagger.js

const app = express();

// Importar as rotas
const testeRoute = require('./routes/teste');

// Usar as rotas com prefixo /api
app.use('/api', testeRoute);

// Configuração do Swagger
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});