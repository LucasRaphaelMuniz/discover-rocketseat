
//stateless não guarda estado
let number = 2;

// stateful function
function square(){
  return number * number
}
number = square()

//statless function
const square = n => n * n