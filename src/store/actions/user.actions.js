import axios from "axios";

import { userConstants } from "../constants";
import config from "../../config";

const API_URL = config.api.url

export const login = state => async dispatch => {
    try {
        const response = await axios.post(`${API_URL}/user/add`, {
            username: state.username,
            password: state.password,
            email: state.password.toLowerCase()
        }).then(response => {
            console.log("Login api:", response)
            if (response.result === "Success") {
                dispatch({
                    type: userConstants.LOGIN_SUCCESS,
                    payload: response.data.token,
                    status: response.data.status
                });
                return { result: true, login: true }
            }
            else {
                dispatch({
                    type: userConstants.LOGIN_FAILURE,
                    payload: "alert_login_error",
                    status: response.data.status
                })
                return { result: false }
            }
        }).catch(error =>{
            dispatch({
                type: userConstants.LOGIN_FAILURE,
                payload: "alert_login_error",
                status: "400"
            })
            return { result: false }
        })
        return response;
    }
    catch(e){
        
        dispatch({
            type: userConstants.LOGIN_FAILURE,
            payload: "alert_login_error",
            status: "400"
        })
        return { result: false }
    }
}