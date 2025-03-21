import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class JavaScriptComponente extends Component {
  render() {
    const nome = "Anninha"
    const idade = 15

    function exibirNome(){
        return nome
    }
    function checarMaiorIdade(){
        if(idade >= 18){
            return "Maior de Idade"
        }else{
            return "Di menor"
        }
    }

    return (
      <View>
        <Text> JS Componente </Text>
        <Text>Nominho: {nome} </Text>
        <Text>Idade: {idade} </Text>
        <Text>{exibirNome()}</Text>
        <Text>Resultado: {25 + 31}</Text>
        <Text>Idade: {idade + 20}</Text>
        <Text>Check 18+ : {checarMaiorIdade()}</Text>
        <Text>Check 18+ : {idade >= 18 ? "Maior de Idade" : "Menor de Idade"}</Text>
      </View>
    )
  }
}
