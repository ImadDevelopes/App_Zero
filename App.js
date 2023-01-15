import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform   } from 'react-native';

export default function App() {
  console.log('View');;
  console.log('Text');
  console.log(require('./assets/icon.png'));
    return (git
    <SafeAreaView Style={styles.container}>
    <View style={{backgroundColor:"dodgerblue", 
                  width: "50%",
                  height: "70" }}></View>
      <View style={styles.container}>
      <Text>Helo React Native</Text>
      <Image source={require("./assets/icon.png")}/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dodglerblue",
    alignItems: "center",
    justifyContent: "center",
  };
});
