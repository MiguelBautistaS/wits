var miguel = {
  nombre : 'Miguel',
  apellido: 'Bautista',
  edad: 17,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  trabajador: true
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

function esMayorDeEdad({nombre, edad}) {
  console.log(`${nombre} es ${edad >= 18 ? 'mayor' : 'menor'} de edad`)
}

imprimirProfesiones(miguel)
esMayorDeEdad(miguel)
