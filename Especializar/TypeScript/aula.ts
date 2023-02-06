/* 
Matrizes
Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:
*/
let numbers: number[];
numbers = [1, 2, 3, 4, 5];

let users: Array<string>;
users = ['Lucas', 'Muniz']


/*
Funções
Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void

Dessa maneira, tipamos dessa forma no TypeScript:
*/
function showMessages(message: string):void {
  console.log(message)
}
/*
Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

function showMessages(message: string) {
 return message;
}
console.log(showMessages('Oi, Lucas'));
*/


/*
Union
O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:
*/
function printUserId(id: number | string) {
  console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");
// Dessa forma, podemos passar tanto number quanto string


/* O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:

  <S> → Representando State 
  <T> → Representando Type 
  <K> → Representando Key 
  <V> → Representando Value 
  <E> → Representando Element
  
  Exemplo de um trecho de código utilizando generics:
*/
  
  function useState<T>() {
      let state: T;
  
      function get(){
          return state;
      }
  
      function set(newValue: T){
          state = newValue;
      }
  
      return { get, set}
  }
  
  let newState = useState();
  newState.get();
  newState.set("Lucas");
  newState.set(123);

 /* 
 Type
 Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.

  Veja o exemplo a seguir:
 */ 
  type IdType = string | number | undefined;
  
  let userId: IdType;
  let adminId: IdType;
  
  userId = 1;
  userId = '1';
  userId = undefined;
  
  adminId = 1;
  adminId = '2';
  adminId = undefined;

/*
Intersecção de tipos
Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.
Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.
*/
type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;


/*
Objetos
Nessa aula vamos aprendemos como criar tipagens utilizando objetos no TypeScript.
Segue o exemplo:
*/

type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})
/*
Resultado do log:

[LOG]: "O eixo x é: 101"
------------------------
[LOG]: "O eixo y é: 50"



opcional
Para informamos que uma propriedade é opcional inserimos o sinal de ?

Veja o exemplo:
*/

type User = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
  name: 'João',
  email: 'joao@email.com',
  age: 18
}

/*
Intersecção de tipos
A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

Segue o exemplo abaixo:
*/
type User1 = {
  id: number,
  name: string,
}

type Char = {
  nickname: string,
  level: number
}

type PlayerInfo = User1 & Char;

let info: PlayerInfo = {
  id: 1,
  name: 'João Inácio',
  nickname: 'birobirobiro',
  level: 50
}
/*
Interface
Outra maneira de criar tipagens no TypeScript é utilizando a interface .

Segue o exemplo:
*/
interface User2 {
    id: number
    name: string,
}

let newUser2: User2 = {
    id: 1,
    name: "João"
}

function registerNewUser(newUser: User2){
    newUser2.id
    newUser2.name
}
/*
Type e Interface
O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

O exemplo abaixo mostra a diferença na sintaxe e união entre type e inteface:
*/
type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// Fazendo união com Type
type TAccount = TUser & TPayment



interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}

/*
tsconfig
É um arquivo de configuração do TypeScript, ele pode ser escrito tanto em formato de JavaScript quanto no formato JSON.

Exemplo de um arquivo tsconfig.json :

{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true, //ALERTA DE NÃO TIPAGEM, VEM COMO ANY PADRÃO
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}
*/