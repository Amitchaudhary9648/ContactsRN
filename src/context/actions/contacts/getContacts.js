import { GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE } from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";
export default () => (dispatch) => {
    dispatch({
        type: GET_CONTACTS_LOADING,
    })
    axios
    .get('/contacts/')
    .then(res => {
        console.log("res", res.data)
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => {
        console.log("error",err)
        dispatch({
            type: GET_CONTACTS_FAILURE,
            payload: err.response ? 
                err.response.data : 
                { error: "Something went wrong, try again" },
    })
    })
}