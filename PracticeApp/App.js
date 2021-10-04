import React from 'react';
import {
  View,

} from 'react-native';

export default function App() {


  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >

      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
        }}
      />

      <View
        style={{
          backgroundColor: "orange",
          flex: 1,
        }}
      />

      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />

    </View>
  );
}