import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeEncontro } from '../encontros/HomeEncontro';
import { HomeAssunto } from '../assuntos/HomeAssunto';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Encontro" component={HomeEncontro} />
      <Tab.Screen name="Assunto" component={HomeAssunto} />
      
    </Tab.Navigator>
   
  );
}