import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class EnviarScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>EnviarScreen</Text>
            </View>
        );
    }
}
export default EnviarScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});