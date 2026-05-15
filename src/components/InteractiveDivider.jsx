import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './InteractiveDivider.css';

const InteractiveDivider = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="interactive-divider" ref={containerRef}>
      <div className="liquid-bg"></div>
      <div className="noise-overlay"></div>
      <div className="horizontal-line"></div>
      
      <motion.div 
        style={{ scale, opacity }}
        className="divider-text-container"
        ref={textRef}
      >
        <h2 className="divider-text">
          <span className="bold">CODE</span>
          <span className="italic">SLEEP</span>
          <span className="bold">REPEAT</span>
        </h2>
      </motion.div>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle p-${i}`}></div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveDivider;
