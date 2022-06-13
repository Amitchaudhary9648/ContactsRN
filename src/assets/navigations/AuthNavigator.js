import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import { LOGIN, REGISTER } from '../constants/routesName';


const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER} component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
