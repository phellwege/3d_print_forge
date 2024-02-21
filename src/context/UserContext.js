import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';



// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper/modules";

// need logic to find these piece of information from db and return a section with each and put it into the swiper
import placeholder from '../static/UserAvatars/Ninja.png'
import placeholder2 from '../static/UserAvatars/Ninja2.png'
import placeholder3 from '../static/UserAvatars/Ninja3.png'
import placeholder4 from '../static/UserAvatars/samurai.png'
import placeholder5 from '../static/UserAvatars/spaceMan.png'

const UserContext = React.createContext()
export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    // user avatar selection stuff
    const userAvatarKeys = [
        'astro1', 'astro2', 'astro3', 'astro4', 'CatMan', 
        'Chimp', 'coffeeBro1', 'Dwarf', 'elf1', 'elf2', 
        'fox', 'Ninja', 'Ninja2', 'Ninja3', 'samurai', 
        'spaceMan', 'viking', 'werewolf', 'wizard1',
        'wizard2', 'wizard3', 'wolf', 'Zebra'
    ];
    const userAvatars = userAvatarKeys.map(key => require(`../static/UserAvatars/${key}.png`));
    const [defaultUserAvatar, setDefaultUserAvatar] = useState(userAvatars[0]);
    function setUserPic(picIndex) {
        setDefaultUserAvatar(userAvatars[picIndex]);
    }

    // has been reviewed?
    const [reviewed, setReviewed] = useState(false)
    const [rating, setRating] = useState(null)




    function UserSwiper(){
        return (
            <>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="UserSwiper"
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



    const value = {
        UserSwiper,

        reviewed, setReviewed,
        rating, setRating,


        defaultUserAvatar,
        userAvatars,
        setUserPic

    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}