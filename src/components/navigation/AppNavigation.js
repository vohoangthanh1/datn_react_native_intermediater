import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../users/UserContext';
import React from 'react'
import ProductNavigation from './ProductNavigation';
import UserNavigation from './UserNavigation';

const AppNavigation = () => {
    const { user } = UserContext(UserContext);
    return (
        <NavigationContainer>
            {user ? <ProductNavigation /> : <UserNavigation />}
        </NavigationContainer>
    )
}

export default AppNavigation