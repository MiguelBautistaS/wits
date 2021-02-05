var miguel = {
  nombre: 'Miguel',
  apellido: 'Bautista',
  edad: 21
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayuscula({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(miguel)
imprimirNombreEnMayuscula(dario)
// imprimirNombreEnMayuscula({nombre: 'Pepito'})
imprimirNombreEnMayuscula({ apellido: 'Gomez' })