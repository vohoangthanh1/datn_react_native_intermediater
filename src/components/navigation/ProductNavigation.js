import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Product from '../../Screens/Product';
import DescriptionProduct from '../../Screens/DescriptionProduct';

const Stack = createNativeStackNavigator();

const ProductNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="descriptionProduct" component={DescriptionProduct} />
            <Stack.Screen name="product" component={Product} />
        </Stack.Navigator>
    )
}

export default ProductNavigation