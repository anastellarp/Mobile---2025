import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";

export default function App() {
  const giraAspas = () => {
    alert("Deu bomm,segue o jogo Anninha!!");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Rodrigo Garro esse é o mais gatinho do time
        </Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Image
          source={{
            uri:"https://i.pinimg.com/736x/49/43/08/494308063172fc11b4a04a596af1d6e2.jpg"
          }}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.descricao}>
          Ele joga dmss slk
        </Text>

        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Image
          source={{
            uri:"https://i.pinimg.com/originals/d9/f6/ca/d9f6ca001b22492c83b4daa62faf9c5f.png"
          }}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.descricao}>
          O cara dá aula,e ele com o Yuri Alberto são demais
        </Text>

        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Image
          source={{
            uri:"https://uploads.metroimg.com/wp-content/uploads/2024/08/26144151/rodrigo-garro-corinthians-abel-ferreira.jpg"
          }}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.descricao}>
        Rodrigo Garro é a promessa do meio-campo do Corinthians
        </Text>

        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Image
          source={{
            uri:"https://sportbuzz.com.br/wp-content/uploads/2024/08/Rodrigo-Garro_1724672171257.jpg"
          }}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.descricao}>
          Garro mostra sua habilidade e visão de jogo no Corinthians
        </Text>

        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Image
          source={{
            uri:"https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2024/11/24/rodrigo_garro_comemora_seu_gol_contra_o_vasco_msim.jpg"
          }}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.descricao}>
          Atualmente o maior meia do campeonato brasileiro {"\n"} e ele é a força do Corinthians no meio de campo.
        </Text>

        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Button title={"Vamoo"} onPress={giraAspas} />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#fff",
    fontWeight: "700",
  },
  descricao: {
    color: "#fff",
    fontWeight: "400",
    fontStyle: "italic",
  },
});