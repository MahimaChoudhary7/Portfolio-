import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function App() {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 500) {
      setShowBackToTopBtn(true);
    }
    else if(scrolled <= 500) {
      setShowBackToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="app-section" id="home">
        <Home/>
      </div>
      <div className="app-section" id="about">
        <About/>
      </div>
      <div className="app-section" id="skills">
        <Skills/>
      </div>
      <div className="app-section" id="projects">
        <Project/>
      </div>
      <div className="app-section">
        <Education/>
      </div>
      <div className="app-section-contact" id="contact">
        <Contact/>
      </div>
      {showBackToTopBtn && (
        <button className="btn-back-to-top" onClick={scrollToTop}>
          <span>Back to Top</span>
          <FontAwesomeIcon icon={faArrowUp}/>
        </button>
      )}
    </>
  );
}
