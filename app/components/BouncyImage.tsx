'use client';

import { useEffect, useRef, useState } from 'react';

interface BouncyImageProps {
  src: string;
  width?: number;
  containerSize?: number;
  speed?: number;
  hueSpeed?: number;
  bounce?: number;
  autoStart?: boolean;
}

const BouncyImage: React.FC<BouncyImageProps> = ({
  src,
  width = 300,
  containerSize = 1000,
  speed = 170,
  hueSpeed = 20,
  bounce = 1.0,
  autoStart = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [running, setRunning] = useState(autoStart);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;

    if (!container || !img) return;

    img.style.width = `${width}px`;

    let pos = { x: 20, y: 20 };
    const angle = Math.random() * Math.PI * 2;
    let vel = { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed };
    let last = performance.now();
    let hue = Math.random() * 360;

    const handleMouseEnter = () => setRunning(false);
    const handleMouseLeave = () => setRunning(true);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (running) {
        pos.x += vel.x * dt;
        pos.y += vel.y * dt;

        const cb = container.getBoundingClientRect();
        const imgW = img.width;
        const imgH = img.height;

        if (pos.x <= 0) {
          pos.x = 0;
          vel.x = Math.abs(vel.x) * bounce;
        } else if (pos.x + imgW >= cb.width) {
          pos.x = cb.width - imgW;
          vel.x = -Math.abs(vel.x) * bounce;
        }

        if (pos.y <= 0) {
          pos.y = 0;
          vel.y = Math.abs(vel.y) * bounce;
        } else if (pos.y + imgH >= cb.height) {
          pos.y = cb.height - imgH;
          vel.y = -Math.abs(vel.y) * bounce;
        }

        img.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        hue = (hue + hueSpeed * dt) % 360;
        img.style.filter = `hue-rotate(${hue}deg) saturate(200%) brightness(1.2)`;
      }

      requestAnimationFrame(step);
    };

    if (img.complete) {
      last = performance.now();
      requestAnimationFrame(step);
    } else {
      img.addEventListener('load', () => {
        last = performance.now();
        requestAnimationFrame(step);
      });
    }

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [running, width, speed, hueSpeed, bounce]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden shadow-lg"
      style={{
        width: `1000px`,
        height: `500px`,
        background: 'linear-gradient(180deg,#768ec4 0%, #071129 100%)',
      }}
    >
      <img ref={imgRef} src={src} alt="Bouncy" className="absolute top-0 left-0 pointer-events-none" />
      <div className="absolute right-2 bottom-2 text-xs text-white/60 font-sans pointer-events-none">
        Hover to pause
      </div>
    </div>
  );
};

export default BouncyImage;
