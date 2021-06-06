import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/reducers/index";
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"

const isProduction = process.env.NODE_ENV === "production";

let store = null;
if(isProduction){
    const createStoreWithMiddleawere = applyMiddleware(thunk)(createStore);
    store = createStoreWithMiddleawere(rootReducer,{
        auth: { authentucated: localStorage.getItem("token_id")}
    })
}
else{
    const createStoreWithMiddleawere = applyMiddleware(thunk, createLogger())(createStore);
    store = createStoreWithMiddleawere(rootReducer,{
        auth: { authentucated: localStorage.getItem("token_id")}
    })
}

export default store;