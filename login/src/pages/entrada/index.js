import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'

export default function App() {
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