import React from 'react';
import './Development.css';
import CropTech from "./assets/CropTech.jpg"
import CryptoX from "./assets/CryptoX.jpg"
import MedPre from "./assets/MedPre.jpg"
import Summeriz from "./assets/Summeriz.jpg"


const Development = () => {
  return (
    <div className="development-container">
      <nav className="nav-links">
        <a href="/">About</a>
        <a href="#projects">Development</a>
        <a href="/contact">Contact</a>
      </nav>

      <header className="dev-header">
        <h1>Most Recent Projects</h1>
      </header>

      <section id="projects" className="dev-projects">
        <div className="project-grid">
        <div className="overlay">
          <div className="project-card">
            <a href='https://github.com/ganesh-gowda/CropTech.git'>
            <img src={CropTech} alt="CropTech"/>
            </a>
            <h3>CropTech</h3>
            </div>
          </div>
          <div className="overlay">
          <div className="project-card">
          <a href='https://github.com/ganesh-gowda/Medicine-Prediction'>
            <img src={MedPre} alt="Medpre"/>
            </a>
            <h3>Medicine Recommender</h3>
            </div>
          </div>
          <div className="overlay">
          <div className="project-card">
          <a href='https://github.com/ganesh-gowda/Summeriz'>
            <img src={Summeriz} alt="Summeriz"/>
            </a>
            <h3>Summeriz</h3>
           </div>
          </div>
          <div className="overlay">
          <div className="project-card">
          <a href='https://github.com/ganesh-gowda/Crypto-X'>
            <img src={CryptoX} alt="CryptoX"/>
            </a>
            <h3>CryptoX</h3>
            </div>
          </div>
        </div>
       
      </section>
      <div className='resume' style={{marginLeft:"610px"}}>
      <a href='https://drive.google.com/file/d/1osL4-d1gyeAnynP4yLok3ei0UQ5Kf3cm/view?usp=drive_link'>View Resume</a>
      </div>
      <section className="tech-stack-section">
        <h2>Tech Stack</h2>
        <p>I rely on a set of trusted frameworks for efficiency and performance, while also staying adaptable to new tools to meet client needs, ensuring the creation of seamless web applications. My tech stack varies from project to project, and I'm passionate about learning new, exciting technologies every day.</p>

        <div className="tech-stack">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="white" fill="white" stroke-width="0" version="1" viewBox="0 0 24 24" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M13.1 3.5l.7 1.1.7-1.1v1.5h1v-3h-1l-.7 1.1-.6-1.1h-1.1v3h1zM18.4 5v-1h-1.4v-2h-1v3zM9.8 5h1v-2h.9v-1h-2.8v1h.9zM6.6 4h.9v1h1v-3h-1v1h-.9v-1h-1v3h1zM5 6l1.2 14.4 5.8 1.6 5.8-1.6 1.2-14.4h-14zm11.3 4.6h-6.8l.2 1.8h6.3999999999999995l-.5 5.5-3.6 1-3.6-1-.3-2.9h1.8l.1 1.5 2 .5 2-.5.2-2.3h-6.2l-.5-5.3h9l-.2 1.7z"></path></svg>
            HTML
          </a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="white" fill="white" stroke-width="0" version="1" viewBox="0 0 24 24" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M5.7 3.4l-.6 3.2h12.3l-.4 2.1h-12.3l-.6 3.2h12.3l-.7 3.6-5 1.7-4.3-1.7.3-1.6h-3l-.7 3.8 7.1 2.9 8.2-2.9 1.1-5.8.2-1.2 1.4-7.3h-15.3z"></path></svg>
            CSS
          </a>

          <a href="https://tailwindcss.com/" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 24 24" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
            Tailwind
          </a>

          <a href="https://getbootstrap.com/" className="tech" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" fill="white" class="bi bi-bootstrap" viewBox="0 0 16 16">
              <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
              <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
            </svg>
            Bootstrap
          </a>

          <a href="https://www.oracle.com/java/" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 384 512" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
              Java
          </a>
          
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>
            JavaScript
          </a>

          <a href="https://reactjs.org/" className="tech" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="5.5em" height="5.5em" viewBox="0 0 841.9 595.3" fill="white">
                  <g transform="translate(420.9,297.6)">
                    <circle cx="0" cy="0" r="50" fill="white" />
                    <ellipse rx="200" ry="85" fill="none" stroke="white" stroke-width="10" />
                    <ellipse rx="200" ry="85" transform="rotate(60)" fill="none" stroke="white" stroke-width="10" />
                    <ellipse rx="200" ry="85" transform="rotate(120)" fill="none" stroke="white" stroke-width="10" />
                  </g>
                </svg>
              React js
          </a>

          <a href="https://expressjs.com/" className="tech" target="_blank" rel="noopener noreferrer">
            <p style={{fontSize:"14px",color:"white"}}>express</p>
            Express js
          </a>

          <a href="https://nodejs.org/" class="tech" target="_blank" rel="noopener noreferrer">
          <p style={{color:"white",fontSize:"14px"}}>nodejs</p>
              Node js
          </a>

          <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" className="tech" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" fill="white" viewBox="0 0 64 64">
                <path d="M45.8 18.2h-6.2c-.3 0-.5.2-.5.5v9.5h-5.5V18.7c0-.3-.2-.5-.5-.5H18.2c-.3 0-.5.2-.5.5v32.5c0 .3.2.5.5.5h6.2c.3 0 .5-.2.5-.5v-9.5h5.5v9.5c0 .3.2.5.5.5h6.2c.3 0 .5-.2.5-.5V18.7c0-.3-.2-.5-.5-.5zM42.1 49.7h-5.2v-9.5c0-.3-.2-.5-.5-.5h-6.3c-.3 0-.5.2-.5.5v9.5H19.8V19.2h22.3v30.5z"></path>
            </svg>
            REST API
          </a>

          <a href="https://www.mongodb.com" class="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48z"></path></svg>
            MongoDB
          </a>

          <a href="https://www.w3schools.com/sql/" class="tech" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" fill="white" viewBox="0 0 64 64">
                <path d="M50 4H14c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM16 56V8h32v48H16zM18 10h28v4H18zm0 6h28v4H18zm0 6h28v4H18zm0 6h28v4H18zm0 6h28v4H18z"></path>
              </svg>
              SQL
            </a>

          <a href="https://vitejs.dev/" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="white" stroke-width="0" role="img" viewBox="0 0 24 24" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M13.74024 1.05293a.49504.49504 0 0 0-.1569.02512.49338.49338 0 0 0-.25056.1876L7.59513 9.56159a.4895.4895 0 0 0-.08373.22327.48846.48846 0 0 0 .03163.23629.4893.4893 0 0 0 .13985.19319.4927.4927 0 0 0 .2149.10481l3.70685.78609-.22947 4.58007a.48834.48834 0 0 0 .08466.30017.49205.49205 0 0 0 .24931.18854c.10157.03398.21174.03444.3135.00064a.49387.49387 0 0 0 .25056-.18761l5.73735-8.29594a.4884.4884 0 0 0 .08404-.22327c.009-.08015-.0016-.16137-.03163-.23629a.48835.48835 0 0 0-.13985-.19319.49318.49318 0 0 0-.2149-.1048l-3.70686-.7861.22947-4.58008a.48802.48802 0 0 0-.08466-.30017.4913.4913 0 0 0-.24931-.18853.49439.49439 0 0 0-.1566-.02574zM1.15697 9.78795c-.30647.0012-.60009.12378-.81679.34048a1.16107 1.16107 0 0 0-.34017.81648 1.162 1.162 0 0 0 .33366.81957l10.84241 10.8421a1.15762 1.15762 0 0 0 .37677.25211 1.1583 1.1583 0 0 0 .44467.08838c.00084 0 .0016-.00031.0025-.00031.00073 0 .0014.00031.0022.00031a1.15827 1.15827 0 0 0 .44467-.08838 1.15731 1.15731 0 0 0 .37677-.2521l10.84236-10.8421a1.16272 1.16272 0 0 0 .33397-.81958c-.0013-.30647-.12376-.59976-.34048-.81648a1.1616 1.1616 0 0 0-.81679-.34048 1.16114 1.16114 0 0 0-.81926.33366l-5.4012 5.4009c-.0078.0074-.01718.01255-.02482.02015L12 20.14011l-4.59776-4.59745c-.0074-.0074-.01659-.01238-.02419-.01954l-5.4015-5.40151a1.162 1.162 0 0 0-.81958-.33366Z"></path></svg>
            Vite
          </a>

          <a href="https://www.figma.com/" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 384 512" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"></path></svg>
            Figma
          </a>

          <a href="https://github.com/" className="tech" target="_blank" rel="noopener noreferrer">
          <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 496 512" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            Github
          </a>
        </div>
      </section>
    </div>
  );
};

export default Development;
