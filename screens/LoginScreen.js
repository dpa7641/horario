import React, { Component } from "react";
import {View,StyleSheet,Button} from "react-native";

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Login" onPress={() => this.props.navigation.navigate('DrawScreen')} />
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

export default LoginScreen;