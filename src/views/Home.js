import React from 'react';
import Header from '../components/Header';
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './main.css'

export default function Home() {
  return (
    <>
    <Header />
    <div className='pageWrap'>
      <h1>Welcome</h1>
      <div className='secondaryPageWrapper'>
        <Card>
          <Card.Body>
            <h3>This</h3>
            <div className='cardInnerDiv'>
              thing
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3>About</h3>
            <div className='cardInnerDiv'>
              <p>3d printing community</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  )
}
