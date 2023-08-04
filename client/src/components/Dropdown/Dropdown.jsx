import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

export const DropdownItem = ({ page, to, onClick }) => {
    return (
        <li>
            <Link onClick={onClick} className='dropdown-link' to={to}>{page}</Link>
        </li>
    )
};


export const pageLinks = [
    {
        page: 'Quiz',
        link: '/quiz'
    },
    {
        page: 'About',
        link: '/about',
    },
    {
        page: 'Contact',
        link: '/contact'
    },
];

const Dropdown = () => {
    const [closeDropDown, setCloseDropDown] = useState(true);

    return (
        <div className={closeDropDown ? 'dropdown' : 'dropdown closed'}>
            <ul>
                {pageLinks.map((item, index) => {
                    return (
                        <DropdownItem
                        key={index}
                        page={item.page}
                        to={item.link}
                        onClick={() => setCloseDropDown(false)} />
                    )
                })}
            </ul>
        </div>
    )
};


export default Dropdown