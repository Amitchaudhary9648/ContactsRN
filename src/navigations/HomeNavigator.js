import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactsScreen from '../screens/ContactsScreen/ContactsScreen';
import ContactDetailsScreen from '../screens/ContactDetailsScreen/ContactDetailsScreen';
import CreateContactScreen from '../screens/CreateContact/CreateContactScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import { CONTACT_DETAILS, CONTACT_LIST } from '../constants/routesName';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator  initialRouteName='Contact'>
      <HomeStack.Screen name={CONTACT_LIST} component={ContactsScreen} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetailsScreen} />
      <HomeStack.Screen name="Create Contact" component={CreateContactScreen} />
      <HomeStack.Screen name="Settings" component={SettingScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
