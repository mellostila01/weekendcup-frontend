import {userConstants} from '../constants';

const INITIAL_STATE = {
    loggedIn:''
}

const rootReducer = function( state = INITIAL_STATE, action ){
    switch(action.type){
        case userConstants.LOGIN_SUCCESS:
            return{ ...state, loggedIn:true , user: action.payload , status: action.status };
        case userConstants.LOGIN_FAILURE:
            return{ ...state, loggedIn:false , user: action.payload , status: action.status };
        default:
            return state;
    }
}

export default rootReducer;