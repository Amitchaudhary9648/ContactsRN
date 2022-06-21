import { 
    GET_CONTACTS_FAILURE, 
    GET_CONTACTS_LOADING, 
    GET_CONTACTS_SUCCESS,
    
} from "../../constants/actionTypes";

const contactsReducer = (state, action) => {
    switch (action.type) {
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