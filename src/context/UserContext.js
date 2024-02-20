import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = React.createContext()
export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({ children }) {


    const value = {
        
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}