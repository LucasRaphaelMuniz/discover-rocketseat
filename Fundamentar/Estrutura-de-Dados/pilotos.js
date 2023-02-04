const pilotos = ['Senna', 'Prost', 'Massa','Hamilton']

console.log(pilotos[0])
console.log(pilotos[3])

// acessar tamanho do array
console.log(pilotos.length)

//iteravel
for (let piloto of pilotos) {
  console.log(piloto)
}

//adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

//encontrar elemento
const senna = pilotos.find(piloto => piloto == 'Senna')
console.log(senna)

//deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos)