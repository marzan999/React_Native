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
          padding: 25,
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            height: 100,
            width: 100,
          }}
        >
        </View>
      </View>



    </View >
  );
}

