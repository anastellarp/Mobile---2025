import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponent() {
    const nome = "Anninha"
    const idade = 19

    function checarMaiorIdade(){
        console.log('deu bão')
        if(idade >= 18){
            return "Maior Idade"
        }else{
            return "Menor de Idade"
        }
    }
    function alerta(){
        alert('Clicou no botão!!')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Java Script Component</Text>
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>IDADE: {idade}</Text>
      <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>
      <Button title='enviar' onPress={alerta}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        padding: 20,
        borderWidth:10,
        marginBlockStart:20,
    },
    texto:{
        fontSize:20,
        fontWeight:600
    }
})