"use client"
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const spring = {
      tension: 0.3,   // Spring strength
      friction: 0.8   // Damping factor
    };

    const updateSpringAnimation = () => {
      // Calculate spring physics
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      
      // Apply spring force
      const vx = dx * spring.tension;
      const vy = dy * spring.tension;
      
      // Update position with momentum
      currentRef.current.x += (vx * (1 - spring.friction));
      currentRef.current.y += (vy * (1 - spring.friction));

      // Apply the transform
      if (cursor) {
        cursor.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`;
      }

      // Continue animation
      rafRef.current = requestAnimationFrame(updateSpringAnimation);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor && !cursor.classList.contains('active')) {
        cursor.classList.add('active');
      }
      
      // Update target position (subtract half the cursor size to center it)
      targetRef.current = {
        x: e.clientX - 48,
        y: e.clientY - 48
      };

      // Start animation if not already running
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateSpringAnimation);
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.classList.remove('active');
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .spring-cursor {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 100; /* Increased z-index to ensure it is on top */
        opacity: 0;
        will-change: transform;
      }

      .spring-cursor.active {
        opacity: 1;
        transition: opacity 0.1s ease;
      }

      .spring-cursor-inner {
        width: 156px;
        height: 156px;
        background-color: #6AECD980;
        border-radius: 9999px;
        filter: blur(26px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.head.removeChild(style);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={cursorRef} className="spring-cursor">
      <div className="spring-cursor-inner" />
    </div>
  );
};

export default CustomCursor;