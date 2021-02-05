var miguel = {
  nombre : 'Miguel',
  apellido: 'Bautista',
  edad: 18,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  trabajador: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)
  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }
  if (persona.cocinero) {
    console.log('Cocinero')
  }
  if (persona.cantante) {
    console.log('Cantante')
  }
  if (persona.dj) {
    console.log('DJ')
  }
  if (persona.guitarrista) {
    console.log('Guitarrista')
  }
  if (persona.trabajador) {
    console.log('Trabajador')
  }

}
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirProfesiones(miguel)
imprimirSiEsMayorDeEdad(miguel)
