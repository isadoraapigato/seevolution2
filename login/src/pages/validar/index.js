import React from "react"
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ToastAndroid } from "react-native"
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Cadastro from "../cadastro"
import Login from "../login"

export default function Validar() {
  const navigation = useNavigation()

  const showToast = () => {
    ToastAndroid.show('Código reenviado!', ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.voltar} source={require('../../assets/btnVoltar.png')} />
      </TouchableOpacity>
      <Image
        style={styles.NotiLogo}
        source={require('../../assets/notification.png')}
        onPress={() => navigation.navigate(Cadastro)}
      />
      <Text style={styles.message}>Validar e-mail</Text>
      <Text style={styles.text}>Nós enviamos um email para isad***@gmail.com com um código de validação</Text>
      <View style={styles.viewH}>
        <TextInput
          style={styles.inputVerification}
          label="Code"
          mode='outlined'
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.inputVerification}
          label="Code"
          mode='outlined'
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.inputVerification}
          label="Code"
          mode='outlined'
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.inputVerification}
          label="Code"
          mode='outlined'
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.inputVerification}
          label="Code"
          mode='outlined'
          maxLength={1}
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate(Login)}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <View style={styles.textos}>
        <Text style={styles.textoNormal}>Não recebeu o código?</Text>
        <Text style={styles.registerText2} onPress={showToast}> Reenviar código</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#0B1A1F'
  },
  voltar: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 30,
    marginLeft: -180,
    width: 10,
    height: 15,
  },
  textos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoNormal: {
    color: '#FFF',
    marginRight: 5,
    marginTop: 10,
    fontSize: 15
  },
  registerText2: {
    color: '#AE001B',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 15
  },
  inputVerification: {
    height: 90,
    width: 70,
    borderRadius: 10,
    fontSize: 40,
    color: '#FFF',
    textAlign: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DDD',
    marginHorizontal: 5,
  },
  viewH: {
    flexDirection: 'row',
    marginBottom: 30,
    marginHorizontal: 10,

  },
  NotiLogo: {
    marginLeft: 0,
    marginTop: '10%',
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
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
  text: {
    color: '#FFF',
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    marginBottom: 40,
  }
})