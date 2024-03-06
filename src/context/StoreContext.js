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
import { v4 as uuidv4 } from 'uuid';

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
    
    const initialState = {
        itemId: uuidv4(),
        files: [], 
        title: '',
        description: '',
        price: 0,
    };
    const [myStore, setMyStore] = useState({
        storeId: null,
        logo: null,
        shopName: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        about:'',
        printer: {
            hasPrinter: false,
            customPrints: false,
            slaPrinterInUseStatus: Array.from({ length: 5 }, () => false),
            fdmPrinterInUseStatus: Array.from({ length: 5 }, () => false),
            slaPrinter: 0,
            fdmPrinter: 0
        },
        listings: []
    });
    
    const [upload, setUpload] = useState(initialState)
    // add a function to accept or decline creating prints at the printing marketplace
    // add logic for todo when user accepts print
    // add logic for when user accepts custom print

    const [sla, setSla] = useState(null);
    const [fdm, setFdm] = useState(null);

    function generateOrderNumber() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const datePart = `${year}${month}${day}`;
        const randomPart = Math.floor(100000000000 + Math.random() * 900000000000);
        return `${datePart}-${randomPart}`;
    }

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
    const [todo, setTodo] = useState({
        checkBoxes : {
            orderChecked: false,
            confirmChecked: false,
            printedChecked: false,
            shippedChecked: false,
            paidChecked: false,
            reviewedChecked: false,
        },
        dates : {
            orderDate: null,
            confirmDate: null,
            printedDate: null,
            shippedDate: null,
            paidDate: null,
            reviewedDate: null,
        }
    })
    function handleCheckboxChange(name) {
        setTodo(prevTodo => ({
            ...prevTodo,
            checkBoxes: {
                ...prevTodo.checkBoxes,
                [name]: !prevTodo.checkBoxes[name]
            },
            dates: {
                ...prevTodo.dates,
                [`${name.replace('Checked', 'Date')}`]: !prevTodo.dates[`${name.replace('Checked', 'Date')}`] ? new Date().toLocaleDateString() : null
            }
        }));
    }


    const value = {
        generateOrderNumber,
        sla, setSla,
        fdm, setFdm,

        todo,
        handleCheckboxChange,

        Featured,
        ShopReviewsSwiper,

        upload, setUpload,
        initialState,
        myStore, setMyStore
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}