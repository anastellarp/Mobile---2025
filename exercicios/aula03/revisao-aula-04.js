//Variaveis
// var - não usa no dia a dia 
let nome = "Gustavo";
const idade = 20;

//nome = 'teste'
//idade = 22;

//Operadores

const soma = 2 + 2
const subtracao = 2 -2
const multiplicacao = 2 * 2
const divisao = 2/2
const resto = 3 % 2

// Operadores de Comparacao

const igual = 2 == 2
const diferente = 2 != 2
const maior = 3 > 2
const menor = 3  < 2
const maiorOuIgual = 2 >= 2
const menorOuIgual = 3 <= 2

//Estruturas de condicao

if(idade >= 18){
    console.log("Maior de Idade")
} else {
    console.log("Menor de idade")
}

//Operador ternario

const mensagem = idade >= 18 ? "Masior de idade" : "Menor de idade"
console.log("Mensagem", mensagem)

//Arrays ou listas

const frutas = ["Maça","Pera","Uva","Salada Mista"]
console.log(frutas[0])
console.log(frutas.length)

frutas.push("kiwi")
console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)