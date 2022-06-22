import {View, Text, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const CustomButton = ({
    title,
    secondary,
    primary,
    disabled,
    loading,
    danger,
    onPress,
}) => {
  const getBgColor = () => {
    if(disabled){
      return colors.grey
    }
    if(primary){
      return colors.primary
    }
    if(danger){
      return colors.danger
    }
    if(secondary){
      return colors.secondary
    }


  }
    
  return (
    <TouchableOpacity 
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}
      disabled={disabled}
      onPress={onPress}>
        {loading && (
          <View style={styles.loaderSection}>
          <ActivityIndicator color={"#000"}/>
        </View>
        )}
        <Text style={{color:disabled? 'black' : 'white', paddingLeft : loading ? 5 : 0}}>{loading ? "Please wait ..." : title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
