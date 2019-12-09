import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';  

import BienvenidoScreen from './screens/BienvenidoScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrarScreen from './screens/RegistrarScreen';
import DrawerNavigator from './screens/DrawerNavigator';



const MainNavigator = createStackNavigator({
  BienvenidoScreen: { screen: BienvenidoScreen },
  LoginScreen: { screen: LoginScreen },
  RegistrarScreen: { screen: RegistrarScreen },
  DrawerNavigator: {screen: DrawerNavigator},
});

const App = createAppContainer(MainNavigator);

export default App;

