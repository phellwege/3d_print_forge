import React, {useState} from 'react'
import Header from '../components/Header'
import {StlViewer} from "react-stl-viewer";

import {Card, Button} from 'react-bootstrap';
import BackButton from '../components/BackButton';
import './main.css';


import preview from '../static/UserAvatars/coffeeBro1.png'
import preview2 from '../static/UserAvatars/Dwarf.png'
import preview3 from '../static/UserAvatars/elf1.png'
import preview4 from '../static/UserAvatars/elf2.png'
import preview5 from '../static/UserAvatars/fox.png'

import deer1 from '../static/STL/deerlayleft.stl';
import deer2 from '../static/STL/deerlayright.stl';
import deer3 from '../static/STL/Laying_Remastered_2019.stl';

export default function Details() {
// this url as well as the other previews will be loaded via state from the server
    const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"
    const [currentlySelectedImg, setCurrentlySelectedImg] = useState(null)
    
    return (
        <>
        <Header />
        <BackButton />
            <div className='pageWrap'>
                <div className='secondaryPageWrapper'>
                    <Card className='detailsCard'>
                        <Card.Body>
                            <h3>Preview</h3>
                            <div className='cardInnerDiv'>
                                <StlViewer
                                    orbitControls
                                    shadows
                                    url={deer3}
                                    className='stlViewerComponent'
                                />
                                <h6>Image Preview</h6>
                                <div className='detailsImagePreview'>
                                    {/* onclick any of these will change the url state to be the selected one */}
                                    <img src={preview}/>
                                    <img src={preview2}/>
                                    <img src={preview3}/>
                                    <img src={preview4}/>
                                    <img src={preview5}/>
                                </div>
                            </div>
                            <div className='cartAndCheckoutButtonGroup'>
                                <Button>Add To Cart</Button> 
                                <Button>Buy Now</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}
