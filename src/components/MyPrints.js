import React, {useState} from 'react';
import { Card, Button, Form, Table } from 'react-bootstrap';

import { usePrints } from '../context/PrintsContext'
import { useUser } from '../context/UserContext'

export default function MyPrints() {

    const {prints} = usePrints();
    const {user} = useUser();

    return (
        <>
            {user.id && prints && (
            <>
                <Card>
                    <Card.Body>
                        <h3>My Prints</h3>
                        <div className='cardInnerDiv'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </>
            )}
        </>
    )
}
