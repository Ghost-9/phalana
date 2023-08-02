


// import React from 'react'
// import "./Footer.scss"
// import { Link } from 'react-router-dom'
// import Logo from '../assets/logo_color.png'

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="wrapper">
//         <div className="top">
//         <div className="item">
//           <h3>Explore</h3>
//           <Link className="link" to="/" >Workshop</Link>
//           <Link className="link" to="/">Experiences</Link>
//           <Link className="link" to="/">Blog</Link>
//           <Link className="link" to="/">Events</Link>
//           {/* <Link className="link" to="/">New Arrivals</Link> */}
//         </div>
//         <div className="item">
//           <h3>Links</h3>
//           <Link className="link" to="/">FAQ</Link>
//           <Link className="link" to="/">Collaborations</Link >
//           <Link className="link" to="/">Event Management</Link >
//           <Link className="link" to="/">Register With Us!</Link >
//           <Link className="link" to="/">Cookies</Link >
//         </div>
//         <div className="item">
//                       <h3>About</h3>
                   
//       <span>Phalana Dhimkana -An entertaining slice of Social Experiences.
// It’s a chatpata, complex and thoda crazy. It’s what gets us going and gets us together.
// Phalana Dhimkana follows the concept of Individuals separated by social standings and united by experiences.</span>
//         </div>
//         <div className="item">
//           <h3>Contact</h3>
//       <span>You can reach us at : <br />Pranshu +917230094940 <br />Akansha +916378587973 <br />Shriyansh +919829256300 <br />Mayank +918114473841</span>
//           </div>
//         </div>
//         <div className="bottom">
//           <div className="item">
//              <img src={ Logo} alt="" />
//           <span>© 2023 All rights reserved</span>
//           </div>
//           <div className="payment-icons">
//             <div className="row-one">
//               {/* <img src="/img/cod.png" alt="COD" /> */}
//               {/* <img src="/img/gpay.png" alt="GPay" />
//               <img src="/img/mastercard.png" alt="Mastercard" />
//               <img src="/img/visa.png" alt="Visa" />
//               <img src="/img/paytm.png" alt="Paytm" />
//               <img src="/img/phonepe.png" alt="PhonePe" />
//               <img src="/img/rupay.png" alt="Rupay" />
//               <img src="/img/upi.png" alt="UPI" /> */}
//             </div>
          
//           </div>
          
//         </div>
//       </div>
//    </div>
//   )
// }

// export default Footer





import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { socialMedia } from '../../src/data/socialMedia';
import Icon from '../components/Icon/Icon.jsx';
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='conditions'>
        <Link to='/about' className='link'>Our Story</Link>
        <Link to='/team' className='link'>The Team</Link>
      </div>
      <div className='copyright'>
        <p>Phalana Dhimkana <a href='https://www.linkedin.com/in/thiago-cabral-correia/' target='_blank' rel='noreferrer'></a> | © Copyright 2023 | All rights reserved.  </p>
      </div>
      <div className='social-media'>
        {socialMedia.map((item, index) => {
          return (
            <a key={index} href={item.link} target='_blank' rel='noreferrer'>
              <Icon
                className={item.icon}
                hoverColor='$secondary'
                size='1.5rem'
              />
            </a>
          )
        })}
      </div>
    </div>
  );
}

export default Footer

