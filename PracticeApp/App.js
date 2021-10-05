import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  View,
  Dimensions,

} from 'react-native';

export default function App() {

  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container} >
      <View style={{
        backgroundColor: "orange",
        width: "50%",
        height: 70,
      }}>

      </View>
    </ SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    // marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
  },

});