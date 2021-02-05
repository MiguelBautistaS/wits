function hola(nombre, miCallback) {
  setTimeout(function() {
    console.log('Hola ' + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 800);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function() {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso")
hola(' Miguel', function (nombre) {
  conversacion(nombre, 3, function (nombre) {
    console.log('Proceso terminado')
  });
});




// hola('Miguel', function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function() {
//           console.log("Terminando proceso")
//         });
//       });
//     });
//   });
// });
