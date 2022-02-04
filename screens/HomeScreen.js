/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeScreen}>
      <Text>Bienvenue dans la page d'accueil !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
