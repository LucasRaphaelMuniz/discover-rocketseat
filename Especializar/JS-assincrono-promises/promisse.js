// Promessa retorna com sucesso
let aceitar = false
console.log('pedir uber') 
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('carro chegou')
  }
	return reject('pedido negado!')
})

// Promessa é rejeitada e usamos o catch() para capturar o erro
console.log('aguardando')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))

