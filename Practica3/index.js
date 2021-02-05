const events = ['input', 'click', 'blur', 'hover', 'mouseover', 'mouseout']
const inputsType = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week"
]

const data = {
  values: [
    'click',
    'on',
    '#154ccb',
    '2021-01-14',
    '2021-01-14T13:00',
    'miguel12014316@gmail.com',
    '',
    'hidden',
    'http://www.wits.mx/wp-content/uploads/2017/11/wits-logo-Copy.png',
    '2021-02',
    '45',
    'password',
    'checked',
    '72',
    'click',
    'Javascript',
    'Submit',
    '3310416832',
    'Hello World',
    '13:54',
    'www.google.com',
    '2021-W02'
  ]
}
var inputElementsArray = [];

var count = 0;

let evFunction = function (event) {
  const inputElementId = event.target.id;
  const elementValueId = inputElementId.concat("-value");
  const elEventId = inputElementId.concat("-event");
  const valueElement = document.getElementById(elementValueId);
  const eventElementEvent = document.getElementById(elEventId);

  valueElement.innerHTML = event.target.value;
  eventElementEvent.innerHTML = event.type;
}

function setEventsListeners() {
  const elementIdTag = "-input";
  inputsType.forEach((inputType)=> {
    let inputElement = document.getElementById(inputType.concat(elementIdTag));
    inputElementsArray.push(inputElement);
    events.forEach((ev) => {
      inputElement.addEventListener(ev, evFunction);
    })
    inputElement.value = data.values[count++];
  })
}

function setValues() {
  inputElementsArray.forEach((inputElement) => {
    const elementId = inputElement.id;
    console.log(elementId);
    document.getElementById(elementId.concat('-value')).innerHTML = inputElement.value;
  })
}

setEventsListeners()
document.onreadystatechange = setValues;


