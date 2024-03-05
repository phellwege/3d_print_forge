import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PrintsContext = React.createContext()


export function usePrints(){
    return useContext(PrintsContext)
}

export function PrintsProvider({ children }) {

const [prints, setPrints] = useState({
    printId: null,
    customerId: null,
    accept: null,
    files: null,
    printType: null,
    datePrintOrdered: null,
    printPrice: 0,
    address: {
        street: '',
        city: '',
        state: '',
        zip: '',
    },
    notes: '',
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