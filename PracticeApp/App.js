import React from 'react';
import {
  View,
  Text,
  AppState,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './App/components/AppText';

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
      <AppText>Email Box</AppText>
    </View>
  );
}
