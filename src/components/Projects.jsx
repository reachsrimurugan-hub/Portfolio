import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

// Helper to easily import images from src/assets
const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

const projects = [
  {
    id: '01',
    title: 'Revivo Podcast Website',
    category: 'Full Stack Application',
    imageMain: getImageUrl('PodcastList.png'),
    imageSub1: getImageUrl('PodcastDetails.png'),
    imageSub2: getImageUrl('SearchResults.png'),
    githubLink: 'https://github.com/reachsrimurugan-hub/REVIVO-PODCAST-WEBSITE', // Replace with your actual GitHub link
  },
  {
    id: '02',
    title: 'Nexus Ecommerce',
    category: 'Mobile Application',
    imageMain: getImageUrl('homepage.png'),
    imageSub1: getImageUrl('products.png'),
    imageSub2: getImageUrl('cart.png'),
    githubLink: 'https://github.com/reachsrimurugan-hub/Nexus-ecommerce-website', // Replace with your actual GitHub link
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card, i) => {
      const isLast = i === cards.length - 1;
      ScrollTrigger.create({
        trigger: card,
        start: 'top top+=10%',
        pin: true,
        pinSpacing: isLast,
        end: () => `+=${window.innerHeight}`,
        id: `card-${i}`,
      });

      // Scale effect for previous cards
      if (i > 0) {
        gsap.to(cards[i - 1], {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(5px)',
          scrollTrigger: {
            trigger: card,
            start: 'top top+=10%',
            end: 'top top',
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={containerRef}>
      <div className="section-header">
        <h2 className="section-title">SELECTED WORKS</h2>
      </div>

      <div className="cards-container">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ zIndex: index }}>
            <div className="card-inner">
              <div className="card-header">
                <div className="header-left">
                  <span className="proj-num">{project.id}</span>
                  <div className="proj-info">
                    <span className="client-label">CLIENT</span>
                    <h3 className="proj-title">{project.title}</h3>
                  </div>
                </div>
                <div className="header-right">
                  <button 
                    className="live-btn"
                    onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
                  >
                    LIVE PROJECT
                  </button>
                </div>
              </div>

              <div className="card-content">
                <div className="main-image-box">
                  <img src={project.imageMain} alt={project.title} className="main-img" loading="lazy" />
                  <div className="shine-effect"></div>
                </div>
                <div className="sub-images-box">
                  <div className="sub-img-wrapper">
                    <img src={project.imageSub1} alt="Sub 1" className="sub-img" loading="lazy" />
                  </div>
                  <div className="sub-img-wrapper">
                    <img src={project.imageSub2} alt="Sub 2" className="sub-img" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
