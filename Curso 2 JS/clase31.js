const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $
  .get(url, opts, callback)
    .fail( () => {
      console.log(`sucedió un error. No se pudo obtener el personaje ${id}`)
    })
  }

obtenerPersonaje(1, function(personaje) {
  console.log(`Hola, yo soy ${persona.name}`)

  obtenerPersonaje(2, function(personaje) {
    console.log(`Hola, yo soy ${persona.name}`)

    obtenerPersonaje(3, function(personaje) {
      console.log(`Hola, yo soy ${persona.name}`)

      obtenerPersonaje(4, function(personaje) {
        console.log(`Hola, yo soy ${persona.name}`)

        obtenerPersonaje(5, function(personaje) {
          console.log(`Hola, yo soy ${persona.name}`)

          obtenerPersonaje(6, function(personaje) {
            console.log(`Hola, yo soy ${persona.name}`)
            
            obtenerPersonaje(7, function(personaje) {
              console.log(`Hola, yo soy ${persona.name}`)
            })
          })
        })
      })
    })
  })
})

