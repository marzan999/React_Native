import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Start a new game</Text>
            <View>
                <Text>Select a number</Text>
                <TextInput />
                <View>
                    <Button title="Reset" onPress={() => { }} />
                    <Button title="Confirm" onPress={() => { }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        // justifyContent: "center", 
    },

});

export default StartGameScreen;