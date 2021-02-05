var miguel = {
  nombre: 'Miguel',
  apellido: 'Bautista',
  edad: 21,
  peso: 73
}

console.log(`Al inicio del año ${miguel.nombre} pesaba ${miguel.peso} kg`)

const   INCREMENTO_PESO = 0.200
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
  var random = Math.random()
  if(random < 0.25) {
    //Aumenta de peso
    aumentarDePeso(miguel)
  } else if (random < 0.50) {
    //Adelgaza
    adelgazar(miguel)
  }
}

console.log(`Al final del año ${miguel.nombre} pesa ${miguel.peso.toFixed(1)} kg`)