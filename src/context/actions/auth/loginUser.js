import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, CLEAR_AUTH_STATE } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance"

export default ({
    email, 
    password,
    userName: username, 
    firstName : first_name, 
    lastName : last_name
}) => dispatch =>{
    dispatch({type: LOGIN_LOADING})
    axiosInstance.post("auth/login", {
        username,
        password,
    }).then(res => {
        console.log(res.data)
        AsyncStorage.setItem('token', res.data.token)
        AsyncStorage.setItem('user', JSON.stringify(res.data.user))
        dispatch({
            type: LOGIN_SUCCESS, 
            payload: res.data
        })

    }).catch( err => {
        console.log("Error from server",err.response.data)
        dispatch({
            type:LOGIN_FAILURE,
            payload: err.response ? err.response.data : {error: "Something went wrong, try again"}
        })
        console.log(err);
    }
    )
}