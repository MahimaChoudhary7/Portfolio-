import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Home.css';
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-header">
                <Navbar/>
            </div>
            <div className="home-page">
                <div>
                    <span>Hey,</span>
                    <p>
                        this is <span>Mahima</span>,
                    </p>
                </div>
                <span>a software developer.</span>
            </div>
            <div className="home-page-footer">
                <a href="https://www.linkedin.com/in/mahima-choudhary-77a331213/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
                <a href="https://www.instagram.com/i_mahima.choudhary/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a href="https://github.com/MahimaChoudhary7" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
            </div>
        </div>
    );
};

export default Home;
