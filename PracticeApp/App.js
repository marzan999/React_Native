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
        alignItems: "center"
      }}
    >
      <View
        style={{
          height: 300,
          width: 430,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <View
          style={{
            backgroundColor: "red",
            width: 200,
            height: 200,
            borderRadius: 110,
          }}
        >

        </View>

      </View>
      <Text
        style={{
          fontSize: 30,
        }}
      >BANGLADESH</Text>

    </View>

  );
}

