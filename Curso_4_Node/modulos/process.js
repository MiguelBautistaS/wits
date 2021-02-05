// const process = require('process');

process.on('beforeExit', () => {
  console.log('Terminando proceso');
});

process.on('exit', () => {
  console.log('Proceso terminado');
  setTimeout(() => {
    console.log('Esto nunca se va a ver')
  }, 0);
});

process.on('uncaughtException', (err, origen) => {
  console.log('Error, falta capturar un error');
  console.error(err);
});

a = 5 + b;
console.log('Si el error no se recoge, no sale este mensaje');