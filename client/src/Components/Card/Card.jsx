import React from 'react';
import {Link} from 'react-router-dom';
import './Card.scss';
 const Card = ({ buttonTitle, image, price, pagePath }) => {
  return (
    <div className="card">
      <img src={image} alt="Card Image" className="card-image" />
      <div className="card-content">
        <div className="card-price">{price}</div>
              <button className="card-button">
            <Link className='link' to={pagePath}>{buttonTitle}</Link>
        </button>
      </div>
    </div>
  );
};
 export default Card;