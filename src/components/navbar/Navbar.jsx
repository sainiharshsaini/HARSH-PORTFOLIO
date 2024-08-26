import { useState } from 'react';
import './navbar.scss'
import Logo from './harshsainilogo.png'

import { Link } from "react-router-dom";

import { RiMenuFill, RiCloseFill } from "@remixicon/react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-data">
                    <div className="logo">
                        <img src={Logo} alt="harshsainilogo" />
                    </div>
                    <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/workwithus">Work</Link></li>
                        <li><Link className='contact-btn' to="/contact">CONTACT</Link></li>
                    </ul>
                    <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <RiCloseFill size={45}/> : <RiMenuFill size={35}/>}
                    </button>
                </div>
            </nav>
        </>
    )
}