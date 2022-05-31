import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routesName';
import {loginScreenConstants} from '../../constants/strings';

const LoginComponent = () => {
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
        <View style={styles.form}>
          <Input
            label={loginScreenConstants.userName}
            placeholder={loginScreenConstants.userNamePlaceHolder}
          />

          <Input
            label={loginScreenConstants.password}
            placeholder={loginScreenConstants.passwordPlaceHolder}
            icon={
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Text>{passwordVisible ? loginScreenConstants.show : loginScreenConstants.hide}</Text>
                </TouchableOpacity>}
            iconPosition="right"
            secureTextEntry={passwordVisible}
          />

          <CustomButton title={loginScreenConstants.login} primary />
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
