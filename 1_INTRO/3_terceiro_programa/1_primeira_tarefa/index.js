const fs = require('fs');

var a = Number;
var b = Number;

a = 10;
b = 20;

console.log(a + b);

fs.open('arquivo.txt', 'w', (err, file) => {
    if (err) {
        console.log('Error:', err);
        return
    } else {
        console.log('file', file);
    }
});

