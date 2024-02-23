// Shop Entity
// OWNER_ID, 

// ADDRESS, 
// - Address will be used for shipping calculations as well as cost
// ABOUT MY SHOP,
// SHOPLOGO, -- use NSFWJS to see if they're dirty (if they are throw error and do not allow upload)
// STL FILES FOR SALE,
// SERVICES OFFERED, 
// SCHEDULE, 
// TODOs --- these are now contexts but not serverside yet, 
// SALES HISTORY, 
// COMPLETED PRINTS IF ANY, 
// REVIEWS

// if user has storefront already then direct to storefront page, if not then direct to createStore page

import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper/modules";
// need logic to find these piece of information from db and return a section with each and put it into the swiper
import placeholder from '../static/UserAvatars/astro1.png'
import placeholder2 from '../static/UserAvatars/astro2.png'
import placeholder3 from '../static/UserAvatars/astro3.png'
import placeholder4 from '../static/UserAvatars/astro4.png'
import placeholder5 from '../static/UserAvatars/Chimp.png'


const StoreContext = React.createContext()

export function useStore(){
    return useContext(StoreContext)
}

export function StoreProvider({ children }) {

    // add a function to accept or decline creating prints at the printing marketplace
    // add logic for todo when user accepts print
    // add logic for when user accepts custom print
    // add shop creation logic
    const [printerInUse, setPrinterInUse] = useState(null);
    const [hasPrinter, setHasPrinter] = useState(false);
    const [customPrints, setCustomPrints] = useState(null);
    // these will be a count of how many printers maxing out at 5
    const [slaPrinter, setSlaPrinter] = useState(null);
    const [fdmPrinter, setFdmPrinter] = useState(null);

    const [sla, setSla] = useState(null);
    const [fdm, setFdm] = useState(null);

    // feature for homepage swiper. 
    function Featured(){
        return (
            <>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="featuredSwiper"
                >
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <h4>Most Purchased Item</h4>
                            <img src={placeholder} alt='Most Purchased Item 1st'/>
                            <br/>
                            <sub>1st Place</sub>
                            <br/>
                            <br/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <h4>Most Purchased Item</h4>
                            <img src={placeholder2} alt='Most Purchased Item 2nd'/>
                            <br/>
                            <sub>2nd Place</sub>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <h4>Most Purchased Item</h4>
                            <img src={placeholder3} alt='Most Purchased Item 3rd'/>
                            <br/>
                            <sub>3rd Place</sub>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <h4>Recently Added</h4>
                            <img src={placeholder4} alt='Recently Added'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <h4>Sponsered Shop</h4>
                            <img src={placeholder5} alt='Sponsered Shop'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }

    function ShopReviewsSwiper(){
        return (
            <>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="ShopReviewsSwiper"
                >
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <img src={placeholder} alt='Most Purchased Item 1st'/>
                            <br/>
                            <br/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <img src={placeholder2} alt='Most Purchased Item 2nd'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <img src={placeholder3} alt='Most Purchased Item 3rd'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <img src={placeholder4} alt='Recently Added'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperSlideDiv'>
                            <img src={placeholder5} alt='Sponsered Shop'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }

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
        hasPrinter, setHasPrinter,
        customPrints, setCustomPrints,
        printerInUse, setPrinterInUse,
        slaPrinter, setSlaPrinter,
        fdmPrinter, setFdmPrinter,

        sla, setSla,
        fdm, setFdm,

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

        Featured,
        ShopReviewsSwiper,

    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}