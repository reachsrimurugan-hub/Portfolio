import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/background.css';

const BackgroundPattern = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(mousePos.x, springConfig);
  const moveY = useSpring(mousePos.y, springConfig);

  return (
    <div className="background-container">
      <motion.div 
        className="contour-layer"
        style={{ x: moveX, y: moveY }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,200 Q250,50 500,200 T1100,200" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <path d="M-100,400 Q300,250 600,400 T1100,400" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <path d="M-100,600 Q200,450 500,600 T1100,600" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <path d="M-100,800 Q350,650 700,800 T1100,800" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          
          <path d="M200,-100 Q50,250 200,500 T200,1100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <path d="M400,-100 Q250,300 400,600 T400,1100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <path d="M600,-100 Q450,200 600,500 T600,1100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <path d="M800,-100 Q650,350 800,700 T800,1100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        </svg>
      </motion.div>
      <div className="noise-overlay" />
    </div>
  );
};

export default BackgroundPattern;
