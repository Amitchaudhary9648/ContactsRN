import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Container from '../common/Container'
import Input from '../common/input'
import CustomButton from '../common/CustomButton'

const CreateContactComponent = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Input label="First name" placeholder="Enter your First name" />
        <Input label="Last name" placeholder="Enter your Last name" />
        <Input label="Phone Number" placeholder="Enter your Phone number" />
        <CustomButton primary title="Submit" />
      </Container>
    </View>
  )
}

export default CreateContactComponent