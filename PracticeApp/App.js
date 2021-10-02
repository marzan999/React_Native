import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,

} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => console.log("button pressed")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 45,
  },

});
