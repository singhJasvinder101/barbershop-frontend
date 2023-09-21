import React, { useEffect, useState } from 'react';
import { RiCloseLine as RxCross2, RiMenuLine as RxHamburgerMenu } from 'react-icons/ri';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import SearchIcon from './SearchIcons';
export default function MenuAppBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [dropdownActive1, setdropdownActive1] = useState(false);
    const [dropdownActive2, setdropdownActive2] = useState(false);


    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const toggleDropdown1 = () => {
        setdropdownActive1(!dropdownActive1);
    };

    const toggleDropdown2 = () => {
        setdropdownActive2(!dropdownActive2);
    };


    const handleSearchOnChange = (e) => {
        if (e.key === "Enter") {
            setSearchInput(e.target.value)
        }
    }

    const navbarVariants = {
        sticky: {
            top: 0,
            position: 'sticky',
            // backgroundColor: 'rgba(245, 245, 245, 0.645)',
            backgroundColor: '#f1f6ff',
            opacity: 0.8,
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
            zIndex: 100,
        },
        normal: {
            top: '-100px',
            position: 'static',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            opacity: 1,
        },
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={isSticky ? 'sticky' : 'normal'}
            animate={isSticky ? 'sticky' : 'normal'}
            variants={navbarVariants}
            className={`App ${showMobileMenu ? 'mobile-menu-active' : ''}`}
        >
            <nav className="navbar">
                <div className="left mx-2 d-flex mx-0 align-items-center">
                    <div className={`mobile-menu-icon mx-2 ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        {showMobileMenu ? <RxCross2 /> : <RxHamburgerMenu />}
                    </div>
                    <div className="logo mx-1"><img src="https://raw.githubusercontent.com/Modiperin/BarberFrontend/master/src/Images/logo_demo.jpg" fluid></img></div>
                    <ul className={`nav-links ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
                        <li><Link to="/" className='home gold'>Home</Link></li>
                        <li
                            onMouseEnter={toggleDropdown1}
                            onMouseLeave={toggleDropdown1}
                        >
                            <Link to="/">Services {dropdownActive1 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</Link>
                            <ul className={`dropdown ${dropdownActive1 ? 'dropdown-active' : ''} ${showMobileMenu ? 'dropdown-mobile' : ''}`}>
                                <li><Link to="/">Service 1</Link></li>
                                <li><Link to="/">Service 2</Link></li>
                                <li><Link to="/">Service 3</Link></li>
                            </ul>
                        </li>
                        <li
                            onMouseEnter={toggleDropdown2}
                            onMouseLeave={toggleDropdown2}
                        >
                            <Link to="/">Products {dropdownActive2 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</Link>
                            <ul className={`dropdown ${dropdownActive2 ? 'dropdown-active' : ''} ${showMobileMenu ? 'dropdown-mobile' : ''}`}>
                                <li><Link to="/">Product 1</Link></li>
                                <li><Link to="/">Product 2</Link></li>
                                <li><Link to="/">Product 3</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='search-icon mx-1'>
                    {/* <FontAwesomeIcon className='text-dark mx-3' icon={faSearch} onClick={handleSearchFocus} /> */}
                    <SearchIcon />
                    <motion.btn
                        initial={{backgroundColor: '#d5b981'}}
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                        className='loginbtn btn btn-primary mx-1'
                    >
                        <Link to="/login">Login</Link>
                    </motion.btn>
                    <Link to="/register" className='signup mx-2'>Sign Up</Link>
                </div>
            </nav>
        </motion.div>
    );
}
