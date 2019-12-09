import React, {Component} from 'react';
import { StyleSheet} from 'react-native';

import { StackNavigator } from 'react-navigation';
import BienvenidoScreen from './screens/BienvenidoScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrarScreen from './screens/RegistrarScreen';
import DrawerNavigator from './screens/DrawerNavigator';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  };
}

const AppStackNavigator = new StackNavigator({
  BienvenidoScreen: { screen: BienvenidoScreen },
  LoginScreen: { screen: LoginScreen },
  RegistrarScreen: { screen: RegistrarScreen },
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: 'none'
    }
  }
}, {
    navigationOptions: {
      gesturesEnabled: false
    }
  })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
