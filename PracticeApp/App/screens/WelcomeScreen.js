import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
    buttonsContainer,
} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground

            style={styles.background}
            source={require("../assets/33.jpg")}>

            <View style={styles.size}>
                <Image style={styles.logo} source={require("../assets/favicon.png")} />
                <Text style={styles.text}>Hello React Native</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />

            </View>


        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
        alignItems: 'center'
    },


    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },

    size: {
        position: "absolute",
        top: 370,
    },

    text: {
        fontSize: 40,
        color: "white",
    }
})

export default WelcomeScreen;

