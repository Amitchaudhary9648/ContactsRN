import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS, CLEAR_AUTH_STATE } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor"

export const clearAuthState = () => (dispatch) =>  {
    dispatch({
        type: CLEAR_AUTH_STATE,
    })
}

export default ({
    email, 
    password,
    userName: username, 
    firstName : first_name, 
    lastName : last_name
}) => dispatch => (onSuccess) =>{
    dispatch({type: SIGNUP_LOADING})
    axiosInstance.post("auth/register", {
        email,
        password,
        username,
        first_name,
        last_name,
    }).then(res => {
        dispatch({
            type: SIGNUP_SUCCESS, 
            payload: res.data
        })
        onSuccess(res.data)

    }).catch( err => {
        console.log("Error from server",err.response.data)
        dispatch({
            type:SIGNUP_FAILURE,
            payload: err.response ? err.response.data : {error: "Something went wrong, try again"}
        })
        console.log(err);
    }
    )
}