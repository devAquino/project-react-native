import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import NavigationTab from './src/screens/navigationtab/NavigationTab';
import { CadastrarAssunto } from './src/screens/assuntos/CadastrarAssunto';
import { CadastrarEncontro } from './src/screens/encontros/CadastrarEncontro';
import { ExcluirEncontro } from './src/screens/encontros/ExcluirEncontro';
import { ExcluirAssunto } from './src/screens/assuntos/ExcluirAssunto';
import { ListarAssunto } from './src/screens/assuntos/ListarAssunto';
import { ListarEncontro } from './src/screens/encontros/ListarEncontro';

import { Login } from './src/screens/login/Login';

const Stack = createStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="NavigationTab"
          component={NavigationTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CadastrarAssunto" component={CadastrarAssunto} />
        <Stack.Screen name="ListarAssunto" component={ListarAssunto} />
        <Stack.Screen name="ExcluirAssunto" component={ExcluirAssunto} />
        
        <Stack.Screen name="CadastrarEncontro" component={CadastrarEncontro} />
        <Stack.Screen name="ListarEncontro" component={ListarEncontro} />
        <Stack.Screen name="ExcluirEncontro" component={ExcluirEncontro} />
        {/* <Stack.Screen name='NavigationTab' component={NavigationTab}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
