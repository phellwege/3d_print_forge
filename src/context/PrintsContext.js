import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const PrintsContext = React.createContext()
export function usePrints(){
    return useContext(PrintsContext)
}

export function PrintsProvider({ children }) {
    const {
        user
    } = useUser();
    const [orderNumber, setOrderNumber] = useState(null);
    // this is the initial state of this object
    const [prints, setPrints] = useState({
        printId: null,
        customerId: `${user.id}`,
        storeId: null,
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

    function generateOrderNumber() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const datePart = `${year}${month}${day}`;
        const randomPart = Math.floor(100000000000 + Math.random() * 900000000000);
        const orderNumber = `${datePart}-${randomPart}`
        setOrderNumber(orderNumber)
    }

const value = {
    prints, setPrints,
    generateOrderNumber,
    orderNumber
}

return (
    <PrintsContext.Provider value={value}>
        {children}
    </PrintsContext.Provider>
)
}