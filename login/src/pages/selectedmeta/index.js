import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Modal, KeyboardAvoidingView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'



import Profile from "../profile"

export default function Selectedmeta() {
  const navigation = useNavigation()

  const [value, setValue] = React.useState(0)
  const [modalVisible, setModalVisible] = React.useState(false);

  const closeModal = () => {
    setModalVisible(false)
  }

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
          <View style={styles.meta}>
            <MaterialCommunityIcons name="weight-lifter" size={24} color="red" />
            <Text style={styles.textoBranco}>Ganhar peso</Text>
          </View>
          <View style={styles.selectedMeta}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Ionicons name="water" size={24} color="#007CA6" />
              <Text style={styles.textoBranco}>Tomar água</Text>
            </View>
            <View style={styles.divisor} />
            <Text style={styles.textoBranco}>Quantos ml por dia você deseja tomar?</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
              <TouchableOpacity onPress={() => setValue(value == 0 ? 0 : value - 100)}>
                <Text style={{ color: 'white', fontSize: 20 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 20 }}>{value}ml</Text>
              <TouchableOpacity onPress={() => setValue(value + 100)}>
                <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.meta}>
            <MaterialCommunityIcons name="food-apple" size={24} color="red" />
            <Text style={styles.textoBranco}>Comer saúdavel</Text>
          </View>
          <TouchableOpacity onPress={() => { setModalVisible(true) }}>
            <View style={styles.button}>
              <Text style={styles.textoBranco}>Não encontrou uma meta? Crie uma</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.button2}>
              <Text style={styles.textoBranco}>Confirmar</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Modal
              visible={modalVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={closeModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <View style={styles.alignHeader}>
                    <Text style={styles.registerText3}>Meta customizada</Text>
                    <AntDesign name="close" size={24} color="white" style={styles.icone} onPress={closeModal} />
                  </View>
                  <TextInput
                    mode='outlined'
                    cancelable={true}
                    style={styles.input}
                    keyboardType='default'
                    label="Nome da meta"
                    outlineColor='#fff'
                    selectionColor='#fff'
                    activeOutlineColor='#fff'
                    textColor="#fff"
                  />
                  <Text style={{color: 'white', marginTop: 10}}>Tipo de medida</Text>
                  <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                   <View style={{borderWidth: 1, padding: 12, marginTop: 10, borderRadius: 10, borderColor: 'white'}}><Text style={{color: 'white'}}>Ml</Text></View> 
                   <View style={{borderWidth: 1, padding: 12, marginTop: 10, borderRadius: 10, borderColor: 'white'}}><Text style={{color: 'white'}}>Kg</Text></View> 
                   <View style={{borderWidth: 1, padding: 12, marginTop: 10, borderRadius: 10, borderColor: 'white'}}><Text style={{color: 'white'}}>Un</Text></View> 
                   <View style={{borderWidth: 1, padding: 12, marginTop: 10, borderRadius: 10, borderColor: 'white'}}><Text style={{color: 'white'}}>Km</Text></View> 
                  </View>
                  <TextInput
                    mode='outlined'
                    cancelable={true}
                    style={styles.input}
                    label="Quantidade"
                    outlineColor='#fff'
                    selectionColor='#fff'
                    activeOutlineColor='#fff'
                    textColor="#fff"
                    keyboardType="number-pad"
                  />
                  <TouchableOpacity onPress={closeModal}>
                    <View style={styles.button3}>
                      <Text style={styles.textoBranco}>Confirmar</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

        </View>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    fontSize: 16,
    placeholderTextColor: '#fff',
    outlineColor: '#fff',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#0B1A1F',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '85%',
    height: '44%',
  },
  alignHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  registerText3: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  divisor: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 5
  },
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
    width: 350,
    marginTop: 250,
    gap: 10,
    padding: 15,
    borderRadius: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button3:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
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
  selectedMeta: {
    display: 'flex',
    flexDirection: 'colunm',
    backgroundColor: '#0E2932',
    width: 350,
    padding: 10,
    gap: 10,
    padding: 20,
    borderRadius: 10,
    position: 'relative',
    borderColor: 'cyan',
    borderWidth: 1
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