/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.setting}>
      <Text>Reglages !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
