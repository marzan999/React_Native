import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground

            style={styles.background}
            source={require("../assets/6.jpg")}>

            <View style={styles.size}>
                <Image style={styles.logo} source={require("../assets/favicon.png")} />
                <Text>Hello React Native</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "dodgerblue",
    },

    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "orange",
    },

    logo: {
        width: 100,
        height: 100,
        alignItems: "center",
    },

    size: {
        position: "absolute",
        top: 300,
    }
})

export default WelcomeScreen;