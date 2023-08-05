import React from 'react';
import PropTypes from 'prop-types';
import './Signup.scss';


import Button from '../../Button/Button';
import Input from '../../Form/Input/Input';
import useForm from '../../../hooks/useForm';
import validate from '../../../hooks/validation';


const SignUp = ({ submitForm }) => {
    const { handleSubmit, handleChange, values, errors } = useForm(submitForm, validate);
    return (
        <form
            className='subscribe-container'
            onSubmit={handleSubmit}
            noValidate>
            <div className='subscribe-column'>
                <h1>Never Miss Our Upcoming Experiences</h1>
                <p>Join today to get 5% off your first registration fee. Sign up for our newsletter and receive surprise rewards.</p>
            </div>
            <div className='subscribe-row'>
                <Input
                    type='text'
                    name='email'
                    placeholder='Enter Email Address'
                    value={values.email}
                    errors={errors.email}
                    onChange={handleChange}
                />
                <Button type='submit' text='Sign Up' />
            </div>
        </form>
    );
}
SignUp.propTypes = {
    submitForm: PropTypes.func,
  };
  
SignUp.defaultProps = {
    submitForm: '',
  };

export default SignUp;
