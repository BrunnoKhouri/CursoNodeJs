import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>First server in NODE.JS and HTML</h1>')
});

server.listen(port, () => {
    console.log(`Servidor rodando  na porta: ${port}`);
});