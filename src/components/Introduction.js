import React from 'react';
import { Image } from 'react-bootstrap';
import cloudImage from '../assets/cloud.png';  
import mountainImage from '../assets/mountain.png';  
import profilePic from '../assets/profilepic.png';  
import frontEndImage from '../assets/frontend.png';  
import backEndImage from '../assets/backend.png';  
import linkedinIcon from '../assets/linkedin.png';  
import githubIcon from '../assets/github.png';  
import websiteIcon from '../assets/website.png';  
import facebookIcon from '../assets/facebook.png'; 

function Introduction() {
  return (
        <div>
      <div id="top-container">
        <Image className="top-cloud" src={cloudImage} alt="cloud img" />
        <h1>I'm Hammad</h1>
        <h2>A Computer <span className="underline">Science</span>-tist</h2>
        
        <Image className="bottom-cloud" src={cloudImage} alt="cloud-img" />
        <Image src={mountainImage} alt="mountain-img" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <Image src={profilePic} alt="My-img" height="300px" width="300px" />
          <p></p>
          <h2>Hey There!</h2>
          <p className="intro">I'm currently in my sixth semester at Air University, studying Computer Science, and it has been really fascinating so far! I've Worked on full-fledged ASP.NET, Android and Full Stack Web Based Projects. I'm super enthusiastic for upcoming challenges in the next years, Hopefully : )</p>
        </div>
        <hr />
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <Image className="front-end-img mr-3" src={frontEndImage} alt="front-end-img" />
            <div>
              <h3>Front-End</h3>
              <p>As a front-end developer, I have mastered HTML, CSS, JavaScript, React and NextJs to craft visually appealing and interactive web experiences. With a solid foundation in these languages, I create seamless layouts, captivating designs, and dynamic user interfaces to deliver innovative web solutions.</p>
            </div>
          </div>
          <div className="skill-row">
            <Image className="back-end-img mr-3" src={backEndImage} alt="back-end-imgs" />
            <div>
              <h3>Back-End</h3>
              <p>As a back-end developer, I excel in Sql, MySQL, MongoDB etc, crafting robust and scalable server-side applications.  I ensure efficient data management and querying, while MongoDB allows for flexible and scalable data storage solutions. My expertise in these technologies enables me to deliver cutting-edge back-end solutions that elevate web application performance.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="contact-me">
          <h2>Get In <span className="underline">Touch</span>!</h2>
          <h3 className="development">If you are as passionate about Software development as I am!</h3>
          <a className="btn btn-primary" href="contact">CONTACT ME</a>
        </div>
      </div>
      <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/in/hammad-mehmood-7a8276159/">
          <Image className="icon" src={linkedinIcon} alt="LinkedIn" width="30px" />
        </a>
        <a className="footer-link" href="https://github.com/Hammad8980">
          <Image className="icon" src={githubIcon} alt="GitHub" width="30px" />
        </a>
        <a className="footer-link" href="https://Hammad8980.github.io/cv/">
          <Image className="icon" src={websiteIcon} alt="Website" width="30px" />
        </a>
        <a className="footer-link" href="https://www.facebook.com/profile.php?id=100009924465724">
          <Image className="icon" src={facebookIcon} alt="facebook" width="30px" />
        </a>
        <p className="copyright">©2023 Hammad Mehmood.</p>
      </div>
    </div>

  );
}

export default Introduction;
