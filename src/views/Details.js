import React from 'react'
import Header from '../components/Header'
import {StlViewer} from "react-stl-viewer";
import {Card, Button} from 'react-bootstrap';
import './main.css';

export default function Details() {

    const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"

    return (
        <>
        <Header />
            <div className='pageWrap'>
                <div className='secondaryPageWrapper'>
                    <Card className='detailsCard'>
                        <Card.Body>
                            <h3>Preview</h3>
                            <div className='cardInnerDiv'>
                            <StlViewer
                                orbitControls
                                shadows
                                url={url}
                                className='stlViewerComponent'
                            />
                            <h6>Image Preview</h6>
                            <div className='detailsImagePreview'>
                                
                            </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}
