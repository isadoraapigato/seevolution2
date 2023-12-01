import * as React from 'react';
import Profissionais from './components/src/profissionais'
import Fisioterapeutatres from './components/src/fisioterapeutatres';
import Nutricionistadois from './components/src/nutricionistadois'
import Nutricionistaum from './components/src/nutricionistaum';
import Personaltrainerdois from './components/src/personaltrainerdois';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personaltrainertres from './components/src/personaltrainertres';
import Personaltrainerum from './components/src/nutricionistadois';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Profissionais' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Profissionais' component={Profissionais} />
      <Stack.Screen name='Fisioterapeutatres' component={Fisioterapeutatres} />
      <Stack.Screen name='Nutricionistadois' component={Nutricionistadois} />
      <Stack.Screen name='Nutricionistaum' component={Nutricionistaum} />
      <Stack.Screen name='Personaltrainerdois' component={Personaltrainerdois} />
      <Stack.Screen name='Personaltrainertres' component={Personaltrainertres} />
      <Stack.Screen name='Personaltrainerum' component={Personaltrainerum} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}