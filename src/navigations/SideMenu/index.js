import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react';
import Container from '../../components/common/Container';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { SETTINGS } from '../../constants/routesName';

const SideMenu = ({navigation}) => {
    const menuItems = [
        {icon: <Text>T</Text>, name: "Settings", onPress: () => navigation.navigate(SETTINGS)},
        {icon: <Text>T</Text>, name: "Logout", onPress: () =>{}},
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
              <TouchableOpacity onPress={onPress} key={name}>
                    {icon}
                    <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
          ))}
      </View>

      </Container>
    </SafeAreaView>
  )
}

export default SideMenu