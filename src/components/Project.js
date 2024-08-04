import React from "react";
import './Project.css';

const Project = () => {
    return (
        <div className="project-container">
            <div className="project-header">
                <span>Pro</span>jects
                <hr/>
            </div>
            <div className="project-list">
            <div className="project">
                    <p>To-Do-List</p>
                    <p>
                        <span>2024</span>
                        <a href="https://to-do-list-tau-rose-98.vercel.app//">
                            Live Demo
                        </a>
                    </p>
                </div>
                <div className="project">
                    <p>Custom Form</p>
                    <p>
                        <span>2024</span>
                        <a href="https://custom-form-three.vercel.app/">
                            Live Demo
                        </a>
                    </p>
                </div>
                <div className="project">
                    <p>Tic-Tac-Toe Game</p>
                    <p>
                        <span>2024</span>
                        <a href="https://tic-tac-toe-eosin-kappa-50.vercel.app/">
                            Live Demo
                        </a>
                    </p>
                </div>
                <div className="project">
                    <p>Little-Lemon Restaurant App</p>
                    <p>
                        <span>2023-2024</span>
                        <a href="https://little-lemon-restaurant-app-five.vercel.app/">
                            Live Demo
                        </a>
                    </p>
                </div>
                <div className="project">
                    <p>Random-User Using API</p>
                    <p>
                        <span>2023</span>
                        <a href="https://my-randomuser-app.vercel.app/">
                            Live Demo
                        </a>
                    </p>
                </div>
                <div className="project">
                    <p>Rock-Paper-Scissor Game</p>
                    <p>
                        <span>2023</span>
                        <a href="https://rock-paper-scissor-game-mu-six.vercel.app/">
                            Live Demo
                        </a>
                    </p>
                </div>
                <div className="project">
                    <p>BackGround Changer</p>
                    <p>
                        <span>2023</span>
                        <a href="https://back-ground-changer-two.vercel.app/">
                            Live Demo
                        </a>
                    </p>
                </div>
                <div className="project">
                    <p>Earthquake Prediction</p>
                    <p>
                        <span>2023-2024</span>
                        <a href="https://github.com/MahimaChoudhary7/earthquake_prediction">
                            Github Repository
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Project;