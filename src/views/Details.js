import React, {useState} from 'react'
import Header from '../components/Header'
import {StlViewer} from "react-stl-viewer";
import { stl2png } from 'stl-to-png';
import fs from 'fs';
import path from 'path';
import {Card, Button} from 'react-bootstrap';
import BackButton from '../components/BackButton';
import './main.css';

import deer1 from '../static/STL/deerlayleft.stl';
import deer2 from '../static/STL/deerlayright.stl';
import deer3 from '../static/STL/Laying_Remastered_2019.stl';

export default function Details() {
// this url as well as the other previews will be loaded via state from the server
    const [currentlySelectedImg, setCurrentlySelectedImg] = useState(stlFilePaths[0]);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        // Function to generate thumbnail in memory for a single STL file
        async function generateThumbnail(stlFilePath, options) {
            try {
                // Read STL file data
                const stlData = fs.readFileSync(stlFilePath);
                // Generate PNG thumbnail data
                const pngData = await stl2png(stlData, options);
                // Return the PNG thumbnail data
                return pngData;
            } catch (error) {
                // Handle errors
                console.error('Error generating thumbnail for', stlFilePath, ':', error);
                throw error; // Rethrow the error to be handled elsewhere if needed
            }
        }
        // Function to load thumbnails for multiple STL files concurrently
        async function loadThumbnails(stlFilePaths, options) {
            // Array to store promises for thumbnail generation
            const thumbnailPromises = stlFilePaths.map((stlFilePath) => generateThumbnail(stlFilePath, options));
            try {
                // Wait for all thumbnails to be generated
                const thumbnails = await Promise.all(thumbnailPromises);
                // Thumbnails array now contains PNG thumbnail data for each STL file
                setThumbnails(thumbnails);
            } catch (error) {
                // Handle errors
                console.error('Error loading thumbnails:', error);
            }
        }
        // Load thumbnails when component mounts
        const stlFilePaths = [deer1, deer2, deer3]; // Update with your STL file paths
        const thumbnailOptions = {
            width: 100, // Width of the thumbnail
            height: 100, // Height of the thumbnail
        };
        loadThumbnails(stlFilePaths, thumbnailOptions);
    }, []); // Empty dependency array to run only once when component mounts
    const handleThumbnailClick = (stlUrl) => {
        setCurrentlySelectedImg(stlUrl);
        setSelectedThumbnail(stlUrl)
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
                                    orbitControls
                                    shadows
                                    url={currentlySelectedImg}
                                    className='stlViewerComponent'
                                />
                                <h6>Image Preview</h6>
                                <div className='detailsImagePreview'>
                                    {thumbnails.map((thumbnail, index) => (
                                        <img
                                            key={index}
                                            src={`data:image/png;base64,${thumbnail.toString('base64')}`}
                                            alt={`Thumbnail ${index}`}
                                            onClick={() => handleThumbnailClick(stlFilePaths[index])}
                                            className={thumbnail === selectedThumbnail ? 'selected' : ''}
                                        />
                                    ))}
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
