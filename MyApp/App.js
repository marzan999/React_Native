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
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "blue",
          borderRadius: 10,
        }}
      ></View>
    </View>
  );
}
