import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import PrimeiroComponent from './componentes/PrimeiroComponent';
import JavaScriptComponent from './componentes/JavaScriptComponent';
import Perfil from './componentes/Perfil';
import ListaComponent from './componentes/ListaComponent';
import Atleta from './componentes/Atleta';

export default function App() {
  const listaAtletas = [
      {
          nome:"Charles Leclerc",
          idade:27,
          numero:16,
          imagem:"https://i.pinimg.com/736x/e5/7d/80/e57d803a3a7a1c9f1334d55e0579b562.jpg",
      },
      {
          nome:"Ayrton Senna",
          idade:34,
          numero:12,
          imagem:'https://i.pinimg.com/736x/a5/96/9c/a5969cbe54bc408f9854e37f31491845.jpg'
      },
      {
          nome:"Max Verstappen",
          idade:27,
          numero:1,
          imagem:'https://i.pinimg.com/736x/a0/69/a2/a069a2de25ac696cd3312c25ebeb2da0.jpg'
      }
  ]
  return (
    <ScrollView>
        <View style={styles.container}>
          <StatusBar style='auto'/>
          {listaAtletas.map(
            atleta => {
              return (<Atleta
                nome = {atleta.nome}
                idade ={atleta.idade}
                numero = {atleta.numero}
                imagem = {atleta.imagem}
              />)
            }
          )}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
