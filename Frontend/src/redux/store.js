import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";

const Mymiddleware=(store)=>(next)=>(action)=>{
    console.log("store: ",store)
    console.log("next: ",next)
    console.log("action: ",action)
    if(typeof action==="function"){
        return action(next)
    }

    return next(action)
}

export const store=legacy_createStore(reducer,applyMiddleware(Mymiddleware))