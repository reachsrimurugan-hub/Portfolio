import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import '../styles/navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
];

const NavLink = ({ name, href }) => {
  return (
    <motion.a 
      href={href} 
      className="nav-link"
      whileHover="hover"
      initial="initial"
    >
      <div className="nav-link-inner">
        <motion.span 
          className="nav-link-main"
          variants={{
            initial: { y: 0 },
            hover: { y: '100%' }
          }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="nav-link-hover"
          variants={{
            initial: { y: '-100%' },
            hover: { y: 0 }
          }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
        >
          {name}
        </motion.span>
      </div>
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar section-padding">
        <div className="nav-logo">
          <span className="logo-text">SRIMXN</span>
        </div>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </div>

        <div className="nav-actions">
          <button 
            className="btn-contact-desktop"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="btn-text">CONTACT ME</span>
          </button>
          <button 
            className={`mobile-menu-toggle ${isOpen ? 'is-open' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
          </button>
          
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                className="btn-contact-mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                CONTACT ME <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
