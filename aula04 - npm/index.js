//código para executar o projeto


//importar o projeto
import {calcularIMC, tabelaIMC} from "./CalculadoraIMC.js";

console.log("Calculadora IMC")
console.table(tabelaIMC)

const peso = 41
const altura = 1.53

const resultado = calcularIMC(peso, altura)

console.log("Resultado do IMC: ")
console.log(resultado.toFixed(2))

//importar um módulo externo,uma biblioteca
import moment from "moment";

const hoje = moment().locale('pt-br')

console.log("Data: ")
console.log(hoje.format("DD/MM/YYYY"));