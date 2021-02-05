function hola(nombre, miCallback) {
  setTimeout(function() {
    console.log('Hola ' + nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 800);
}

console.log("Iniciando proceso")
hola('Miguel', function (nombre) {
  adios(nombre, function() {
    console.log("Terminando proceso")
  })
});

// hola('Miguel', function() {});
// adios('Miguel', function() {});