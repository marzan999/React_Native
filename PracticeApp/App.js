import React from 'react';
import {
  View,
  Text,
} from 'react-native';


export default function App() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          //fontFamily: "Roboto",
          fontSize: 40,
          fontStyle: "italic",
        }}
      >
        I love React Native
      </Text>
    </View >
  );
}
