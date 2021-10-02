import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,

} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello React Native!</Text> */}
      <Image
        //blurRadius={5}
        //fadeDuration={1000}
        style={styles.nature}
        source={require("./assets/2.jpg")} />
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

  nature: {
    width: 250,
    height: 350,
  },

});
