import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Banner.scss';

import Button from '../Button/Button.jsx';

const Banner = ({ title, subtitle, to, buttonText, image, right, marginBottom, subtitleSub }) => {
    return (
        <div className="banner" style={{ marginBottom: marginBottom }}>
            {
                right && <div
                    className='image'
                    style={{ background: `url(${image}) no-repeat center center`, display: 'block', backgroundSize: 'cover', height: '100%' }} />
            }
                
            <div className='content'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {subtitleSub && <p>{subtitleSub}</p>}
                <Link to={to}>
                    <Button text={buttonText} />
                </Link>
            </div>
            {!right &&
                <div className='image'
                    style={{
                        background: `url(${image}) no-repeat center center`,
                        display: 'block', backgroundSize: 'cover', heigh: '100%'
                    }}
                />
            }
        </div>
    )
};

Banner.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    to: PropTypes.string,
    buttonText: PropTypes.string,
    image: PropTypes.string,
    right: PropTypes.bool,
    marginBottom: PropTypes.string,
    subtitleSub: PropTypes.string,
};


Banner.defaultProps = {
    right: false,
};
export default Banner