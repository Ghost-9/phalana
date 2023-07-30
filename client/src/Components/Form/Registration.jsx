import { useState } from 'react';
import './Registration.scss';
 const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [numOfAttendees, setNumOfAttendees] = useState(0);
  const [names, setNames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
   const handleNumOfAttendeesChange = (e) => {
    const count = parseInt(e.target.value);
    setNumOfAttendees(count);
    setNames(Array(count).fill(''));
  };
   const handleNameChange = (e, index) => {
    const updatedNames = [...names];
    updatedNames[index] = e.target.value;
    setNames(updatedNames);
  };
   const handleRegister = () => {
    const price = numOfAttendees * 10; // Assuming each attendee costs $10
    setTotalPrice(price);
    setIsRegistered(true);
  };
   return (
    <div className="registration-form">
      {!isRegistered ? (
        <>
          <h2>Registration Form</h2>
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
           <input
            type="number"
            placeholder="Number of Attendees"
            value={numOfAttendees}
            onChange={handleNumOfAttendeesChange}
          />
           {names.map((name, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Attendee ${index + 1} Name`}
              value={name}
              onChange={(e) => handleNameChange(e, index)}
            />
          ))}
           <button onClick={handleRegister}>Register</button>
        </>
      ) : (
        <div className="registration-success">
          <h2>Registration Successful!</h2>
          <p>Total Price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
};
 export default RegistrationForm;