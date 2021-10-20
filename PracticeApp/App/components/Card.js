import React from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

import AppText from './AppText';

import colors from '../config/colors';


function Card({ title, subTitle, image }) {
    return (
        <View
            style={styles.card}
        >
            <Image style={styles.image} source={image} />
            <AppText title={title} customStyle={styles.title} />
            <AppText title={subTitle} customStyle={styles.subTitle} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
    },

    image: {
        width: "100%",
        height: 300,
    },

    title: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 25,
    },

    subTitle: {
        color: 'green',
        fontWeight: "bold",
        fontSize: 20,
    },
})

export default Card;