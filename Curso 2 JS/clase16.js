var signo = prompt('cuál es tu signo?')

console.log(signo)

switch(signo) {
  case 'aries':
    console.log('Durante el día, opte por darle la espalda a los problemas que no lo involucran directamente a usted. Cuídese, ya que se encontrará al borde de una crisis de nervios.')
    break
  case 'tauro':
    console.log('Ocasión óptima para concluir con todos los proyectos viejos y dedicarse a preparar las nuevas metas que se propondrá en su vida para los próximos meses.')
    break
  case 'geminis':
  case 'géminis':
    console.log('Después de tanto tiempo, podrá desarrollar su visión creadora siempre y cuando lo que usted desee sea lo suficientemente fuerte. No se limite.')
    break
  case 'cancer':
  case 'cáncer':
    console.log('Sepa que si adopta una actitud más tolerante hacia su familia, podrá orientar mejor su vida . Escuche los reclamos y comparta más tiempo con ellos.')
    break
  case 'leo':
    console.log('Si se siente insatisfecho internamente, sepa que deberá enfocarse en planificar un nuevo proyecto de vida que lo haga sentir más gratificado.')
    break
  case 'virgo':
    console.log('Momento para que comprenda que no siempre es posible resultar agradable a toda la gente que lo rodea. Aprenda que no todos tenemos la misma personalidad.')
    break
  case 'libra':
    console.log('Transitará por un momento de crisis personal, ya que querrá romper con viejas estructuras de su vida que le impiden sentirse libre. Deje que todo fluya solo.')
    break
  case 'escorpio':
    console.log('No trate de querer acaparar todo, empiece a delegar las responsabilidades y concentre su energía solo en lo importante para su vida. Organice mejor su tiempo.')
    break
  case 'sagitario':
    console.log('Intente abandonar los viejos mandatos que le impusieron desde su adolescencia. Momento oportuno para ampliar las aspiraciones y los sueños que tiene guardados.')
    break
  case 'capricornio':
    console.log('Intente mostrase más flexible frente a las situaciones que encare. Si se lo propone, de esta forma, se le presentarán muchas oportunidades únicas.')
    break
  case 'acuario':
    console.log('Período óptimo para poner en marcha ese plan que tiene y accione las tácticas que determinó para cada uno de sus objetivos. No dude más y hágalo.')
    break
  case 'piscis':
    console.log('Ciertas dificultades inesperadas harán imposible que cumpla con todo el cronograma de actividades que se había propuesto hace días. Intente tranquilizarse.')
    break
  default:
    console.groupCollapsed('No es un signo zodiacal válido')
    break
}