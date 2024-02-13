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
      <div>
        <h1>Welcome</h1>
        <Card>
          <Card.Body>
            <div className='cardInnerDiv'>
              <h3>About</h3>
              <p>3d printing community</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  )
}
