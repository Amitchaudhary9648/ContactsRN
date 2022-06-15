import {View, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import LoginComponent from '../../components/Login';
import { GlobalContext } from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';
import { useRoute } from '@react-navigation/native';

const LoginScreen = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  React.useEffect(()=>{
    if(params?.data){
      setJustSignedUp(true)
      setForm({...form, userName: params.data.username});
    }
  },[params])

  const {authDispatch, authState: {error, loading},} = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      console.log("fsdaf")
      loginUser(form)(authDispatch)
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false)
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default LoginScreen;
