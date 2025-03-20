import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

//component principal
//ele deve retornar o que será renderizado na tela - JXS

export default function App() {
//Lógica do meu component

const nome = "Ana"

function alerta(){
  alert("você clicou no botão")
}


//retorno JSX
  return (
    <View style={styles.container}>
      {/* tudo bem? */}
      <Text>{2 + 2}</Text>
      <Text>{nome}</Text>
      <Text style={{color:'white'}}>oii anninha 0:</Text>
      <Button title='Alerta' onPress={alerta}></Button>
      <Image 
        source={{uri: 'https://media.gettyimages.com/id/76687698/pt/foto/eminem-at-the-source-hip-hop-awards-at-the-pasadena-civic-auditorium-september-15-2000.jpg?s=612x612&w=gi&k=20&c=rSTwuwze_GF1WFo9-Zu70WrwIymnd2sBj0i3fm4Q29k='}}
        style={{
          height:230,
          width:160
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
