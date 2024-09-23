const path = require('node:path')


console.log(path.sep);

// unir rutas con path.join
const filePhat = path.join('/content', 'subfolder', 'text.txt');

console.log(filePhat);

const base = path.basename('noseque/peoroijabndc/ijabndijc/nombrefichero.txt')

console.log(base);

const extension = path.extname('image.jpg')

console.log(extension);