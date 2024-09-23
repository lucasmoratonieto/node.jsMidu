const os = require('node:os')

console.log('Nombre del sistema operativo', os.platform());
console.log('Nombre del sistema operativo', os.release());
console.log('Nombre del sistema operativo', os.arch());
console.log('Nombre del sistema operativo', os.cpus());
console.log('Nombre del sistema operativo', os.freemem()/1024/1024);
console.log('Nombre del sistema operativo', os.totalmem()/1024/1024);
console.log('UpTime', os.uptime()/60/60/24);