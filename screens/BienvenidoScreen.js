import React, { Component } from "react";
import {View,StyleSheet,Button} from "react-native";

class BienvenidoScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Login" onPress={() => this.props.navigation.navigate('LoginScreen')} />
                <Button title="Registrar" onPress={() => this.props.navigation.navigate('RegistrarScreen')} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BienvenidoScreen;