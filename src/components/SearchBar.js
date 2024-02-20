import React from 'react'
import DropDown from '../components/DropDown';
import { Button, Card, Alert} from 'react-bootstrap';


export default function SearchBar() {
    return (
        <>
            <div className='searchBar'>
                <div id='searchFilter'>
                    <Button>Search</Button>
                    <DropDown /> 
                </div>
                <textarea
                rows={1}
                cols={80}
                placeholder='Search'
                ></textarea>
            </div>
        </>
    )
}
