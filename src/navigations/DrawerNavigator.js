import React from 'react';
import {View, Button} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routesName';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/Provider';



const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = React.useContext(GlobalContext);
  return (
    
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }
      screenOptions={{
        headerShown: false
      }}
      >
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
