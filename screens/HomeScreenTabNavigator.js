import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HorarioScreen from './TabNavigator/HorarioScreen'
import EnviarScreen from './TabNavigator/EnviarScreen'
import EventoScreen from './TabNavigator/EventoScreen'


export default class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-menu" size={24} onPress={() => navigation.navigate('DrawerOpen')} />
                </View>
            )
        }
    }
    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        )
    }
}

const HomeScreenTabNavigator = new TabNavigator({
    HorarioScreen: {
        screen: HorarioScreen,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Ionicons name="md-compass" size={24} />
            )
        }
    },
    EventoScreen: {
        screen: EventoScreen,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Ionicons name="md-compass" size={24} />
            )
        }
    },
    EnviarScreen: {
        screen: EnviarScreen,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Ionicons name="md-compass" size={24} />
            )
        }
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});