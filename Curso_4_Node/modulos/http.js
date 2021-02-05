const http = require('http');

const port = 3000

function router(req, res) {
  console.log('nueva petición');
  console.log(req.url);

  switch(req.url) {
    case '/hola':
      let saludo = hola();
      res.write(saludo);
      res.end();
      break;
    
      default:
        res.write('Error 404: no se lo que quieres')
        res.end();
        break;
  }

  res.writeHead(201, { 'Content-Type': 'text/plain' });

  // // Escribir respuesta al usuario
  // res.write('Hola, ya se usar http de nodeJS');

  // res.end();
}

http.createServer(router).listen(3000);

function hola() {
  return 'Hola, que tal';
}

console.log("Escuchando http en puerto 3000");