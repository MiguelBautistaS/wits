const { serialize } = require("v8");

function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch(err) {
      console.log('Se rompió asincrona');
      cb(err);
    }
  }, 0);
}

try {
  // otraFuncion();
  seRompeAsincrona(function(err) {
    console.log(err.message);
  });
} catch(err) {
  console.error('Vaya, algo se ha roto...');
  console.error(err);
  console.log('Pero no pasa nada, lo hemos capturado');
}
console.log('Esto de aquí está al final');