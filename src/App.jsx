import React, { useState } from 'react';
import './App.css';
import ganesh from './assets/Ganesh.jpeg';
import scroll from './assets/scroll.gif';
import blackwhitebg from './assets/blackwhitebg.webm';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import About from './About';
import Development from './Development';
import Contact from "./Contact"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main className="portfolio">
        <section className="home">
          <div className="videoBg">
            <video className="videoTag" autoPlay loop muted>
              <source src={blackwhitebg} type="video/mp4" />
            </video>
          </div>
          <div className="intro-card">
            <div className="inner-card">
              <img src={ganesh} alt="Ganesh" />
            </div>
            <h2>hey,</h2>
            <h1 style={{ fontSize: '40px' }}>i'm Ganesh Gowda m</h1>
            <h2 className="intro-title">web dev and designer</h2>
            <p className="intro-text">
              I am a passionate Front-End developer with a knack for solving complex challenges and crafting creative
              solutions. I excel at quickly transforming designs into real-world Full Stack projects using cutting-edge
              technologies and frameworks. Through my freelance web development service, I want to help clients and
              companies architect, develop, and implement interactive websites.
            </p>
            <p className="intro-text">
              I love seeing the world from a bird's-eye view of creativity, which drives me to push every project into a
              piece of art and tell a story through design.
            </p>
            <div className="links">
            <a
                href="https://www.instagram.com/ganeshgowda.__/"
                className="icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialInstagram size={36} />
              </a>
              <a
                href="https://www.linkedin.com/in/ganesh-gowda-m/"
                className="icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin size={36} />
              </a>
              <a
                href="https://github.com/ganesh-gowda"
                className="icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialGithub size={36} />
              </a>
            </div>
          </div>
          <div className="scroll">
            <img src={scroll} alt="Scroll" />
          </div>
        </section>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/development" element={<Development />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
