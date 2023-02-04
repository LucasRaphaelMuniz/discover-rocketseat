/* app de frases

function createPhrases() {
  console.log('Phrase1')
  console.log('Phrase2')
  console.log('Phrase2')
}
createPhrases()


const sum = function (number1, number2) {
  console.log(number1 + number2)
}
sum(2, 3)


const sum = function (number1, number2) {
  total = number1 + number2 //nao deve fazer isso, sempre usar var, const ou let, var pode aparecer fora da função
  return total
}
let number1 = 34
let number2 = 25
console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`o soma é ${sum(number1, number2)}`)
console.log(total)

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)

let subject = 'create video'
function createThink(subject) {
  subject = 'study'
  return subject
}
console.log(createThink(subject))
console.log(subject)


sayMyName()
function sayMyName() {
  console.log('Lucas')
}

sayMyName()
const sayMyName = function sayMyName() {
  console.log('Lucas')
} // não sofre elevação


const sayMyName = () => {
  console.log('Lucas1')
}
sayMyName()

const sayMyName = (name) => {
  console.log(name)
}
sayMyName('Lucas2')


function sayMyName(name) {
  console.log(name)
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)


function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}
const lucas = new Person("Lucas")
const joao = new Person("Joao")
console.log(lucas.walk())
console.log(joao.walk())

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

let word = "Paralelepipedo"
console.log(word.length)
let number = 123
console.log(String(number).length)

let number = 345.45245245
console.log(number.toFixed(2).replace(".",","))

let word = "Programar é Mit"
console.log(word.toLocaleLowerCase().toUpperCase())

let phrase = "Eu quero estudar"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

let phrase = "Eu quero estudar"
console.log(phrase.includes("quero"))

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

console.log(['a', 'b', 'c'].length)

let word = "manipulação"
console.log(Array.from(word))

let techs = ["html", "css", "js"]

techs.push("nodejs") // inclui no array

techs.unshift("sql") // inclui no começo do array

techs.pop() //remover do final

techs.shift() //romver do começo

//console.log(techs.slice(1,3)) //remove do array elemento

//techs.splice(1, 1) // remover 1 ou mais elementos do array

// econtrar posição do elemnto no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)
*/

