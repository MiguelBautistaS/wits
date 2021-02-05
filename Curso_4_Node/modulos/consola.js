console.log('Log');
console.info('Info');
console.error('Error');
console.warn('Warn');
var tabla = [
  {
    a: 1,
    b:'Z'
  },
  {
    a: 2,
    b:'Otra'
  }

]
console.table(tabla);
console.group('Conversacion')
console.log('Hola')
console.log('Bla bla')
console.log('Bla bla bla')
console.log('Bla')
console.groupEnd('Conversacion')

console.count('iteración');
console.count('iteración');
console.count('iteración');
console.count('iteración');
console.count('iteración');
console.countReset('iteración');
console.count('iteración');
console.count('iteración');