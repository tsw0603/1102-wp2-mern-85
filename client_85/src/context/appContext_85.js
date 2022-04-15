import React, { useReducer, useContext} from "react";

import reducer_85 from './reducer_85'

import { CLEAR_ALERT, DISPLAY_ALERT } from "./action_85";

const initialState = {
    isLoading: false,
    showAlert: false,
    alterText: '',
    alterType: '',
}

const AppContext_85 = React.createContext();

const AppProvider_85 = ( {children}) => {

    const [state, dispatch] = useReducer(reducer_85, initialState);

    const displayAlert = () => {
        dispatch( {type: DISPLAY_ALERT });
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout( ()=>{
            dispatch( {type: CLEAR_ALERT });
        }, 3000);
    }

    return (
        <AppContext_85.Provider value={ { ...state, displayAlert}}>
            {children}
        </AppContext_85.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext_85);
}

export { AppProvider_85, initialState, useAppContext}