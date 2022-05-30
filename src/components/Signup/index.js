import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routesName';

const SignupComponent = ({onSubmit,
onChange,
form,
errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContaxts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
        <Input 
            label="Username" 
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({name: 'userName', value})
            }}
            error={errors.userName} />
          <Input 
            label="First Name" 
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({name: 'firstName', value})
            }}
            error={errors.firstName} />

          <Input 
            label="Last Name" 
            placeholder="Enter Last name"
            error={errors.lastName}
            onChangeText={(value) => {
              onChange({name: 'lastName', value})
            }}  />

          <Input 
            label="Email" 
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={(value) => {
              onChange({name: 'email', value})
            }}  
          />

          <Input
            label="Password"
            placeholder="Enter password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
            error={errors.password}
            onChangeText={(value) => {
              onChange({name: 'password', value})
            }} 
          />
          <Input
            label="Confirm Password"
            placeholder="Enter password again"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
            error={errors.confirmPassword} 
            onChangeText={(value) => {
              onChange({name: 'confirmPassword', value})
            }}
          />

          <CustomButton onPress={onSubmit} title="Submit" primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignupComponent;
