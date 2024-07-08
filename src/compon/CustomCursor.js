import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const moveCursor = (e) => {
    if (cursorRef.current && followerRef.current) {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
      });
    }
  };

  useEffect(() => {
    if (cursorRef.current && followerRef.current) {
      gsap.set(cursorRef.current, {
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(followerRef.current, {
        xPercent: -50,
        yPercent: -50,
      });

      window.addEventListener('mousemove', moveCursor);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={cursorRef} className='cursor'></div>
      <div ref={followerRef} className='follower-cursor'></div>
    </div>
  );
};

export default CustomCursor;

