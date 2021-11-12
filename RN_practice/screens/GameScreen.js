import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

const generateRandomBetween = (max, min, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndnum = Math.floor(Math.random() * (max - min)) + min;

    if (rndnum === exclude) {
        return generateRandomBetween(max, min, exclude);
    }
    else {
        return rndnum;
    }
};

const GameScreen = props => {
    const [currentguess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userchoice)
    );
};

const styles = StyleSheet.create({

});

export default GameScreen;