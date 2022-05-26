import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavigationContainer = () => {
    return(
        <NavigationContainer>
           {/* <AuthNavigator /> */}
           {/* <HomeNavigator /> */}
           <DrawerNavigator /> 
        </NavigationContainer>
    )
}

export default AppNavigationContainer