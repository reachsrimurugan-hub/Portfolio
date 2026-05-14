import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

// Helper to easily import images from src/assets
const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

const About = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Background parallax lines
    gsap.to('.contour-line', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    // Image parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      gsap.to(imageRef.current, {
        x: x,
        y: y,
        rotateX: -y,
        rotateY: x,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const tools = [
    'Figma', 'React', 'GitHub'
  ];

  const certificates = [
    { name: 'Frontend App With React', image: getImageUrl('react.jpeg') },
    { name: 'System Administartion', image: getImageUrl('Admin.png') },
    { name: 'Advanced Git/GitHub', image: getImageUrl('Git.png') }, 
  ];

  const education = [
    {
      degree: 'Bsc Computer Science with Cognitive System',
      institution: 'Sri Krishna College Of Arts and Science',
      year: '2024 - 2027',
    }
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="background-elements">
        <div className="contour-line line-1"></div>
        <div className="contour-line line-2"></div>
        <div className="contour-line line-3"></div>
        <div className="grain-overlay"></div>
        <div className="mouse-glow"></div>
      </div>

      <div className="container" ref={containerRef}>
        <div className="about-grid">
          <div className="about-content">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-title"
            >
              ABOUT ME
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="intro-para"
            >
              Building modern digital experiences through design, motion, and interaction.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bio-text"
            >
              Focused on clean visuals, immersive interfaces, and refined user experiences.
            </motion.div>
          </div>

          <div className="about-visual">
            <div className="image-wrapper" ref={imageRef}>
              <img src={getImageUrl('about.png')} alt="about" className="about-img" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="sub-sections">
          <div className="sub-section education">
            <h3>Education & Experience</h3>
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="year">{item.year}</div>
                  <div className="degree">{item.degree}</div>
                  <div className="institution">{item.institution}</div>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sub-section certificates">
            <h3>View Certificates</h3>
            <div className="certs-grid">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="cert-card"
                  whileHover={{ y: -10, borderColor: 'rgba(0,0,0,0.4)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedCert(cert.image)}
                >
                  <span>{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sub-section tools">
            <h3>Known Tools</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="tool-tag"
                  whileHover={{ scale: 1.1 }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedCert} alt="Certificate" className="cert-modal-image" />
              <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
