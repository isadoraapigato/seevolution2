import React from "react"
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Welcome from "../welcome"
import Editprofile from "../editprofile"
import Metas from "../metas"
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BottomTab from "../../assets/components/BottomTab";
import Notas from '../notas'



export default function Profile() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <BottomTab selectedOption="perfil"/>
      <Image
        style={styles.profile}
        source={require('../../assets/profile.png')}
      />
      <Text style={styles.message}>Isadorothy</Text>
      <Text style={styles.message2}>Opções</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate(Editprofile)}>
        <MaterialIcons name="edit" size={24} color="red" style={styles.icone}/>
        <Text style={styles.registerText}>Editar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate(Metas)}>
        <Octicons name="graph" size={24} color="red" style={styles.icone}/>
        <Text style={styles.registerText}>Suas metas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate()}>
        <MaterialCommunityIcons name="human-handsup" size={24} color="red" style={styles.icone} />
        <Text style={styles.registerText}>Medidas corporais</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate(Notas)}>
        <Ionicons name="book-sharp" size={24} color="red" style={styles.icone} />
        <Text style={styles.registerText}>Diário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate()}>
        <Ionicons name="ios-heart-circle" size={24} color="red" style={styles.icone} />
        <Text style={styles.registerText}>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button2, { backgroundColor: "red", marginTop: 150}]}
        onPress={() => navigation.navigate(Welcome)}>
        <Text style={styles.registerText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1A1F'
  },
  profile: {
    marginTop: '10%',
    marginLeft: '41%',
    marginRight: '30%'
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
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 15,
    marginLeft: '30%',
    marginRight: '30%',
    color: '#fff',
    marginBottom: 0
    /*fontWeight: 'bold'*/
  },
  icone: {
    marginLeft: 10
  },
  message2: {
    marginLeft: '5%',
    marginTop: '9%',
    color: '#fff'
  },
  registerText: {
    color: '#fff',
    fontSize: 17,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#102D36',
    width: '90%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 10,
    marginLeft: 17,
    marginRight: 17,
    justifyContent: 'left',
    alignItems: 'left',
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  button2: {
    backgroundColor: '#102D36',
    width: '90%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 10,
    marginLeft: 17,
    marginRight: 17,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
})