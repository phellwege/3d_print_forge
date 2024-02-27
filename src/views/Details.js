import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { StlViewer } from "react-stl-viewer";
import { Card, Button } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import './main.css';

// Import STL file paths directly
import deer1 from '../static/STL/deerlayleft.stl';
import deer2 from '../static/STL/deerlayright.stl';
import deer3 from '../static/STL/Laying_Remastered_2019.stl';
import aqui from '../static/STL/aquila_trayscape.stl';

export default function Details() {
    const [currentlySelectedImg, setCurrentlySelectedImg] = useState(deer3);
    const thumbnailImages = [deer1, deer2, deer3, aqui]
    const handleThumbnailClick = (index) => {
        setCurrentlySelectedImg(thumbnailImages[index]);
    };

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
                                    key={currentlySelectedImg}
                                    orbitControls
                                    shadows
                                    url={currentlySelectedImg}
                                    cameraProps={true}
                                    // cameraPosition={{ x: 0, y: 0, z: 100 }}
                                    className='stlViewerComponent'
                                />
                                <h6>Image Preview</h6>
                                <div className='detailsImagePreview'>
                                    {thumbnailImages.map((thumbnail, index) => (
                                        <StlViewer
                                            key={index}
                                            url={thumbnail}
                                            className='thumbnailStlViewer'
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    ))}
                                </div>
                                {console.log(currentlySelectedImg)}
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
