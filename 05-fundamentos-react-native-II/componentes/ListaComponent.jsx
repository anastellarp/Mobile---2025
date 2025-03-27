import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponent() {
  const listaCarros = ["Gol","Palio","Celta","Uno","BYD","Honda Civic"]

  return (
    <View style={styles.container}>
      {listaCarros.map(
          carro => <Text>{carro}</Text>
      )}
      {listaCarros.map((carro, index) => {return(<View style={styles.containerRosa}><Text key={index}>{carro}</Text>
              </View>
            )
          }
        )

      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'purple',
    padding: 20,
    borderWidth:10,
  },
  containerRosa:{
    backgroundColor:'pink',
    padding: 20,
    borderWidth:10,
  },
  texto:{
      fontSize:20,
      fontWeight:600
  }
})