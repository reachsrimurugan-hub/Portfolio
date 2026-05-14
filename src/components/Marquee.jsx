import React from 'react';
import { motion } from 'framer-motion';
import '../styles/marquee.css';

const Marquee = ({ items, direction = 1 }) => {
  return (
    <div className="marquee-container">
      <motion.div 
        className="marquee-content"
        animate={{ x: direction > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: "linear" 
        }}
      >
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="marquee-group">
            {items.map((item, index) => (
              <span key={index} className="marquee-item">{item}</span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
