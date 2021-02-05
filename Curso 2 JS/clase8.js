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

function imprimirNombreEnMayuscula(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona) {
  console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`)
}

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad +1
  }
}

imprimirNombreEnMayuscula(miguel)
imprimirNombreEnMayuscula(dario)
// imprimirNombreYEdad(miguel)
// imprimirNombreYEdad(dario)

