import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Login from '../../Screens/Login';
import Districtscreen from '../../Screens/Districtscreen';
import DirectoryScreen from '../../Screens/DirectoryScreen';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="districtscreen" component={Districtscreen} /> */}
      <Stack.Screen name="directoryscreen" component={DirectoryScreen} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
