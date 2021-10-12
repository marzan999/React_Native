import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from "../config/colors"

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 130,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "50%",
    },

    text: {
        color: colors.black,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})

export default AppButton;