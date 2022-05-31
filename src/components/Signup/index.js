import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routesName';
import { signupScreenConstants } from '../../constants/strings';

const SignupComponent = ({onSubmit,
onChange,
form,
errors}) => {
  const {navigate} = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>{signupScreenConstants.title}</Text>
        <Text style={styles.subTitle}>{signupScreenConstants.subTitle}</Text>
        <View style={styles.form}>
        <Input 
            label={signupScreenConstants.userName} 
            placeholder={signupScreenConstants.userNamePlaceHolder}
            onChangeText={(value) => {
              onChange({name: 'userName', value})
            }}
            error={errors.userName} />
          <Input 
            label={signupScreenConstants.firstName}
            placeholder={signupScreenConstants.firstName}
            onChangeText={(value) => {
              onChange({name: 'firstName', value})
            }}
            error={errors.firstName} />

          <Input 
            label={signupScreenConstants.lastName}
            placeholder={signupScreenConstants.lastName}
            error={errors.lastName}
            onChangeText={(value) => {
              onChange({name: 'lastName', value})
            }}  />

          <Input 
            label={signupScreenConstants.email}
            placeholder={signupScreenConstants.emailPlaceHolder}
            error={errors.email}
            onChangeText={(value) => {
              onChange({name: 'email', value})
            }}  
          />

          <Input
            label={signupScreenConstants.password}
            placeholder={signupScreenConstants.passwordPlaceHolder}
            icon={
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Text>{passwordVisible ? signupScreenConstants.show: signupScreenConstants.hide}</Text>
              </TouchableOpacity>}
            iconPosition="right"
            secureTextEntry={passwordVisible}
            error={errors.password}
            onChangeText={(value) => {
              onChange({name: 'password', value})
            }} 
          />
          <Input
            label={signupScreenConstants.confirmPassword}
            placeholder={signupScreenConstants.confirmPasswordPlaceHolder}
            icon={
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <Text>{confirmPasswordVisible ? signupScreenConstants.show: signupScreenConstants.hide}</Text>
              </TouchableOpacity>}
            iconPosition="right"
            secureTextEntry={confirmPasswordVisible}
            error={errors.confirmPassword} 
            onChangeText={(value) => {
              onChange({name: 'confirmPassword', value})
            }}
          />

          <CustomButton onPress={onSubmit} title={signupScreenConstants.signUp} primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>{signupScreenConstants.alreadyHaveAccount}</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>{signupScreenConstants.login}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignupComponent;
