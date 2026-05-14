import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {


  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-top">
          <div className="contact-name">
            <h2 className="outlined-text">SRI</h2>
            <h2 className="outlined-text">MXN</h2>
          </div>
          
          <div className="contact-info-grid">
            <div className="info-column">
              <h3>SOCIAL</h3>
              <ul>
                <li><a href="linkedin.com/in/srimurugan-s-00835a37a">LinkedIn</a></li>
                <li><a href="https://github.com/reachsrimurugan-hub">GitHub</a></li>
              </ul>
            </div>
            
            <div className="info-column">
              <h3>CONTACT</h3>
              <ul>
                <li><a href="mailto:Reach.srimurugan@gmail.com">Reach.srimurugan@gmail.com</a></li>
                <li><a href="tel:+1234567890">+91 7904195589</a></li>
                <li>Location: Coimbatore, Tamil Nadu</li>
                
              </ul>
            </div>
          </div>
        </div>


      </div>
      
      <div className="footer-credits">
        <p>&copy; 2026 SRI. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED BY SRIMXN</p>
      </div>
    </footer>
  );
};

export default Contact;
