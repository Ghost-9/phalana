import { useState, useEffect } from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import logo from '../assets/logo_color.png'
 

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
   useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setNavbarVisible((isScrollingUp || currentScrollPos < 10));
      prevScrollPos = currentScrollPos;
    };
     const handleResize = () => {
       if (window.innerWidth > 768) {
         setShowMenu(false);
         setMenuOpen(false);
       } else {
         setShowMenu(true);
       }
     }
      window.addEventListener('resize', handleResize);
     window.addEventListener('scroll', handleScroll);
     return () => (
       window.removeEventListener('scroll', handleScroll),
        window.removeEventListener('resize', handleResize)
    );
   }, []);
  
  return (
    <div className='navbar'>
      <nav 
        className={`nav ${isNavbarVisible ? 'nav--visible' : 'nav--hidden'}`}>   
        {isNavbarVisible ? <div className="logo">
          <Link className='link' to="/">
            <img src={logo} alt="" />
          </Link>
        </div> : 
          ""} 
        <div className={`menu ${isNavbarVisible ? "menu--visible" : "menu--hidden"}`}>
          {showMenu ? <div className="hamburger">
            <button onClick={() => setMenuOpen(!isMenuOpen)}>☰</button>
          </div> : <div className='menu'>
          <Link className='link' to="/">Experiences</Link>
          <Link className='link' to="/">About</Link>
          <Link className='link' to="/">Contact</Link>
            <button><Link className='link' to="/registration">REGISTER</Link></button>
          </div>}  
        </div>
        <ul className={`ham-menu ${(isMenuOpen == true && isNavbarVisible )? "ham-menu--visible" : "ham-menu--hidden"}`}
      >
        <li className='menu-items'>
          <Link to="/" className='link'>Home</Link>
        </li>
        <li className='menu-items'>
          <Link to="/" className='link'>Experiences</Link>
        </li>
        <li className='menu-items'>
          <Link to="/" className='link'>Workshop</Link>
        </li>
        <li className='menu-items'>
          <Link to="/" className='link'>Contact</Link>
          </li>
          <li className='menu-items'>
          <button><Link className='link' to="/registration">REGISTER</Link></button>
          </li>
      </ul>
    </nav>
 
     </div>
 );
};
 export default Navbar;