import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen]= useState(false);
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to="home" spy={true} smooth={true} duration={500}>
                    mahima.choudhary
                </Link>
            </div>
            <div className="navbar-right-menubar">
                {isMenuOpen ? (
                    <div className="navbar-menu-options">
                        <FontAwesomeIcon icon={faTimes} onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="home" spy={true} smooth={true} duration={500}>
                                Home
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="about" spy={true} smooth={true} duration={500}>
                                About
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="skills" spy={true} smooth={true} duration={500}>
                                Skills
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="projects" spy={true} smooth={true} duration={500}>
                                Projects
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="contact" spy={true} smooth={true} duration={500}>
                                Contact
                            </Link>
                    </div>
                ) : (
                    <FontAwesomeIcon icon={faBars} onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
                )}
            </div>
            <div className="navbar-right-options">
                <Link to="home" spy={true} smooth={true} duration={500}>
                    Home
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500}>
                    About
                </Link>
                <Link to="skills" spy={true} smooth={true} duration={500}>
                    Skills
                </Link>
                <Link to="projects" spy={true} smooth={true} duration={500}>
                    Projects
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;