import { View, Text, SafeAreaView, Image, Alert } from 'react-native'
import React from 'react';
import Container from '../../components/common/Container';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { SETTINGS } from '../../constants/routesName';
import logoutUser from '../../context/actions/auth/logoutUser';
import { GlobalContext } from '../../context/Provider';
import Icon from '../../components/common/Icon';

const SideMenu = ({navigation}) => {
  const {authDispatch} = React.useContext(GlobalContext);
  const handleLogout = () => {
    navigation.toggleDrawer()
    Alert.alert("Logout!", 'Are you sure you want to logout?', [
      {
        text: 'Cancel', 
        onPress: () => {}
      }, 
      {
        text: 'OK', 
        onPress: () => {
          logoutUser()(authDispatch);
      }}
    ])
  }
    const menuItems = [
        {icon: <Icon type="feather"  name={'settings'} size={20}  />, name: "Settings", onPress: () => navigation.navigate(SETTINGS)},
        {icon: <Icon type="material-icon" name="logout" size={20} />, name: "Logout", onPress: () =>{handleLogout()}},
    ]
  return (
    <SafeAreaView>
      <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
              <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                    {icon}
                    <Text style={styles.itemText} >{name}</Text>
              </TouchableOpacity>
          ))}
      </View>

      </Container>
    </SafeAreaView>
  )
}

export default SideMenu