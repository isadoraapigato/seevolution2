import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from '../pages/intro'
import Welcome from '../pages/welcome'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import Validar from '../pages/validar'
import Evolution from '../pages/evolution'
import Profile from '../pages/profile'
import Editprofile from '../pages/editprofile'
import Metas from '../pages/metas'
import Newmeta from '../pages/newmeta'
import Selectedmeta from '../pages/selectedmeta'
import Receitas from '../pages/receitaas'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Treino from '../pages/treino'
import Notas from '../pages/notas'
import Home from '../pages/home'
import Panquecaproteica from '../pages/panquecaproteica'
import Extensora from '../pages/extensora'

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Panquecaproteica"
        component={Panquecaproteica}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Extensora"
        component={Extensora}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Receitas"
        component={Receitas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Treino"
        component={Treino}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notas"
        component={Notas}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Evolution"
        component={Evolution}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Metas"
        component={Metas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Validar"
        component={Validar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Newmeta"
        component={Newmeta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Selectedmeta"
        component={Selectedmeta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Editprofile"
        component={Editprofile}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}