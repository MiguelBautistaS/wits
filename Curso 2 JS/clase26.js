class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    // var nombre = this.nombre, apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    // var nombre = this.nombre, apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido} `)
  if (esDev) {
    console.log(`Ah mira, no sabía que eras desarrollaor/a`)
  }
}

var miguel = new Persona('Miguel', 'Bautista', 1.72)
var erika = new Persona('Erika', 'Luna', 1.62)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

miguel.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)