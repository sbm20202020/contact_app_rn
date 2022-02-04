/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AnnoncesScreen = ({navigation}) => {
  return (
    <View style={styles.annonces}>
      <Text>Bienvenue dans les annonces !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  annonces: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnnoncesScreen;
