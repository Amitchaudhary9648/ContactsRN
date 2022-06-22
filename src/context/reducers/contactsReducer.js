import { act } from "react-test-renderer";
import { 
    CREATE_CONTACT_FAILURE,
    CREATE_CONTACT_LOADING,
    CREATE_CONTACT_SUCCESS,
    GET_CONTACTS_FAILURE, 
    GET_CONTACTS_LOADING, 
    GET_CONTACTS_SUCCESS,
    
} from "../../constants/actionTypes";

const contactsReducer = (state, action) => {
    switch (action.type) {
        case CREATE_CONTACT_LOADING:
            return {
                ...state,
                createContact:{
                    ...state.createContact,
                    loading: true,
                    error: null
                }
            };
        case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                createContact:{
                    ...state.createContact,
                    loading: false,
                    error: null,
                    data: action.payload
                },
                getContacts:{
                    ...state.getContacts,
                    loading: false,
                    data: [action.payload, ...state.getContacts.data],
                    error: null
                }
            };
        case CREATE_CONTACT_FAILURE:
            return {
                ...state,
                createContact:{
                ...state.createContact,
                loading: false,
                error: action.payload,    
                }
                };
        case GET_CONTACTS_LOADING:
            return {
                ...state,
                getContacts:{
                    ...state.getContacts,
                    loading: true,
                    error: null
                }
            };
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                getContacts:{
                    ...state.getContacts,
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
            case GET_CONTACTS_FAILURE:
                return {
                    ...state,
                    getContacts:{
                        ...state.getContacts,
                        loading: false,
                        error: action.payload,
                    }
                }
        default :
            return state;
    }
}

export default contactsReducer;