import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.css';

const Cursor = () => {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Immediate movement for the dot
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Smoother movement for the follower
      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleHover = () => {
      gsap.to(followerRef.current, {
        scale: 2,
        duration: 0.3,
      });
      gsap.to(dotRef.current, {
        scale: 0.5,
        duration: 0.3,
      });
    };

    const handleHoverOut = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        duration: 0.3,
      });
      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('button, a, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default Cursor;
