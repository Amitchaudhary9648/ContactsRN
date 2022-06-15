import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routesName';
import {loginScreenConstants} from '../../constants/strings';
import Message from '../common/Message';

const LoginComponent = ({
  error,
  form,
  justSignedUp,
  onChange,
  onSubmit,
  loading,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>{loginScreenConstants.title}</Text>
        <Text style={styles.subTitle}>{loginScreenConstants.subTitle}</Text>
        {error && !error.error && (
          <Message onDismiss={() => {}} danger message="invalid" />
        )}
        <View style={styles.form}>
          {justSignedUp && (
            <Message success  onDismiss={() => {}} message="Account Created Successfully" />
          )}
          {error?.error && (
            <Message retry danger onDismiss message={error.error} />
          )}
          <Input
            label={loginScreenConstants.userName}
            value={form.userName || null}
            placeholder={loginScreenConstants.userNamePlaceHolder}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label={loginScreenConstants.password}
            placeholder={loginScreenConstants.passwordPlaceHolder}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            icon={
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Text>
                  {passwordVisible
                    ? loginScreenConstants.show
                    : loginScreenConstants.hide}
                </Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={passwordVisible}
          />

          <CustomButton
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
            title={loginScreenConstants.login}
            primary
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>
              {loginScreenConstants.needNewAccount}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>{loginScreenConstants.signUp}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
