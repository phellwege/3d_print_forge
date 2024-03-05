import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { useUser } from './UserContext';

const PrintsContext = React.createContext()
export function usePrints(){
    return useContext(PrintsContext)
}

export function PrintsProvider({ children }) {

    const {
        user
    } = useUser();

const [prints, setPrints] = useState({
    printId: null,
    customerId: `${user.id}`,
    acceptOrDecline: null,
    orderNumber: null,
    files: null,
    printType: null,
    datePrintOrdered: null,
    printPrice: 0,
    address: {
        street: `${user.address.street}`,
        city: `${user.address.city}`,
        state: `${user.address.state}`,
        zip: `${user.address.zip}`,
    },
    printNotes: '',
    customerContact: '',
});

const value = {
    prints, setPrints
}

return (
    <PrintsContext.Provider value={value}>
        {children}
    </PrintsContext.Provider>
)
}