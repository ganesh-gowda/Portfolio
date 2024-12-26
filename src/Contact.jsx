import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom'; 

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="nav-links">
        <Link to="/" className='nav-link'>About</Link>
        <Link to="/development" className="nav-link">
          Development
        </Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
      </div>
      
      <div className="contact-header">
        <h1>let's work together!</h1>
        <div className='split'>
        <div className='one'>
        <p>
        "Are you a business owner or someone eager to elevate your online presence? Let me take the reins.Schedule a free one-on-one consultation, and we’ll design a personalized plan to meet your needs . Together, we’ll create a strategy that aligns with your vision and propels your digital success."
        </p>
        </div>
        <div className='two'>
 
    Feel free to reach out via

  <p className="contact-item">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-5 w-5 text-primary">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg> 
    Mysore, India
  </p>
  <p className="contact-item">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone h-5 w-5 text-primary">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg> 
    +916366661252
  </p>
  <p className="contact-item">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-5 w-5 text-primary">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg> 
    ganeshgowdam6@gmail.com
  </p>
  <p className="contact-item">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
    </svg>
    <a href="https://www.linkedin.com/in/ganesh-gowda-m-969b12307/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </p>
  <button><a href="https://cal.com/ganesh-gowda/
30min" target="_blank">Book a Call</a></button>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
