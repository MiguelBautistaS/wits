var miguel = {
  nombre: 'Miguel',
  apellido: 'Bautista',
  edad: 21,
  peso: 73
}

console.log(`Al inicio del año ${miguel.nombre} pesaba ${miguel.peso} kg`)

const   INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = miguel.peso - 3

var dias = 0

while (miguel.peso > META ) {
  if (comeMucho()) {
    aumentarDePeso(miguel)
  }
  if (realizaDeporte()) {
    adelgazar(miguel)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${miguel.nombre} adelgazó 3kg`)

