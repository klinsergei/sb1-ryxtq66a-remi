import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    let ctx: CanvasRenderingContext2D | null = null;
    
    try {
      ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions with error handling
      const resizeCanvas = () => {
        try {
          if (canvas && document.body) {
            canvas.width = document.body.clientWidth || window.innerWidth;
            canvas.height = document.body.scrollHeight || window.innerHeight;
          }
        } catch (err) {
          console.error('Error resizing canvas:', err);
        }
      };
      
      // Initialize canvas size
      resizeCanvas();
      
      // Update canvas size when window resizes
      window.addEventListener('resize', resizeCanvas);
      
      // Create gradients with defensive coding
      const createGradients = () => {
        if (!canvas) return [];
        
        // Our color values
        const blue = '#1619f4';
        const lightBlue = '#51D1FF';
        const white = '#ffffff';
        
        // Create multiple gradient blobs
        const gradients = [];
        
        // Create 6-8 random gradient blobs
        const numGradients = 6 + Math.floor(Math.random() * 3);
        
        for (let i = 0; i < numGradients; i++) {
          // Random position for the gradient center
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          
          // Random radius between 20% and 40% of page height
          const radius = (0.2 + Math.random() * 0.2) * canvas.height;
          
          // Random opacity between 0.15 and 0.4
          const opacity = 0.15 + Math.random() * 0.25;
          
          // Randomly select which colors to use
          const colors = [];
          const colorChoice = Math.random();
          
          if (colorChoice < 0.33) {
            colors.push(blue, lightBlue);
          } else if (colorChoice < 0.66) {
            colors.push(lightBlue, white);
          } else {
            colors.push(blue, white);
          }
          
          // Occasional third color for more variety
          if (Math.random() > 0.7) {
            if (!colors.includes(blue)) colors.push(blue);
            else if (!colors.includes(lightBlue)) colors.push(lightBlue);
            else colors.push(white);
          }
          
          gradients.push({
            x, y, radius, opacity, colors,
            // Add animation parameters
            velX: (Math.random() - 0.5) * 0.3,
            velY: (Math.random() - 0.5) * 0.3,
          });
        }
        
        return gradients;
      };
      
      const gradients = createGradients();
      
      // Animation function with defensive coding
      const animate = () => {
        if (!canvas || !ctx) return;
        
        try {
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // White background
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw gradient blobs
          gradients.forEach(grad => {
            if (!canvas || !ctx) return;
            
            // Update position (slow movement)
            grad.x += grad.velX;
            grad.y += grad.velY;
            
            // Bounce off edges
            if (grad.x < -grad.radius || grad.x > canvas.width + grad.radius) {
              grad.velX *= -1;
            }
            
            if (grad.y < -grad.radius || grad.y > canvas.height + grad.radius) {
              grad.velY *= -1;
            }
            
            try {
              // Create radial gradient
              const grd = ctx.createRadialGradient(
                grad.x, grad.y, 0,
                grad.x, grad.y, grad.radius
              );
              
              // Add color stops
              grd.addColorStop(0, `${grad.colors[0]}${Math.floor(grad.opacity * 255).toString(16).padStart(2, '0')}`);
              
              if (grad.colors.length > 2) {
                grd.addColorStop(0.5, `${grad.colors[1]}${Math.floor(grad.opacity * 0.7 * 255).toString(16).padStart(2, '0')}`);
                grd.addColorStop(1, `${grad.colors[2]}00`);
              } else {
                grd.addColorStop(1, `${grad.colors[1]}00`);
              }
              
              // Fill with gradient
              ctx.fillStyle = grd;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            } catch (err) {
              console.error('Error creating gradient:', err);
            }
          });
          
          // Continue animation
          animationRef.current = requestAnimationFrame(animate);
        } catch (err) {
          console.error('Animation error:', err);
          
          // If there's an error, try to restart the animation after a short delay
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          
          // Attempt to restart animation after a delay
          setTimeout(() => {
            animationRef.current = requestAnimationFrame(animate);
          }, 1000);
        }
      };
      
      // Start animation
      animate();
      
      // Cleanup
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        window.removeEventListener('resize', resizeCanvas);
      };
    } catch (err) {
      console.error('Error initializing canvas:', err);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ minHeight: '100%' }}
      data-testid="animated-background"
    />
  );
};

export default AnimatedBackground;