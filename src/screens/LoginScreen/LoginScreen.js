import {View, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import LoginComponent from '../../components/Login';
import { GlobalContext } from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';

const LoginScreen = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {authDispatch, authState: {error, loading},} = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      console.log("fsdaf")
      loginUser(form)(authDispatch)
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default LoginScreen;
