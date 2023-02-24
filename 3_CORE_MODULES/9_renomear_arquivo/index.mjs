import fs from 'fs';

fs.rename('arquivo.txt', 'novoarquivo.txt', (err) => {
    if (err) {
        console.log(err);
        return
    } else {
        console.log("Arquivo renomeado!");
        return
    }
});