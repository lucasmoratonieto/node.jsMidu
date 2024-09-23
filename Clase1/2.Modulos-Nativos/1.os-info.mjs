import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Nombre del sistema operativo', platform());
console.log('Nombre del sistema operativo', release());
console.log('Nombre del sistema operativo', arch());
console.log('Nombre del sistema operativo', cpus());
console.log('Nombre del sistema operativo', freemem()/1024/1024);
console.log('Nombre del sistema operativo', totalmem()/1024/1024);
console.log('UpTime', uptime()/60/60/24);