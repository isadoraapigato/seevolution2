import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notas = () => {
  const [nota, setNota] = useState('');

  useEffect(() => {
    carregarNotaSalva();
  }, []);

  const carregarNotaSalva = async () => {
    try {
      const notaSalva = await AsyncStorage.getItem('nota');
      if (notaSalva !== null) {
        setNota(notaSalva);
      }
    } catch (error) {
      console.error('Erro ao carregar a nota:', error);
    }
  };

  const salvarNota = async () => {
    try {
      await AsyncStorage.setItem('nota', nota);
      console.log('Nota salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar a nota:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>Diário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua nota aqui"
        multiline
        value={nota}
        onChangeText={(text) => setNota(text)}
      />
      <Button title="Salvar Nota" onPress={salvarNota} style={styles.botaocontainer} color={'#AE001B'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 10
  },
});

export default Notas;
