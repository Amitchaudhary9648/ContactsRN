import {View, Text, Image, Switch} from 'react-native';
import React from 'react';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateContactComponent = ({
  error,
  loading,
  onChangeText,
  form,
  setForm,
  onSubmit,
  toggleValueChange,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.imageContainer}>
          <Image source={{uri: localFile?.path || DEFAULT_IMAGE_URI}} style={styles.imageView} />
          <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
          </TouchableOpacity>
        </View>
        <Input
          label="First name"
          placeholder="Enter your First name"
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          error={error?.first_name?.[0]}
        />
        
        <Input
          label="Last name"
          placeholder="Enter your Last name"
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, countryCode: cCode, phoneCode: phoneCode});
              }}
            />
          }
          iconPosition="left"
          style={{paddingLeft: 10}}
          label="Phone Number"
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value});
          }}
          error={error?.phone_number?.[0]}
          placeholder="Enter your Phone number"
        />
        <View style={styles.switch}>
          <Text style={styles.favoriteText}>Add to favourites</Text>
          <Switch
            trackColor={{false: '#767577', true: colors.primary}}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>

      <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </View>
  );
};

export default CreateContactComponent;
