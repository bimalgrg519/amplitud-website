import React, {createContext, useContext, useState} from "react";



const MainContext = createContext();


export const StateContext = ({children}) => {
    
    //state
    const [showErrorMessage, setShowErrorMessage] = useState(true);

    
    return(
        <MainContext.Provider value={{
            showErrorMessage,
            setShowErrorMessage, 
        }}>
            {children}
        </MainContext.Provider>

    )
}

export const useStateContext = () => useContext(MainContext);

export default MainContext;