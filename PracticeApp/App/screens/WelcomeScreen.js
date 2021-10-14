import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground

            style={styles.background}
            source={require("../assets/6.jpg")}>

            <View style={styles.size}>
                <Image style={styles.logo} source={require("../assets/favicon.png")} />
                <Text style={styles.text}>Hello React Native</Text>
            </View>

            <AppButton title="Login" />

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


    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "orange",
    },

    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },

    size: {
        position: "absolute",
        top: 300,
    },

    text: {
        fontSize: 40,
        color: "white",
    }
})

export default WelcomeScreen;

