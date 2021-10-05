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

  return (
    <SafeAreaView style={styles.container} >

      <View style={{
        backgroundColor: "orange",
        //flexBasis: 100,
        //flexGrow: 1,
        width: 400,
        flexShrink: 1,
        height: 100,
      }} />


      <View style={{
        backgroundColor: "green",
        width: 100,
        height: 100,
      }} />

      <View style={{
        backgroundColor: "black",
        width: 100,
        height: 100,
      }} />


    </ SafeAreaView >
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
    flexDirection: "row",
  },

});