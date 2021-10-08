import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from "react-native";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/8.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    closeIcon: {
        width: 70,
        height: 50,
        backgroundColor: "gold",
        position: "absolute",
        top: 50,
        left: 40,
    },

    deleteIcon: {
        width: 70,
        height: 50,
        backgroundColor: "red",
        position: "absolute",
        top: 50,
        right: 40,
    },

    container: {
        backgroundColor: "#000",
        flex: 1,
    },

    image: {
        width: "100%",
        height: "100%",
    }
});

export default ViewImageScreen;