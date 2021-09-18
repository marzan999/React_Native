import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/2.jpg")}
        >
            {/* <Image source={require("../assets/favicon.png") /> */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/5.png")} />
                <Text style={{
                    color: "white",
                    fontSize: 30,
                }}> Hello React Native</Text>
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
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 250,
        height: 200,

    },
    logoContainer: {
        position: "absolute",
        top: 170,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c",
    },
})
export default WelcomeScreen;