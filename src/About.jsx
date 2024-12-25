import React from 'react';
import './About.css';
import leftpic from './assets/leftpic.jpg';
import { Link } from 'react-router-dom'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="nav-links">
        <Link to="/" className='nav-link'>About</Link>
        <Link to="/development" className="nav-link">
          Development
        </Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
      </div>
      <div className="about-container">
        <h1 className="about-title">about me</h1>
        <p className="about-description">
          i'm a passionate developer with a love for creative solutions. Here's a bit more about me.
        </p>
      </div>
      <div className="card">
        <div className="left">
          <img src={leftpic} alt="About" />
        </div>
        <span className="contain">
          <span className="hello">
            <p>
              <span style={{ color: '#ff24c8', fontSize: '20px' }}>I Design</span>, creative fun projects based on Web and
              Graphic designs. I'm heavy on design. I truly believe design sells. I can design anything from posters to UI
              to even photoshopping documents.
            </p>
            <p>
              <span style={{ fontSize: '20px', color: '#3324ff' }}>I Build</span>, projects focusing primarily on the
              Front-End. I focus on delivering intuitive, user-centered solutions to problems that matter. My approach is
              to simplify complexity, ensuring a seamless user experience that helps businesses grow and engage their
              audience effectively. From small-scale apps to larger systems, I enjoy transforming ideas into functional,
              polished web applications."
            </p>
          </span>
        </span>
      </div>
      <Link to="/development"></Link>
    </section>
  
  );
};

export default About;
