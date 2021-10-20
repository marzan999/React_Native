import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/1234")} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    }
})

export default ListingDetailsScreen;