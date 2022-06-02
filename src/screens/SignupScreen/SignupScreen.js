import {View, Text} from 'react-native';
import React, {useState} from 'react';
import SignupComponent from '../../components/Signup';
import env from '../../config/env';

const SignupScreen = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {BACKEND_URL} = env;
  console.log("Backend_URL", BACKEND_URL)
  console.log("__DEV__", __DEV__)
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
  };

  return (
    <SignupComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default SignupScreen;
