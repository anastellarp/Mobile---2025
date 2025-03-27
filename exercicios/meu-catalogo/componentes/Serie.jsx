import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Serie(props) {
  const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>📺 {nome}</Text>
        <Text style={styles.info}>📅 Ano: {ano}</Text>
        <Text style={styles.info}>🎬 Diretor: {diretor}</Text>
        <Text style={styles.info}>📆 Temporadas: {temporadas}</Text>

        <Image source={{ uri: capa }} style={styles.imagem} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B0082',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 3,
  },
  imagem: {
    width: 220,
    height: 320,
    borderRadius: 10,
    marginTop: 10,
    resizeMode: 'cover',
  },
});
