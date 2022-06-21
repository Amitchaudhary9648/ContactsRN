import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Message from '../common/Message';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import { CREATE_CONTACT } from '../../constants/routesName';

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={styles.message}>
        <Message info message="No Contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('Items', item);
    const {contactPicture, first_name, last_name, phone_number, country_code} = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.items}>
          {contactPicture ? (
            <Image source={{uri: contactPicture}} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={[styles.name, {color: colors.white}]}>{first_name[0]}</Text>
              <Text style={[styles.name, {color: colors.white}]}>{last_name[0]}</Text>
            </View>
          )}

          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}> {last_name}</Text>
            </View>

            <View>
              <Text style={styles.phoneNumber}>{` +${country_code} ${phone_number}`}</Text>
            </View>
          </View>
        </View>
        <Icon name="right" type="ant" size={21} color={colors.grey} />
      </TouchableOpacity>
    );
  };
  return (
    <>
    <View style={{backgroundColor: colors.white}}>
      <AppModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        title="My Profile!"
        modalFooter={<></>}
        modalBody={
          <View>
            <Text>Hello</Text>
          </View>
        }
      />
      {loading ? (
        <View style={styles.message}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <View style={{paddingVertical: 10}}>
          <FlatList
            data={data}
            ListEmptyComponent={ListEmptyComponent}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            ListFooterComponent={<View style={{height: 150}} />}
          />
        </View>
      )}
    </View>
    <TouchableOpacity 
      style={styles.floatingActionButton}
      onPress={() => {
        navigate(CREATE_CONTACT)
      }}>
      <Icon name="plus" type="ant" size={30} color={colors.white} />
    </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
