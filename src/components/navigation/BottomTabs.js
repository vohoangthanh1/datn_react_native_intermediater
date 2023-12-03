import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ProductNavigation from './ProductNavigation';
import Home from '../../Screens/Home';


const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Product" component={ProductNavigation} />
        </Tab.Navigator>
    );
}

export default BottomTabs