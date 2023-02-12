const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if (err) {
        console.log('error:', err);
        return
    } else {
        console.log('data:', data);
    }
});