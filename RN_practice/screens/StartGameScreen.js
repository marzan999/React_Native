import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNmumber] = useState();


    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('invalid number!', 'Number has not to be a number between 1 and 99.', [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNmumber(chosenNumber);
        setEnteredValue('');
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Text>Chosen Number : {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        //keyboardType="numeric"
                        keyboardType="number-pad"
                        //keyboardType="email-address"
                        maxLength={2}
                        onChangeText={text => numberInputHandler(text)}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset"
                                onPress={resetInputHandler}
                                color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        // justifyContent: "center", 
    },

    title: {
        fontSize: 25,
        marginVertical: 15,
    },

    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    button: {
        width: 100,
    },

    input: {
        width: 50,
        textAlign: "center",
    },

});

export default StartGameScreen;