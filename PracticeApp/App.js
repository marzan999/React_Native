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
          backgroundColor: "orange",
          width: 150,
          height: 150,
          borderWidth: 15,
          borderColor: "dodgerblue",
          borderRadius: 15,
        }}
      ></View>

    </View>
  );
}

