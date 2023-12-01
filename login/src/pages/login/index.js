import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { TextInput, } from 'react-native-paper'
import see from '../../assets/see.png'

import * as Animatable from 'react-native-animatable'
import Cadastro from "../cadastro"
import Evolution from "../evolution"


export default function Login() {
  const navigation = useNavigation()
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >

      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Image
        style={styles.SeeLogo}
        source={require('../../assets/see.png')}
      />
        <View style={styles.header}>
          <Text style={styles.message}>Olá, novamente</Text>
          <Text style={styles.message2}>Faça login</Text>
        </View>

        <TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          keyboardType='default'
          label="E-mail"
          outlineColor='#AE001B'
          selectionColor='#AE001B'
          onChangeText={text => setText(text)}
          activeOutlineColor='#AE001B'
        />

        <TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          keyboardType='default'
          label="Senha"
          outlineColor='#AE001B'
          selectionColor='#AE001B'
          onChangeText={text => setText(text)}
          activeOutlineColor='#AE001B'
        />
        

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate(Evolution)}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}
          onPress={() => navigation.navigate(Cadastro)}>
          <View style={styles.textos}>
            <Text style={styles.registerText}>Não tem uma conta?</Text>
            <Text style={styles.registerText2}> Crie uma</Text>

          </View>

        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1A1F'
  },
  SeeLogo:{
    marginTop: '10%',
    width: 65,
    height: 65,
    marginRight:'83%'
  },
  containerHeader: {
    marginTop: '13%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems:'flex-start'
    
  },
  message: {
    marginTop: 8,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#AE001B'
  },
  message2: {
    fontSize: 15,
    color: '#AE001B'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: '#AE001B'
  },
  input: {
    width: '80%',
    height: 50,
    marginBottom: 12,
    fontSize: 16,
    placeholderTextColor: '#000',
    marginHorizontal: 50,
    marginVertical: 20,
    outlineColor: '#AE001B'
  },
  button: {
    backgroundColor: '#AE001B',
    width: '80%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignItems: 'center'
  },
  registerText: {
    color: 'black',
    fontWeight: 'bold'
  },
  registerText2: {
    color: '#AE001B',
    fontWeight: 'bold'
  },
  textos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

})
