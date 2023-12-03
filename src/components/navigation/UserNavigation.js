import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Login from '../../Screens/Login';
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default UserNavigation