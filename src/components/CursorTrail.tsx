import React, { useEffect, useRef, useState } from 'react';

const CursorTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset timeout if it exists
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set a new timeout to hide the cursor trail after 100ms of inactivity
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Update cursor trail position
  useEffect(() => {
    if (trailRef.current) {
      trailRef.current.style.left = `${mousePos.x}px`;
      trailRef.current.style.top = `${mousePos.y}px`;
    }
  }, [mousePos]);

  return (
    <div 
      ref={trailRef}
      className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isMoving ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -50%)',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: `radial-gradient(
          circle,
          rgba(81, 209, 255, 0.5) 0%,
          rgba(21, 7, 178, 0.3) 40%,
          rgba(76, 239, 150, 0.1) 70%,
          rgba(255, 255, 255, 0) 100%
        )`,
        filter: 'blur(8px)',
        willChange: 'left, top',
      }}
    />
  );
};

export default CursorTrail;