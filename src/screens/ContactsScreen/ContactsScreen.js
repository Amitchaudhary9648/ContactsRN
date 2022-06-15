import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import Container from '../../components/common/Container'
import { useNavigation } from '@react-navigation/native'
import logoutUser from '../../context/actions/auth/logoutUser'
import { GlobalContext } from '../../context/Provider'



const ContactsScreen = () => {
  const {authDispatch} = React.useContext(GlobalContext);
  const {setOptions, toggleDrawer} = useNavigation()
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity 
          onPress={() => {
            toggleDrawer()
            logoutUser()(authDispatch);
          }}>
          <Text>NAV</Text>
        </TouchableOpacity>
      )
    })
  }, [])
  return (
    <Container>
      <Text>ContactsScreens</Text>
    </Container>
  )
}

export default ContactsScreen