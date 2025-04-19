import {createContext, useReducer} from "react";
import {authReducer} from "@/reducer/AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: null
    } );


    return <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>

}