import path from 'path';

//path absoluto
console.log(path.resolve('teste.txt'));

//formar path

const midFolder = "relatorios";
const fileName = "brunno.txt";

const finalPath = path.join("/", 'arquivos', midFolder, fileName);

console.log(finalPath);