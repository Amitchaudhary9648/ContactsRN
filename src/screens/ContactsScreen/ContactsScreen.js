import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import Container from '../../components/common/Container'
import { useNavigation } from '@react-navigation/native'



const ContactsScreen = () => {
  const {setOptions, toggleDrawer} = useNavigation()
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity 
          onPress={() => {
            toggleDrawer()
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