import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../../common/Icon';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import ImagePickerCropper from 'react-native-image-crop-picker'

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
    const options = [
        {
          name: "Take from camera", 
          icon: <Icon type="AntDesign" name="camera" color={colors.grey} size={20}/>, 
          onPress:() => {
            ImagePickerCropper.openCamera({
              width: 300,
              height: 300,
              cropping: true,
              freeStyleCropEnabled: true,
            }).then((images) => {
              onFileSelected(images)
            }).catch(error => {
              console.log("Error Image", error)
            })
          }
        },
        {
          name: "Choose from Gallery", 
          icon: <Icon type="Entypo" name="image" color={colors.grey} size={20}/>, 
          onPress:() => {
            ImagePickerCropper.openPicker({
              width: 300,
              height: 300,
              cropping: true,
              freeStyleCropEnabled: true,
            }).then((images) => {
              onFileSelected(images)
            }).catch(error => {
              console.log("Error Image", error)
            })
          }
        },

    ] 
  return (
    <RBSheet
      ref={ref}
      height={200}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20
        },
      }}>
        <View style={styles.wrapper}>
        {options.map(({name, onPress,icon}) => (
            <TouchableOpacity 
              style={styles.pickerOption} 
              key={name}
              onPress={onPress}>
               {icon}
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        ))}
        </View>
    
    </RBSheet>
  );
});

export default ImagePicker;
