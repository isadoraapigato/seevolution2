import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import Profile from "../../pages/profile";
import Metas from "../../pages/metas";
import Receitas from "../../pages/receitaas";
import Treino from "../../pages/treino";
import Home from "../../pages/home";

export default function BottomTab(props) {
  const navigation = useNavigation()

  return (
    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', display: 'flex', width: '100%', position: 'absolute', bottom: 0, height: 70, backgroundColor: 'white', zIndex: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, flexDirection: 'row' }}>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={() => { navigation.navigate(Home) }}>
          {props.selectedOption == 'home' ? <Ionicons name="home-outline" size={25} color="red" /> : <Ionicons name="home-outline" size={25} color="#C3C3C3" />}
          {props.selectedOption == 'home' ? <Text style={{ color: 'red' }}>Inicio</Text> : <Text style={{ color: '#C3C3C3' }}>Inicio</Text>}
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Entypo name="suitcase" size={25} color="#C3C3C3" />
        <Text style={{ color: '#C3C3C3' }}>Profissionais</Text>
      </View>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={() => { navigation.navigate(Receitas) }}>
          {props.selectedOption == 'receitas' ? <MaterialCommunityIcons name="egg-fried" size={25} color="red" /> : <MaterialCommunityIcons name="egg-fried" size={25} color="#C3C3C3" />}
          {props.selectedOption == 'receitas' ? <Text style={{ color: 'red' }}>Receitas</Text> : <Text style={{ color: '#C3C3C3' }}>Receitas</Text>}
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={() => { navigation.navigate(Treino) }}>
          {props.selectedOption == 'treino' ? <MaterialCommunityIcons name="weight-lifter" size={25} color="red" /> : <MaterialCommunityIcons name="weight-lifter" size={25} color="#C3C3C3" />}
          {props.selectedOption == 'treino' ? <Text style={{ color: 'red' }}>Treino</Text> : <Text style={{ color: '#C3C3C3' }}>Treino</Text>}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={() => { navigation.navigate(Metas) }}>
          {props.selectedOption == 'metas' ? <Octicons name="graph" size={25} color="red" /> : <Octicons name="graph" size={25} color="#C3C3C3" />}
          {props.selectedOption == 'metas' ? <Text style={{ color: 'red' }}>Metas</Text> : <Text style={{ color: '#C3C3C3' }}>Metas</Text>}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={() => { navigation.navigate(Profile) }}>
          {props.selectedOption == 'perfil' ? <Octicons name="people" size={25} color="red" /> : <Octicons name="people" size={25} color="#C3C3C3" />}
          {props.selectedOption == 'perfil' ? <Text style={{ color: 'red' }}>Perfil</Text> : <Text style={{ color: '#C3C3C3' }}>Perfil</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}