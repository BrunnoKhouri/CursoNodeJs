import fs from 'fs';
import http from 'http';
import url from 'url';

const port = 3000;

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    const fileName = q.pathname.substring(1)

    if (fileName.includes('html')) {
        if (fs.existsSync(fileName)) {
            fs.readFile(fileName, (err, data) => {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                return res.end();
            });
        } else {
            //404
        }
    }
});

server.listen(port, () => {
    console.log('server rodando:', port);
});