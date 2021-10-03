import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,

} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <Button
        title="Click Me"
        onPress={() => console.log("button tapped")} />
    </ SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    // marginTop: 45,
  },

});
