import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactsScreen from '../screens/ContactsScreen/ContactsScreen';
import ContactDetailsScreen from '../screens/ContactDetailsScreen/ContactDetailsScreen';
import CreateContactScreen from '../screens/CreateContact/CreateContactScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator  initialRouteName='Contact'>
      <HomeStack.Screen name="Contact" component={ContactsScreen} />
      <HomeStack.Screen name="Contact Details" component={ContactDetailsScreen} />
      <HomeStack.Screen name="Create Contact" component={CreateContactScreen} />
      <HomeStack.Screen name="Settings" component={SettingScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
