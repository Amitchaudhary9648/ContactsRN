import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {GlobalContext} from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavigationContainer = () => {
    
  const {authState: {isLoggedIn},} = useContext(GlobalContext);
  console.log('State->', isLoggedIn);
  return (
    <NavigationContainer>
      <AuthNavigator /> 
      {/* <HomeNavigator /> */}
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
