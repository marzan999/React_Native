import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name="email"
        size={150}
        color="#000"
      />
    </View>
  );
}
