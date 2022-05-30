import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routesName';

const LoginComponent = () => {
    const {navigate} = useNavigation()
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContaxts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          <Input label="Username" placeholder="Enter username" />

          <Input
            label="Password"
            placeholder="Enter password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
          />

          <CustomButton title="Submit" primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={()=> {navigate(REGISTER)}}>
                <Text style={styles.linkBtn}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
