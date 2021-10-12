import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from "../config/colors"

function AppButton({ title }) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 130,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
    },

    text: {
        color: colors.black,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})

export default AppButton;