import React, {useState} from 'react';
import Header from '../components/Header';
import { Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '../context/UserContext';
import SelectAvatar from '../components/modals/SelectAvatarModal';
import AddressInput from '../components/AddressInput';
import './main.css';

export default function SetupUser() {
    const history = useNavigate();
    const {
        user, setUser,
    } = useUser();
    const [setupShopNow, setSetupShopNow] = useState(false);
    const OpenAvatarWindow = () => {
        const x = document.getElementsByClassName('openAvatarWindow')[0];
        if(x.style.display === 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleAddressChange = (newAddress) => {
        setUser(prevState => ({
            ...prevState,
            address: {
                ...prevState.address,
                ...newAddress
            }
        }));
    };
    const handleSetupShopNow = () => {
        setSetupShopNow(prevState => !prevState);
    };

    const handleSavingAndRouting = () => {
        if(setupShopNow){
            generateUniqueId();
            history('/CreateStore');
        } else {
            generateUniqueId();
            history('/UserProfile')
        }
    };

    const generateUniqueId = () => {
        setUser(prevUser => ({
            ...prevUser,
            id: uuidv4()
        }));
    };

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
                                            name='username'
                                            placeholder='username'
                                            maxLength={25}
                                            value={user.username}
                                            onChange={handleChange}
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
                                            name='bio'
                                            placeholder='Enter a Bio'
                                            maxLength={250}
                                            value={user.bio}
                                            onChange={handleChange}
                                        />
                                        <AddressInput onChange={handleAddressChange}/>
                                        <br/>
                                        <Form.Label>Setup a shop now?</Form.Label>
                                        <br/>
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            type={'checkbox'}
                                            onChange={handleSetupShopNow}
                                            checked={setupShopNow}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            type={'checkbox'}
                                            onChange={handleSetupShopNow}
                                            checked={!setupShopNow}
                                        />
                                    </Form>
                                </div>
                            </div>
                            <br/>
                            <Button onClick={handleSavingAndRouting}>Save</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}
