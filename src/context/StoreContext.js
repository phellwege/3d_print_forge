// Shop Entity
// OWNER_ID, 

// ADDRESS, 
// - Address will be used for shipping calculations as well as cost
// ABOUT MY SHOP,
// SHOPLOGO, -- use NSFWJS to see if they're dirty (if they are throw error and do not allow upload)
// STL FILES FOR SALE,
// SERVICES OFFERED, 
// SCHEDULE, 
// TODOs, 
// SALES HISTORY, 
// COMPLETED PRINTS IF ANY, 
// REVIEWS

// if user has storefront already then direct to storefront page, if not then direct to createStore page

import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const StoreContext = React.createContext()
export function useStore(){
    return useContext(StoreContext)
}

export function StoreProvider({ children }) {


  // state management for check boxes so they can be individually checked 
    const [orderChecked, setOrderChecked] = useState(false);
    const [confirmChecked, setConfirmChecked] = useState(false);
    const [printedChecked, setPrintedChecked] = useState(false);
    const [shippedChecked, setShippedChecked] = useState(false);
    const [paidChecked, setPaidChecked] = useState(false);
    const [reviewedChecked, setReviewedChecked] = useState(false);

  // manage dates for checkboxes
    const [orderDate, setOrderDate] = useState(null);
    const [confirmDate, setConfirmDate] = useState(null);
    const [printedDate, setPrintedDate] = useState(null);
    const [shippedDate, setShippedDate] = useState(null);
    const [paidDate, setPaidDate] = useState(null);
    const [reviewedDate, setReviewedDate] = useState(null);

// functions for managing change of icons
    function handleOrderChecked() {
        setOrderChecked(!orderChecked)
        if (!orderChecked) {
        setOrderDate(new Date().toLocaleDateString());
        } else {
        setOrderDate(null);
        }
    }
    function handleConfirmChecked() {
        setConfirmChecked(!confirmChecked)
        if (!confirmChecked) {
        setConfirmDate(new Date().toLocaleDateString());
        } else {
        setConfirmDate(null);
        }
    }
    function handlePrintedChecked() {
        setPrintedChecked(!printedChecked)
        if (!printedChecked) {
        setPrintedDate(new Date().toLocaleDateString());
        } else {
        setPrintedDate(null);
        }
    }
    function handleShippedChecked() {
        setShippedChecked(!shippedChecked)
        if (!shippedChecked) {
        setShippedDate(new Date().toLocaleDateString());
        } else {
        setShippedDate(null);
        }
    }
    function handlePaidChecked() {
        setPaidChecked(!paidChecked)
        if (!paidChecked) {
        setPaidDate(new Date().toLocaleDateString());
        } else {
        setPaidDate(null);
        }
    }
    function handleReviewedChecked() {
        setReviewedChecked(!reviewedChecked)
        if (!reviewedChecked) {
        setReviewedDate(new Date().toLocaleDateString());
        } else {
        setReviewedDate(null);
        }
    }


    const value = {
        orderChecked, setOrderChecked,
        confirmChecked, setConfirmChecked,
        printedChecked, setPrintedChecked,
        shippedChecked, setShippedChecked,
        paidChecked, setPaidChecked,
        reviewedChecked, setReviewedChecked,

        orderDate, setOrderDate,
        confirmDate, setConfirmDate,
        printedDate, setPrintedDate,
        shippedDate, setShippedDate,
        paidDate, setPaidDate,
        reviewedDate, setReviewedDate,

        handleOrderChecked,
        handleConfirmChecked,
        handlePrintedChecked,
        handleShippedChecked,
        handlePaidChecked,
        handleReviewedChecked,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}