import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../../src/assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import React from "react"

import Welcome from '../welcome';


export default function Home() {
  const navigation = useNavigation()

  const changeScreen = () => {
    navigation.navigate(Welcome)
  }

  React.useEffect(() => {
    setTimeout(() => {
      changeScreen()
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
     <Image source={logo} style={styles.imagecontainer}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1A1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecontainer:{
    width:400,
    height:400
  }
});

