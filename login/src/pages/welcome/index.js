import React from 'react'
import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Intro from '../intro'

export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View> 
      <Image
        style={styles.run}
        source={require('../../assets/run.png')} />
        <Text style={styles.message}> Objetivo</Text>
        <Text style={styles.message2}> Ajudar as pessoas a encontrar a maneira certa {`\n`} para alcançar seu objetivo e {`\n`} manter uma vida mais saudável de {`\n`} forma mais prática, divertida e acessível.</Text>
      </Animatable.View>

      <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate(Intro)}>
          <Text style={styles.registerText}>Começar</Text>
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
  run:{
    marginLeft: 60,
    marginRight: 60,
    marginTop: '30%',
    width: 380,
    height: 315,
    marginBottom: 20,
    alignItems: 'center'
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