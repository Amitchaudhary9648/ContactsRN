import {View, Text} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import SignupComponent from '../../components/Signup';
import envs from '../../config/env';
import axios from '../../helpers/axiosInterceptor';
import signup, {clearAuthState} from '../../context/actions/auth/signup';
import { GlobalContext } from '../../context/Provider';
import {useNavigation} from '@react-navigation/native';
import { LOGIN } from '../../constants/routesName';
import authState from '../../context/initialStates/authState';

const SignupScreen = () => {
  const {navigate} = useNavigation(); 
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {authDispatch, authState: {error, loading, data},} = useContext(GlobalContext);
  const {DEV_BACKEND_URL} = envs;
  

  useEffect(() => {
    axios.get('/contacts').catch((err) => {
      console.log("Err", err);
    })
  }, [])

  

  useFocusEffect(
    React.useCallback(() => {
      return( () => {
        if(data || error){
          clearAuthState()(authDispatch)
        }
      })
    }, [data, error])
  )
  
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'The password should be min 6 character'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      }
      if(name === "confirmPassword"){
        if(value !== form['password']){
          setErrors(prev => {
            return {...prev, [name]: 'Please enter the same password'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      }
       else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This Field is required'};
      });
    }
  };

  const onSubmit = () => {
    //Validation
    console.log('form :>>', form);
    console.log('error :>>', errors);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a userName'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last Name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add an email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
    if (!form.confirmPassword) {
      setErrors(prev => {
        return {...prev, confirmPassword: 'Please confirm the password'};
      });
    }

    if(
      Object.values(form).length === 6 &&
      Object.values(form).every(item => item.trim().length > 0) && 
      Object.values(errors).every(item => !item)
      ){
        console.log('1111',  1111);
        signup(form)(authDispatch)((response)=>{
          navigate(LOGIN, {data: response})
        })
    }
  };

  return (
    <SignupComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default SignupScreen;
