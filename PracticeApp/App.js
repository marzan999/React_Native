import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,

} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("Messege", "Messege received?",
            [
              { text: "Yes", onPress: () => console.log("Yes, messege received") },
              { text: "No", onPress: () => console.log("No, messege not received") }
            ]
          )} />
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
