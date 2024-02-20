import React from 'react';
import Header from '../components/Header';
import { Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeaveAReview from '../components/LeaveAReview';
import SearchBar from '../components/SearchBar';

import './main.css'
import { useStore } from '../context/StoreContext';

export default function Home() {

const {
  Featured
} = useStore();

  return (
    <>
    <Header />
    <div className='pageWrap'>
      <h1>Welcome</h1>
      <div className='homeSearchWrap'>
        <SearchBar />
      </div>
      <div className='secondaryPageWrapper'>
        <Card className='homeCard'>
          <Card.Body>
            <h3>Featured</h3>
            <div className='cardInnerDiv'>
              {/* add searchbar which will add criteria into marketplace and redirect user there with results */}
              {Featured()}
            </div>
          </Card.Body>
        </Card>
        <Card className='homeCard'>
          <Card.Body>
            <h3>About</h3>
            <div className='cardInnerDiv'>
              <h5>3D Forge</h5>
              <p>
                is a community of 3D printing enthusiasts where you can sell STL files, or even commission prints
              </p>
              <h5>Rules</h5>
              <ul>
                <li>Be Nice</li>
                <li>Charge Fair prices</li>
                <li>Follow the shipping schedule if you're producing prints</li>
                <li>update your TODO's</li>
                <li>Don't be a jerk</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  )
}
