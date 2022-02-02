/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native App Intro Slider using AppIntroSlider
        </Text>
        <Text style={styles.paragraphStyle}>
          This will be your screen when you click Skip from any slide or Done
          button at last
        </Text>
        <Button title="Show Intro Slider again" onPress={props.changeState} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});
