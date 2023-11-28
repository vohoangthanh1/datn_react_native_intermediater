import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Product from '../../Screens/Product';

const Stack = createNativeStackNavigator();

const ProductNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="login" component={Product} /> */}
            <Stack.Screen name="home" component={Product} />
        </Stack.Navigator>
    )
}

export default ProductNavigation