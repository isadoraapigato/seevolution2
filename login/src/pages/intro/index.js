import React from "react"
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Cadastro from "../cadastro"

export default function Intro() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
       
      > 
      <Image
        style={styles.undraw}
        source={require('../../assets/undraw.png')}
      />
        <Text style={styles.message}> Evolução</Text>
        <Text style={styles.message2}> O intuito do aplicativo é trazer facilidade às pessoas para consumirem conteúdos e estratégias para sua evolução. Além de {`\n`} motivar e mostrar o avanço/crescimento{`\n`} dos seus esforços e dedicações.</Text>
      </Animatable.View>

      <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate(Cadastro)}>
          <Text style={styles.registerText}>Continuar</Text>
        </TouchableOpacity>

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
  containerHeader: {
   
  },
  undraw:{
    marginLeft: 60,
    marginRight: 60,
    marginTop: '30%',
    width: 300,
    height: 315,
    marginBottom: 20,
    alignItems:'center'
  },
  message: {
    textAlign: 'center',
    fontSize: 25,
    marginLeft: 20,
    marginRight: 40,
    color: '#fff',
    fontWeight: 'bold'
  },
  message2: {
    
    textAlign: 'center',
    fontSize: 17,
    marginLeft: 20,
    marginRight: 40,
    color: '#fff'
    /*fontWeight: 'bold'*/
  },
  registerText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#AE001B',
    width: '80%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop:115,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
