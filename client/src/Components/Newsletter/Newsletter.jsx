import {useState, useCallback} from 'react'
import './Newsletter.scss'

import CustomIcon from '../Icon/Icon.jsx';
import SignUp from './Signup/Signup.jsx';

const Newsletter = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const submitForm = useCallback( () => {
  

            setSubmitted(true);
          }, [setSubmitted])

    

    
    return (
        <div className='newsletter'>
            {!submitted ? <SignUp submitForm={submitForm} />
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