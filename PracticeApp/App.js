import React from 'react';
import {
  View,
} from 'react-native';

import Card from "./App/components/Card";

export default function App() {

  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 10,
        paddingTop: 100,
      }}
    >
      <Card
        title="Sitting for sale"
        subTitle="100 BDT"
        image={require("./App/assets/1234.jpeg")}
      />
    </View>
  );
}
