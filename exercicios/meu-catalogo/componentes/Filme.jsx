import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Filme(props) {
  const { nome, ano, diretor, tipo, capa } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>🎬 {nome}</Text>
        <Text style={styles.info}>📅 Ano: {ano}</Text>
        <Text style={styles.info}>🎭 Gênero: {tipo}</Text>
        <Text style={styles.info}>🎬 Diretor: {diretor}</Text>

        <Image source={{ uri: capa }} style={styles.imagem} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7B68EE',
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
    color: '#FFD700',
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
