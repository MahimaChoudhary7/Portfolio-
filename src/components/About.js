import React from "react";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                Ab<span>out</span>
                <hr></hr>
            </div>
            <div className="about-info">
                <div className="about-left">
                    I'm Mahima Choudhary, a recent graduate & fresher with a Bachelor's degree in Computer Science and Engineering from
                    GB Pant Institute of Engineering & Technology, Pauri Garhwal.
                </div>
                <div className="about-right">
                    <p>
                        My journey in the world of technology has been fueled
                        by a deep interest in <span>Front-End Development</span> and <span>UX/UI design</span>.
                    </p>
                    <p>
                        With a keen eye for design and a love for creating engaging user experiences, I've delved into the world of front-end
                        development, honing my skills in <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span> & <span>React.js</span>. I thrive on the challenge of bringing designs
                        to life and crafting seamless, intuitive interfaces that captivate users.
                    </p>
                    <p>
                        Throughout my academic journey, I've actively sought out opportunities to expand my knowledge and skills in web
                        development, participating in projects and hackathons that have allowed me to put theory into practice.
                    </p>
                    <p>
                        Currently,I'm working as a <span>Software Development Intern</span> at <span>Bluestock Fintech</span>, where I continue to learn, grow, and push the
                        boundaries of what's possible in the world of technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
