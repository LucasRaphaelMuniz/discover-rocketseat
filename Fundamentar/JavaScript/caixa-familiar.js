/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
  receitas: [2500, 3200, 250.43, 360.45],
  despesas: [320.43, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0;
  for(let value of array)
    total += value
  return total
}

function calculateBalance() {
  const calculateReceitas = sum(family.receitas)
  const calculateDespesas = sum(family.despesas)

  const total = calculateReceitas - calculateDespesas

  const itsOk = total >= 0
  let balanceText = "negativo"

  if (itsOk) {
    balanceText = "positivo"
  }
  console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()