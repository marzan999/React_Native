import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,

} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks'

export default function App() {

  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container} >
      <View
        style={{
          backgroundColor: "orange",
          width: "100%",
          // height: "30%",
          height: landscape ? "100%" : "30%",
          // marginTop: 30,
        }}
      />
    </ SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: "center",
    // alignItems: "center",
  },

});
