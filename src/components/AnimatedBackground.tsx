"use client";
import React, { useRef, useEffect } from 'react';
import '../scss/AnimatedBackground.scss';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 50;
    let sparkles: any[] = [];
    const maxSparkles = 50; // Aumentamos la cantidad para un efecto más "lleno"

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Sparkle {
      x: number;
      y: number;
      life: number;
      maxLife: number;
      opacity: number;
      radius: number;

      constructor() {
        this.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        this.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        this.maxLife = Math.random() * 150 + 50; // Viven entre 50 y 200 frames
        this.life = this.maxLife;
        this.opacity = 0;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.life--;

        // Fade in and out
        const lifeRatio = this.life / this.maxLife;
        if (lifeRatio > 0.5) {
          this.opacity = (1 - lifeRatio) * 2;
        } else {
          this.opacity = lifeRatio * 2;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(0, 255, 170, ${this.opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const manageSparkles = () => {
        // Remove dead sparkles
        sparkles = sparkles.filter(s => s.life > 0);

        // Add new sparkles
        while (sparkles.length < maxSparkles) {
            sparkles.push(new Sparkle());
        }
    };
    
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      manageSparkles();

      sparkles.forEach(sparkle => {
        sparkle.update();
        sparkle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasDimensions();
      sparkles = []; // Reset on resize
    };

    setCanvasDimensions();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };

  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
};

export default AnimatedBackground; 