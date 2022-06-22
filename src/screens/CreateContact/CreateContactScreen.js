import { View, Text } from 'react-native'
import React, {useState, useContext, useRef} from 'react'
import CreateContactComponent from '../../components/CreateContact'
import createContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import contactsState from '../../context/initialStates/contactsState';
import { useNavigation } from '@react-navigation/native';
import { CONTACT_LIST } from '../../constants/routesName';

const CreateContactScreen = () => {
  const [form, setForm] = useState({});
  const {
    contactsDispatch,
    contactsState: {createContact: {loading, error, data}},
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);

  const {navigate} = useNavigation()

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  }

  const [localFile, setLocalFile] = useState(null)

  const onSubmit = () => {
    console.log("Form data",form);
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST)
    })
  }

  const closeSheet = () => {
    if(sheetRef.current){
      sheetRef.current.close()
    }
  }

  const openSheet = () => {
    if(sheetRef.current){
      sheetRef.current.open()
      console.log("CLicked")
    }
  }

  const toggleValueChange = () => {
    setForm({...form, "isFavorite": !form.isFavorite})
  }

  const onFileSelected = (image) => {
    closeSheet();
    setLocalFile(image)
    console.log("images", image)
  }
  return (
    <CreateContactComponent 
      onChangeText={onChangeText} 
      form={form} 
      setForm={setForm} 
      onSubmit={onSubmit}
      loading={loading} 
      error={error} 
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
      />
  )
}

export default CreateContactScreen