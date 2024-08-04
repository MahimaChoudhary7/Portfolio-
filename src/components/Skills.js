import React from "react";
import './Skills.css';

const Skills = () => {
    return (
        <div className="skill-container">
            <div className="skill-left">
                <div className="skill-header">
                    <span>Ski</span>lls
                </div>
                <p>
                Learning how to learn is life's most important skill.
                </p>
            </div>
            <div className="skill-right">
            <div className="row">
                        <div className="col-md-6 text-right">
                            <div className="skills-bar">
                                <p>HTML</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                                </div>
                                <p>CSS</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                                </div>
                                <p>JavaScript</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                                </div>
                                <p>React.js</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '75%' }}>75%</div>
                                </div>
                                <p>Figma</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                                </div>
                                <p>Python</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '60%' }}>60%</div>
                                </div>
                                <p>Github</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '86%' }}>86%</div>
                                </div>
                                <p>VS Code</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '75%' }}>75%</div>
                                </div>
                                <p>C/C++</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                                </div>
                                <p>MySQL</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Skills;