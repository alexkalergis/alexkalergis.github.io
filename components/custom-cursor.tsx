"use client";

import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

const TRAIL_DURATION = 200;
const TRAIL_COLOR = "92, 108, 66";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const isClicking = useRef(false);
  const trail = useRef<TrailPoint[]>([]);
  const rafId = useRef<number>(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const drawTrail = () => {
      const now = performance.now();
      trail.current = trail.current.filter((p) => now - p.t < TRAIL_DURATION);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = trail.current;
      if (pts.length > 2) {
        for (let i = 1; i < pts.length; i++) {
          const age = now - pts[i].t;
          const progress = i / pts.length;
          const alpha = Math.max(0, 1 - age / TRAIL_DURATION) * progress * 0.4;
          ctx.beginPath();
          ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
          ctx.lineTo(pts[i].x, pts[i].y);
          ctx.strokeStyle = `rgba(${TRAIL_COLOR}, ${alpha})`;
          ctx.lineWidth = progress * 1.5;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }
    };

    const tick = () => {
      drawTrail();

      if (cursorRef.current) {
        const { x, y } = mousePos.current;
        const size = isHovering.current ? 28 : isClicking.current ? 14 : 20;
        const opacity = isClicking.current ? 0.7 : 1;
        // centre the crosshair on the mouse
        cursorRef.current.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
        cursorRef.current.style.width = `${size}px`;
        cursorRef.current.style.height = `${size}px`;
        cursorRef.current.style.opacity = String(opacity);
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      trail.current.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    };

    const handleMouseDown = () => { isClicking.current = true; };
    const handleMouseUp = () => { isClicking.current = false; };
    const handleMouseEnter = () => { isHovering.current = true; };
    const handleMouseLeave = () => { isHovering.current = false; };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-hover'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ zIndex: 9997 }}
      />

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: "20px",
          height: "20px",
          willChange: "transform, width, height",
          transition: "width 0.15s ease-out, height 0.15s ease-out, opacity 0.1s ease-out",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal left arm */}
          <line x1="0" y1="10" x2="7" y2="10" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
          {/* Horizontal right arm */}
          <line x1="13" y1="10" x2="20" y2="10" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
          {/* Vertical top arm */}
          <line x1="10" y1="0" x2="10" y2="7" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
          {/* Vertical bottom arm */}
          <line x1="10" y1="13" x2="10" y2="20" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
          {/* Centre dot — accent color */}
          <circle cx="10" cy="10" r="1.5" fill="hsl(var(--accent))" />
        </svg>
      </div>
    </>
  );
}
