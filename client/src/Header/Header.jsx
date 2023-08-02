import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/head_logo.png';

import './Header.scss';
import Icon from '../components/Icon/Icon';
import Dropdown from '../components/Dropdown/Dropdown';

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const onClose = () => {
    setMobileMenu(false);
    return (document.body.style.position = 'static');
  };

  const onOpen = () => {
    setMobileMenu(true);
    return (document.body.style.position = 'fixed');
  };

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
    if (mobileMenu === false) { onClose() } else { onOpen() }
  };

  // Close mobile menu when clicking on a link
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
    onClose();
  }, [pathname]);
  
  const showMobileMenu = () => {
    if (window.innerWidth >= 720) { onClose() }
  };

  useEffect(() => {
    showMobileMenu();
  });
  window.addEventListener('resize', showMobileMenu);

  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <Link to="/" onClick={() => setMobileMenu(onClose)}>
            <img src={logo} className='logo' alt="PD Logo" />
          </Link>
          <div className={mobileMenu ? 'menu-icon active' : 'menu-icon'}
            onClick={() => setMobileMenu(handleClick)}>
            <div className="line top"></div>
            <div className="line middle"></div>
            <div className="line bottom"></div>
          </div>
          <ul className={mobileMenu ? 'nav-list mobile' : 'nav-list'}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-link'
                onClick={() => setMobileMenu(onClose)}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/experience'
                className='nav-link'
                onClick={() => setMobileMenu(onClose)}
              >
                Experiences
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/workshop'
                className='nav-link'
                onClick={() => setMobileMenu(onClose)}
              >
                Workshop
              </Link>
            </li>
            <li className='nav-item'
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}>
              <p className='nav-link'>More</p>
              {dropDown &&<Dropdown/>}
            </li>
            <li className='nav-item'>
              <Link
                to='/location'
                className='nav-link'
                onClick={() => setMobileMenu(onClose)}
              >
                <Icon
                  className='fas fa-map-marker-alt'
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={mobileMenu ? 'overlay' : 'overlay inactive'} onClick={()=> setMobileMenu(onClose)}/>
      </nav>
    </>
  )
};

export default Header


// const Header = () => {
//   const [isNavbarVisible, setNavbarVisible] = useState(true);
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//    useEffect(() => {
//     let prevScrollPos = window.scrollY;
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const isScrollingUp = prevScrollPos > currentScrollPos;
//       setNavbarVisible((isScrollingUp || currentScrollPos < 10));
//       prevScrollPos = currentScrollPos;
//     };
//      const handleResize = () => {
//        if (window.innerWidth > 768) {
//          setShowMenu(false);
//          setMenuOpen(false);
//        } else {
//          setShowMenu(true);
//        }
//      }
//       window.addEventListener('resize', handleResize);
//      window.addEventListener('scroll', handleScroll);
//      return () => (
//        window.removeEventListener('scroll', handleScroll),
//         window.removeEventListener('resize', handleResize)
//     );
//    }, []);
  
//   return (
//     <div className='navbar'>
//       <nav 
//         className={`nav ${isNavbarVisible ? 'nav--visible' : 'nav--hidden'}`}>   
//         {isNavbarVisible ? <div className="logo">
//           <Link className='link' to="/">
//             <img src={logo} alt="" />
//           </Link>
//         </div> : 
//           ""} 
//         <div className={`menu ${isNavbarVisible ? "menu--visible" : "menu--hidden"}`}>
//           {showMenu ? <div className="hamburger">
//             <button onClick={() => setMenuOpen(!isMenuOpen)}>☰</button>
//           </div> : <div className='menu'>
//           <Link className='link' to="/">Experiences</Link>
//           <Link className='link' to="/">About</Link>
//           <Link className='link' to="/">Contact</Link>
//             <button><Link className='link' to="/registration">REGISTER</Link></button>
//           </div>}  
//         </div>
//         <ul className={`ham-menu ${(isMenuOpen == true && isNavbarVisible )? "ham-menu--visible" : "ham-menu--hidden"}`}
//       >
//         <li className='menu-items'>
//           <Link to="/" className='link'>Home</Link>
//         </li>
//         <li className='menu-items'>
//           <Link to="/" className='link'>Experiences</Link>
//         </li>
//         <li className='menu-items'>
//           <Link to="/" className='link'>Workshop</Link>
//         </li>
//         <li className='menu-items'>
//           <Link to="/" className='link'>Contact</Link>
//           </li>
//           <li className='menu-items'>
//           <button><Link className='link' to="/registration">REGISTER</Link></button>
//           </li>
//       </ul>
//     </nav>
 
//      </div>
//  );
// };
//  export default Header;