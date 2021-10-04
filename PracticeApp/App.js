import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,

} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <View
        style={{
          backgroundColor: "orange",
          width: "50%",
          height: 100,
        }}
      />
    </ SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },

});
