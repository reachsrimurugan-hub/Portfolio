import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 50;
      const yPos = (clientY / window.innerHeight - 0.5) * 50;

      gsap.to('.divider-text span', {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: 'power3.out',
        stagger: 0.05
      });

      gsap.to('.liquid-bg', {
        x: xPos * 2,
        y: yPos * 2,
        duration: 3,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
