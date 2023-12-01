import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import BottomTab from "../../assets/components/BottomTab";

import Profile from "../profile"
import Newmeta from "../newmeta";

export default function Metas() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <BottomTab selectedOption="metas"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.alignTime}>
          <View style={styles.backgroundTime}>
            <Text style={styles.textoBrancoComMargin}>Ano</Text>
            <View style={styles.monthBackground}>
              <Text style={styles.textoBranco}>Mês</Text>
            </View>
            <Text style={styles.textoBranco}>Dia</Text>
          </View>
        </View>
        <View style={styles.novemberAlign}>
          <MaterialIcons name="arrow-back-ios" size={10} color="white" />
          <Text style={styles.textoBranco}>Novembro</Text>
          <MaterialIcons style={styles.invert} name="arrow-back-ios" size={10} color="white" />
        </View>
        <View style={styles.alignMetas}>
          <Text style={styles.textoBranco}>Suas metas</Text>
          <View style={styles.meta}>
            <View style={styles.goBehind}></View>
            <MaterialCommunityIcons name="weight-lifter" size={24} color="red" />
            <Text style={styles.textoBranco}>Treinar todos os dias</Text>
            <Text style={styles.textoDaMeta}>20/30</Text>
          </View>
          <View style={styles.meta}>
            <View style={styles.goBehind}></View>
            <Feather name="book" size={24} color="#FFF" />
            <Text style={styles.textoBranco}>Ler a noite</Text>
            <Text style={styles.textoDaMeta}>20/30</Text>
          </View>
          <View style={styles.meta}>
            <View style={styles.goBehind}></View>
            <Ionicons name="water" size={24} color="#007CA6" />
            <Text style={styles.textoBranco}>Tomar água</Text>
            <Text style={styles.textoDaMeta}>20/30</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(Newmeta)}>
            <View style={styles.button}>
              <Text style={styles.textoBranco}>Adicionar nova meta</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textoBranco}>Seu progesso</Text>
          <Image
            style={styles.image}
            source={require('../../assets/progresso.png')}
          />
        </View>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    borderRadius: 10
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
    position: 'relative'
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
    marginTop: 10,
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
    gap: 15,
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