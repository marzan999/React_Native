import React from 'react';
import {
  View,
  Text,
  AppState,
} from 'react-native';

import AppButton from './App/components/AppButton';

export default function App() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <AppButton title="Login" />
    </View>
  );
}
