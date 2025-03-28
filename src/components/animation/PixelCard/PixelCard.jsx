'use client';

import { useEffect, useRef } from "react";

const Pixel = (canvas, context, x, y, color, speed, delay) => {
  let width = canvas.width;
  let height = canvas.height;
  let ctx = context;
  let size = 0;
  let sizeStep = Math.random() * 0.4;
  let minSize = 0.5;
  let maxSizeInteger = 2;
  let maxSize = Math.random() * (maxSizeInteger - minSize) + minSize;
  let counter = 0;
  let counterStep = Math.random() * 4 + (width + height) * 0.01;
  let isIdle = false;
  let isReverse = false;
  let isShimmer = false;

  const draw = () => {
    const centerOffset = maxSizeInteger * 0.5 - size * 0.5;
    ctx.fillStyle = color;
    ctx.fillRect(x + centerOffset, y + centerOffset, size, size);
  };

  const appear = () => {
    isIdle = false;
    if (counter <= delay) {
      counter += counterStep;
      return;
    }
    if (size >= maxSize) {
      isShimmer = true;
    }
    if (isShimmer) {
      shimmer();
    } else {
      size += sizeStep;
    }
    draw();
  };

  const disappear = () => {
    isShimmer = false;
    counter = 0;
    if (size <= 0) {
      isIdle = true;
      return;
    }
    size -= 0.1;
    draw();
  };

  const shimmer = () => {
    if (size >= maxSize) {
      isReverse = true;
    } else if (size <= minSize) {
      isReverse = false;
    }
    size += isReverse ? -speed : speed;
  };

  return { appear, disappear, isIdle };
};

const VARIANTS = {
  default: { gap: 5, speed: 35, colors: "#f8fafc,#f1f5f9,#cbd5e1", noFocus: false },
  green: { gap: 10, speed: 25, colors: "#e0f2fe,#7dd3fc,#0ea5e9", noFocus: false },
  yellow: { gap: 3, speed: 20, colors: "#fef08a,#fde047,#eab308", noFocus: false },
  pink: { gap: 6, speed: 80, colors: "#fecdd3,#fda4af,#e11d48", noFocus: true }
};

export default function PixelCard({ variant = "default", className = "", children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);
  const timePreviousRef = useRef(performance.now());
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const { gap, speed, colors, noFocus } = VARIANTS[variant] || VARIANTS.default;

  useEffect(() => {
    const initPixels = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      const ctx = canvasRef.current.getContext("2d");
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      const colorsArray = colors.split(",");
      pixelsRef.current = [];

      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
          const delay = reducedMotion ? 0 : Math.sqrt(x * x + y * y);
          pixelsRef.current.push(Pixel(canvasRef.current, ctx, x, y, color, speed * 0.001, delay));
        }
      }
    };

    initPixels();
    const observer = new ResizeObserver(initPixels);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [gap, speed, colors]);

  const animate = (fnName) => {
    animationRef.current = requestAnimationFrame(() => animate(fnName));
    const timeNow = performance.now();
    if (timeNow - timePreviousRef.current < 1000 / 60) return;
    timePreviousRef.current = timeNow;

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !canvasRef.current) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    pixelsRef.current.forEach((pixel) => {
      pixel[fnName]();
      if (!pixel.isIdle) allIdle = false;
    });

    if (allIdle) cancelAnimationFrame(animationRef.current);
  };

  return (
    <div
      ref={containerRef}
      className={`h-[400px] w-[300px] relative overflow-hidden grid place-items-center aspect-[4/5] border border-[#27272a] rounded-[25px] transition-colors duration-200 select-none ${className}`}
      onMouseEnter={() => animate("appear")}
      onMouseLeave={() => animate("disappear")}
      onFocus={noFocus ? undefined : () => animate("appear")}
      onBlur={noFocus ? undefined : () => animate("disappear")}
      tabIndex={noFocus ? -1 : 0}
    >
      <canvas className="w-full h-full block" ref={canvasRef} />
      {children}
    </div>
  );
}
