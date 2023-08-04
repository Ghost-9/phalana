import {useState, useCallback} from 'react'
import './Newsletter.scss'

import CustomIcon from '../Icon/Icon.jsx';
import SignUp from './Signup/Signup.jsx';

const Newsletter = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const submitForm = useCallback(async (email) => {
        await storeEmailToSpreadsheet(email);
            setSubmitted(true);
          }, [setSubmitted])

    
    const storeEmailToSpreadsheet = async (email) => {
        try {
            const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/d/1XN18C6ZKbXXR0jupwWcz1N3XyiolU3ZbeDSllobeIY8/values/Sheet1!A1:B2?key=53e86f01a17353641578e155850b7d689235557e', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                }),
            }); 
            if (!response.ok) {
                throw new Error('Failed to store email!');
            }
        } catch (error) {
            throw new Error('Error storing email');
        }
    };
    
    return (
        <div className='newsletter'>
            {!submitted ? <SignUp submitForm={submitForm}/>
            : (
            <div className='subscribe-container submitted'>
                <div className='subscribe-column'>                    
                    <CustomIcon
                        className='fas fa-envelope'
                        size='3.5rem'                 
                    />
                    <h1>Your email has been validated</h1>
                    <p>Thank you for signing up.</p>
                </div>
            </div>)}
        </div>
    )
}

export default Newsletter