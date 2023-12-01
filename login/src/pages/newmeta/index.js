import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import Profile from "../profile"
import Selectedmeta from "../selectedmeta";

export default function Newmeta() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.voltar} source={require('../../assets/btnVoltar.png')} />
        </TouchableOpacity>
        <Text style={styles.message5}>Nova meta</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.alignMetas}>
          <TouchableOpacity onPress={() => navigation.navigate(Selectedmeta)}>
            <View style={styles.meta}>
              <MaterialCommunityIcons name="weight-lifter" size={24} color="red" />
              <Text style={styles.textoBranco}>Ganhar peso</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(Selectedmeta)}>
            <View style={styles.meta}>
              <Ionicons name="water" size={24} color="#007CA6" />
              <Text style={styles.textoBranco}>Tomar água</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(Selectedmeta)}>
            <View style={styles.meta}>
              <MaterialCommunityIcons name="food-apple" size={24} color="red" />
              <Text style={styles.textoBranco}>Comer saúdavel</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.textoBranco}>Não encontrou uma meta? Crie uma</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button2}>
              <Text style={styles.textoBranco}>Confirmar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  voltar: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 15,
    width: 10,
    height: 15,
  },
  message5: {
    marginRight: '50%',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  containerText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 350,
    borderRadius: 10
  },
  button2: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    marginTop: '100%',
    width: 350,
    gap: 10,
    padding: 15,
    borderRadius: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0E2932',
    width: 350,
    gap: 10,
    padding: 15,
    borderRadius: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoDaMeta: {
    color: 'white',
    position: 'absolute',
    right: 17,
    marginTop: 18,
  },
  novemberAlign: {
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 20
  },
  goBehind: {
    width: '90%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 58,
    position: 'absolute',
    backgroundColor: '#102D36',
  },
  alignMetas: {
    display: 'flex',
    gap: 10,
    marginBottom: 20
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0E2932',
    width: 350,
    padding: 10,
    gap: 10,
    padding: 20,
    borderRadius: 10,
    position: 'relative',
  },
  invert: {
    transform: 'rotate(180deg)'
  },
  textoBrancoComMargin: {
    color: 'white',
    marginLeft: 20
  },
  backgroundTime: {
    width: '75%',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 4,
    borderRadius: 10,
    backgroundColor: '#102D36'
  },
  monthBackground: {
    backgroundColor: '#0B1A1F',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10
  },
  alignTime: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  textoBranco: {
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#0B1A1F',
    display: 'flex',
    alignItems: 'center',
    gap: 15
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  text: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    marginBottom: 50
  },
  message: {
    marginTop: '65%',
    textAlign: 'center',
    fontSize: 30,
    marginLeft: 20,
    marginRight: 40,
    color: '#fff'
    /*fontWeight: 'bold'*/
  },
})