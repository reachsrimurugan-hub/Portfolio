import React from 'react';
import { motion } from 'framer-motion';
import './Collaborate.css';

const Collaborate = () => {
  return (
    <section className="collaborate-section">
      <div className="container">
        <div className="collaborate-wrapper">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="collaborate-header"
          >
            Let's collaborate together on your next project
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#000000",
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="collaborate-button"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
