function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

var miguel = new Persona('Miguel', 'Bautista', 1.72)
var erika = new Persona('Erika', 'Luna', 1.62)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

// miguel.soyAlto()
// erika.soyAlto()
// arturo.soyAlto()