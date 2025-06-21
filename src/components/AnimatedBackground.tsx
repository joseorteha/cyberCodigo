"use client";
import React, { useRef, useEffect } from 'react';
import '../scss/AnimatedBackground.scss';

interface Sparkle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  opacity: number;
  radius: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

class SparkleInstance implements Sparkle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  opacity: number;
  radius: number;

  constructor(canvasWidth: number, canvasHeight: number, gridSize: number) {
    this.x = Math.floor(Math.random() * (canvasWidth / gridSize)) * gridSize;
    this.y = Math.floor(Math.random() * (canvasHeight / gridSize)) * gridSize;
    this.maxLife = Math.random() * 150 + 50;
    this.life = this.maxLife;
    this.opacity = 0;
    this.radius = Math.random() * 1.5 + 1;
  }

  update() {
    this.life--;
    const lifeRatio = this.life / this.maxLife;
    if (lifeRatio > 0.5) {
      this.opacity = (1 - lifeRatio) * 2;
    } else {
      this.opacity = lifeRatio * 2;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(0, 255, 170, ${this.opacity * 0.7})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 50;
    let sparkles: Sparkle[] = [];
    const maxSparkles = 150;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const manageSparkles = () => {
        sparkles = sparkles.filter(s => s.life > 0);
        while (sparkles.length < maxSparkles) {
            sparkles.push(new SparkleInstance(canvas.width, canvas.height, gridSize));
        }
    };
    
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      manageSparkles();
      sparkles.forEach(sparkle => {
        sparkle.update();
        sparkle.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasDimensions();
      sparkles = [];
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