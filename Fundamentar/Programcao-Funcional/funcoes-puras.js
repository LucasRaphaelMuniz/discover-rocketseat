// função impura
// exemplo 1: estpa dependendo de dado externo
// que não foi passado como parametro
function calculateCircumference(radius) {
  return Math.PI * (radius + radius)
}

//exmeplo 2: estpa alterando um dado externo
let person = {
  name: 'Lucas Muniz',
  idade: 'jovem'
}

function changeName(name){
  person.name = name
}

//função pura
//exemplo 1
const calculateCircumference = function (pi, radius) {
  return pi * (radius * radius)
}

// com arroz function
const calculateCircumference = (pi, radius) =>
  pi * (radius * radius)

// exemplo 2
const changePersonName = (person, name) =>
  ({...person, name})