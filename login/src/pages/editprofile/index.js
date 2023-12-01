import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Modal } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

export default function Editprofile() {
  const navigation = useNavigation()
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [senhaantiga, setSenhaantiga] = React.useState("");
  const [novasenha, setNovasenha] = React.useState("");
  const [confirmarsenha, setConfirmarsenha] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false);

  const handlePress = () => {
    setModalVisible(true);
    // Se você quiser navegar para outra tela ao mesmo tempo, você pode adicionar
    // navigation.navigate() aqui também.
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.voltar} source={require('../../assets/btnVoltar.png')} />
        </TouchableOpacity>
        <Text style={styles.message5}>Editar perfil</Text>
      </View>
      <Image
        style={styles.profile}
        source={require('../../assets/profile.png')}
      />
      <Text style={styles.message}>Alterar foto</Text>

      <TextInput
        mode='outlined'
        cancelable={true}
        style={styles.input}
        keyboardType='default'
        label="Nome do perfil"
        outlineColor='#fff'
        selectionColor='#fff'
        value={nome}
        onChangeText={(nome) => setNome(nome)}
        activeOutlineColor='#fff'
        textColor="#fff"
      />

      <TextInput
        mode='outlined'
        cancelable={true}
        style={styles.input}
        keyboardType='default'
        label="E-mail"
        outlineColor='#fff'
        selectionColor='#fff'
        value={email}
        onChangeText={(email) => setEmail(email)}
        activeOutlineColor='#fff'
        textColor="#fff"
      />
      <TextInput
        mode='outlined'
        cancelable={true}
        style={styles.input}
        keyboardType='default'
        label="Senha"
        outlineColor='#fff'
        selectionColor='#fff'
        value={senha}
        onChangeText={(senha) => setSenha(senha)}
        activeOutlineColor='#fff'
        textColor="#fff"
        secureTextEntry={hidePassword}
        right={<TextInput.Icon icon={hidePassword ? 'eye-off' : 'eye'} onPress={() => { setHidePassword(!hidePassword) }} />}
      />


      <View>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.registerText2}>Mudar senha</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.alignHeader}>
                <Text style={styles.registerText3}>Alterar senha</Text>
                <AntDesign name="close" size={24} color="white" style={styles.icone} onPress={closeModal} />
              </View>
              <TextInput
                mode='outlined'
                cancelable={true}
                style={styles.inputModal}
                keyboardType='default'
                label="Senha antiga"
                outlineColor='#fff'
                selectionColor='#fff'
                activeOutlineColor='#fff'
                textColor="#fff"
              />
              <TextInput
                mode='outlined'
                cancelable={true}
                style={styles.inputModal}
                keyboardType='default'
                label="Nova senha"
                outlineColor='#fff'
                selectionColor='#fff'
                activeOutlineColor='#fff'
                textColor="#fff"
                secureTextEntry
              />
              <TextInput
                mode='outlined'
                cancelable={true}
                style={styles.inputModal}
                keyboardType='default'
                label="Confirmar senha"
                outlineColor='#fff'
                selectionColor='#fff'
                activeOutlineColor='#fff'
                textColor="#fff"
                secureTextEntry
              />
              <TouchableOpacity onPress={closeModal}>
                <View style={styles.button3}>
                  <Text style={{color: 'white'}}>Confirmar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity style={styles.button6}
        onPress={() => navigation.goBack()}>
        <Text style={styles.registerText}>Salvar</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
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
  voltar: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 15,
    width: 10,
    height: 15,
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
  message2: {
    marginLeft: '5%',
    marginTop: '9%',
    color: '#fff',
    fontSize: 17,
  },
  message3: {
    marginLeft: '5%',
    marginTop: '9%',
    color: '#fff',
    fontSize: 17,
  },
  message4: {
    marginLeft: '5%',
    marginTop: '9%',
    color: '#fff',
    fontSize: 17,
  },
  message5: {
    marginLeft: '5%',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  registerText: {
    color: '#fff',
    fontSize: 17,
    alignItems: 'center'
  },
  registerText2: {
    color: '#007CA6',
    marginLeft: 40,
    fontSize: 17,
    alignItems: 'center',
    marginTop: '4%',
  },
  registerText3: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button6: {
    backgroundColor: '#007CA6',
    width: '80%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 38,
  },
  containerText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    marginTop: '8%',
    fontSize: 16,
    width: 350,
    marginLeft: '10%',
    placeholderTextColor: '#fff',
    outlineColor: '#fff',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  inputModal: {
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
    height: '42%',
  },
  alignHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
})