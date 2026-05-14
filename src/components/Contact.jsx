import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Home, Mailbox } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactData = [
    {
      icon: <Phone size={45} strokeWidth={1} />,
      text: "+91 7904195589",
      href: "tel:+917904195589"
    },
    {
      icon: <Home size={45} strokeWidth={1} />,
      text: "Coimbatore, Tamilnadu",
      href: "#"
    },
    {
      icon: <Mailbox size={45} strokeWidth={1} />,
      text: "Reach.srimurugan@gmail.com",
      href: "Reach.srimurugan@gmail.com"
    }
  ];

  const socialData = [
    {
      icon: <FaLinkedin size={45} />,
      text: "LinkedIn",
      href: "https://linkedin.com/in/srimurugan-s-00835a37a"
    },
    {
      icon: <FaGithub size={45} />,
      text: "GitHub",
      href: "https://github.com/reachsrimurugan-hub"
    }
  ];

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-top">
          <div className="contact-name">
            <motion.span 
              className="contact-subtitle"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              GET IN TOUCH
            </motion.span>
            <h2 className="outlined-text">SRI</h2>
            <h2 className="outlined-text">MXN</h2>
          </div>
          
          <div className="contact-content-wrapper">
            <div className="contact-list">
              {contactData.map((item, index) => (
                <React.Fragment key={index}>
                  <motion.a 
                    href={item.href}
                    className="contact-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <span className="contact-text">{item.text}</span>
                  </motion.a>
                  {index < contactData.length - 1 && <div className="contact-divider" />}
                </React.Fragment>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">SOCIAL</h3>
              <div className="social-items">
                {socialData.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-wrapper"
                    whileHover={{ scale: 1.1, color: "var(--accent)" }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
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
