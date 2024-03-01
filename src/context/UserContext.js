import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper/modules";
import { StlViewer } from "react-stl-viewer";

// need logic to find these piece of information from db and return a section with each and put it into the swiper
import deer1 from '../static/STL/deerlayleft.stl';
import deer2 from '../static/STL/deerlayright.stl';
import deer3 from '../static/STL/Laying_Remastered_2019.stl';
import aqui from '../static/STL/aquila_trayscape.stl';


const UserContext = React.createContext()


export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    // thumbnails dynamic from selection
    const [thumbnailImages, setThumbnailImages] = useState([deer1, deer2, deer3, aqui]);

    // user avatar selection stuff
    const userAvatarKeys = [
        'astro1', 'astro2', 'astro3', 'astro4', 'CatMan', 
        'Chimp', 'coffeeBro1', 'Dwarf', 'elf1', 'elf2', 
        'fox', 'Ninja', 'Ninja2', 'Ninja3', 'samurai', 
        'spaceMan', 'viking', 'werewolf', 'wizard1',
        'wizard2', 'wizard3', 'wolf', 'Zebra'
    ];
    const userAvatars = userAvatarKeys.map(key => require(`../static/UserAvatars/${key}.png`));
    // user object
    const [user, setUser] = useState({
        userName: 'username',
        bio: '',
        defaultUserAvatar: userAvatars[0],
        storeOwnership: false,
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        reviews: {
            rating: null,
            reviewDescription: '',
            reviewed: false
        },
    });

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
                    {thumbnailImages.map((thumbnail, index) => (
                        <SwiperSlide>
                            <div className='swiperSlideDiv'>
                                <StlViewer
                                    key={index}
                                    url={thumbnail}
                                    className='thumbnailStlViewer'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        )
    }



    const value = {
        user, setUser,
        userAvatars,
        UserSwiper,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}