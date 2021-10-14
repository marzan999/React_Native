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
                {/* <Image style={styles.logo} source={require("../assets/favicon.png")} /> */}
                <Text style={styles.text}>  Welcome to </Text>
                <Text style={styles.bText}>ভূতের বাড়ি</Text>
                <Text style={styles.emoji}>  🧛‍♂️👻🧛‍♂️</Text>
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

    bText: {
        fontSize: 55,
        color: "gold",
    },

    emoji: {
        fontSize: 55,
    },

    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },

    size: {
        position: "absolute",
        top: 440,
    },

    text: {
        fontSize: 40,
        color: "white",
    }
})

export default WelcomeScreen;

