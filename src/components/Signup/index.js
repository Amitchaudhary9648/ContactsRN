import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routesName';
import {signupScreenConstants} from '../../constants/strings';
import Message from '../common/Message';

const SignupComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  loading,
  error,
}) => {
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
          {error?.error && (
            <Message
              retry 
              danger
              retryFn={() => {
                console.log("Retry")
              }} 
              message={error.error}
            />
          )}
          <Input
            label={signupScreenConstants.userName}
            placeholder={signupScreenConstants.userNamePlaceHolder}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label={signupScreenConstants.firstName}
            placeholder={signupScreenConstants.firstName}
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label={signupScreenConstants.lastName}
            placeholder={signupScreenConstants.lastName}
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />

          <Input
            label={signupScreenConstants.email}
            autoCapitalize="none"
            placeholder={signupScreenConstants.emailPlaceHolder}
            error={errors.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            
          />

          <Input
            label={signupScreenConstants.password}
            placeholder={signupScreenConstants.passwordPlaceHolder}
            icon={
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Text>
                  {passwordVisible
                    ? signupScreenConstants.show
                    : signupScreenConstants.hide}
                </Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={passwordVisible}
            error={errors.password || error?.password?.[0]}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <Input
            label={signupScreenConstants.confirmPassword}
            placeholder={signupScreenConstants.confirmPasswordPlaceHolder}
            icon={
              <TouchableOpacity
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }>
                <Text>
                  {confirmPasswordVisible
                    ? signupScreenConstants.show
                    : signupScreenConstants.hide}
                </Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={confirmPasswordVisible}
            error={errors.confirmPassword}
            onChangeText={value => {
              onChange({name: 'confirmPassword', value});
            }}
          />
          {console.log("error in signup", error?.error)}
          <CustomButton
            onPress={onSubmit}
            title={signupScreenConstants.signUp}
            primary
            loading={loading}
            disabled={loading }
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>
              {signupScreenConstants.alreadyHaveAccount}
            </Text>
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
