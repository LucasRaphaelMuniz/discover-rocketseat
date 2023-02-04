//estruturado

var ValorHora = 50
var tempoEstimado = 20
var desconto = ValorHora * tempoEstimado * (10 / 100)
var custoEstimado = ValorHora * tempoEstimado - desconto
console.log(custoEstimado)

// POO
const job = new Jon()
job.ValorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)