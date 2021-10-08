import React from 'react';
import {
  View,
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

      <View
        style={{
          backgroundColor: "red",
          width: 200,
          height: 200,
          borderWidth: 20,
          borderColor: "green",
          borderRadius: 110,
        }}
      ></View>

    </View>
  );
}

