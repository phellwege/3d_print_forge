import React from 'react';
import Header from '../components/Header';
import { Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../context/UserContext';
import SelectAvatar from '../components/modals/SelectAvatarModal';
import AddressInput from '../components/AddressInput';
import './main.css';

export default function SetupUser() {
    const {
        user, setUser,
    } = useUser();

    const OpenAvatarWindow = () => {
        const x = document.getElementsByClassName('openAvatarWindow')[0];
        if(x.style.display === 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
    }
  return (
    <>
    <Header />
    <SelectAvatar />
    <div className='pageWrap'>
        <h1>Create User</h1>
        <div className='secondaryPageWrapper'>
            <Card id='setupUserCard'>
                <Card.Body>
                    <div className='cardInnerDiv'>
                        <div className='cardInnerDivSeparator'>
                            <div className='cardInnerDivLeft'>
                                <div>
                                    <img 
                                    src={user.defaultUserAvatar} 
                                    className='userProfileAvatarImg' 
                                    alt='user Avatar'
                                    />
                                    <h5>Choose Avatar</h5>
                                    <Button onClick={()=> OpenAvatarWindow()}>Select</Button>
                                </div>
                                <br/>
                                <Form>
                                    <Form.Label>
                                        Username
                                    </Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name='userName'
                                        placeholder='username'
                                        maxLength={25}
                                        value={user.userName}
                                        // onChange={}
                                    />
                                </Form>
                            </div>
                            <div className='cardInnerDivRight'>
                                <Form>
                                    <Form.Label>
                                        Bio
                                    </Form.Label>
                                    <Form.Control 
                                        as='textarea'
                                        rows={3}
                                        name='userName'
                                        placeholder='Enter a Bio'
                                        maxLength={250}
                                        value={user.bio}
                                        // onChange={}
                                    />
                                    <AddressInput/>
                                    <br/>
                                    <Form.Label>Setup a shop now?</Form.Label>
                                    <br/>
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        type={'checkbox'}
                                        // onChange={handleHasPrinter}
                                        // checked={hasPrinter}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        type={'checkbox'}
                                        // onChange={handleHasPrinter}
                                        // checked={!hasPrinter}
                                    />
                                </Form>
                            </div>
                        </div>
                        <br/>
                        <Button>Save</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>
    </>
  )
}
