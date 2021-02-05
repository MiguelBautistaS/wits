function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log('Hola ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Bla bla bla bla...');
      // resolve(nombre);
      resolve('Hay un error');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios ' + nombre);
      resolve();
    }, 800);
  });
}

async function main() {
  let nombre = await hola('Miguel');
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Termina el proceso');
}

console.log('Empezamos el proceso');
main();
console.log('Va a ser la segunda instrucción en realizarse');