import axios from "axios"; 

import { authConstants } from "../store/constants";

export default class LoginAuth {

    static logout(transitionTo = authConstants.ROOT_ROUTE) {
        this.clearUserInfo();
    }

    static setUserInfo(info){               
        localStorage.setItem(authConstants.PROFILE_KEY, JSON.stringify(info)); 
    }
    
    static getUserInfo(){
        var retrievedObject = localStorage.getItem(authConstants.PROFILE_KEY);        
        return retrievedObject ? retrievedObject:{};
    }
    
    static  clearUserInfo() {
        localStorage.removeItem(authConstants.PROFILE_KEY);       
    }

    static setTokenId(tokenId){
        localStorage.setItem(authConstants.ID_TOKEN_KEY, tokenId);
        axios.defaults.headers.common['Authorization'] = "JWT " + this.getIdToken();
        axios.defaults.headers.common['username'] = this.getUserIdInfo(); 
    }
    
    static getIdToken(){
        return localStorage.getItem(authConstants.ID_TOKEN_KEY);
    }
    
    static getUserIdInfo(){
        var retrievedObject =JSON.parse(localStorage.getItem(authConstants.PROFILE_KEY));
        var username = 0;
        if (retrievedObject) { 
            username = retrievedObject.username;
        }        
        return username;
    }
}