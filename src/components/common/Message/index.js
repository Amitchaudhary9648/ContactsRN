import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const Message = ({
  message,
  primary,
  info,
  success,
  danger,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [userDismiss, setUserDismiss] = useState(false);
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };

  return (
    <>
      {userDismiss ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white'}}>{message}</Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: 'white'}}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismiss(true);
                  onDismiss();
                }}>
                <Text style={{color: 'white'}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
