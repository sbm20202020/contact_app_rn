/* eslint-disable react-native/no-inline-styles */
// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <Text>It okay</Text>
    // <Tab.Navigator
    //   tabBarOptions={{
    //     showIcon: true,
    //     showLabel: false,
    //   }}>
    //   <Tab.Screen
    //     name="Personnes"
    //     component={Personnes}
    //     options={{
    //       tabBarLabel: '',
    //       // tabBarIcon: ({tintColor}) => (
    //       //   // <Ionicons
    //       //   //   testID="facebook"
    //       //   //   name="home"
    //       //   //   color="red"
    //       //   //   size={24}
    //       //   //   style={{backgroundColor: 'transparent'}}
    //       //   // />
    //       // ),
    //     }}
    //   />
    //   <Tab.Screen name="Annonces" component={Annonces} />
    // </Tab.Navigator>
  );
};

export default HomeScreen;
