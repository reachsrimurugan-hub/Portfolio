import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import SriImg from '../assets/profile.jpeg';
import '../styles/hero.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [domainIndex, setDomainIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  const domains = [
    "UI/UX enthusiast",
    "Frontend developer",
    "Creative coder"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = domains[domainIndex];

      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setSpeed(30);
      } else {
        setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
        setSpeed(80);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setDomainIndex((prev) => (prev + 1) % domains.length);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, domainIndex, speed, domains]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 40, stiffness: 120 };
  const moveX = useSpring(0, springConfig);
  const moveY = useSpring(0, springConfig);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    moveX.set(mousePos.x * 40);
    moveY.set(mousePos.y * 40);
    rotateX.set(-mousePos.y * 8);
    rotateY.set(mousePos.x * 8);
  }, [mousePos, moveX, moveY, rotateX, rotateY]);

  return (
    <section className="hero section-padding" id="home">
      <div className="hero-left">
        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AVAILABLE FOR FREELANCE
        </motion.div>

        <div className="hero-title-container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="title-bold">CREATIVE</span><br />
            <span className="title-serif italic">Developer</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle-large"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            DESIGNING DIGITAL <br />
            <span className="title-serif">EXPERIENCES</span>
          </motion.h2>
        </div>

        <div className="hero-domains-container">
          <span className="hero-domain-text">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </div>

        <motion.button
          className="hero-cta"
          whileHover="hover"
          initial="initial"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="cta-text-wrapper">
            <motion.span
              variants={{ initial: { y: 0 }, hover: { y: '100%' } }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            >
              SEE LATEST WORK
            </motion.span>
            <motion.span
              className="cta-hover-text"
              variants={{ initial: { y: '-100%' }, hover: { y: 0 } }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            >
              SEE LATEST WORK
            </motion.span>
          </div>
        </motion.button>
      </div>

      <div className="hero-right">
        <motion.div
          className="hero-visual-composition"
          style={{ x: moveX, y: moveY, rotateX, rotateY, perspective: 1200 }}
        >
          <motion.div
            className="portrait-pill-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <img src={SriImg} alt="Sri" className="portrait-img-pill" />
            <div className="portrait-overlay">
              <span className="portrait-name">Sri</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
