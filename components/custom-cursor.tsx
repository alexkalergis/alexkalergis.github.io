"use client";

import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

const TRAIL_DURATION = 600;
const TRAIL_COLOR = "82, 109, 59";

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
          const alpha = Math.max(0, 1 - age / TRAIL_DURATION) * progress * 0.85;
          ctx.beginPath();
          ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
          ctx.lineTo(pts[i].x, pts[i].y);
          ctx.strokeStyle = `rgba(${TRAIL_COLOR}, ${alpha})`;
          ctx.lineWidth = progress * 2.5;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }
    };

    const tick = () => {
      drawTrail();

      if (cursorRef.current) {
        const { x, y } = mousePos.current;
        const size = isClicking.current ? 5 : isHovering.current ? 10 : 8;
        cursorRef.current.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
        cursorRef.current.style.width = `${size}px`;
        cursorRef.current.style.height = `${size}px`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    const handleMouseDown = () => { isClicking.current = true; };
    const handleMouseUp = () => { isClicking.current = false; };
    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [tabindex], .cursor-hover';

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      trail.current.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      isHovering.current = !!(e.target as Element)?.closest(INTERACTIVE);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
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
          width: "8px",
          height: "8px",
          willChange: "transform, width, height",
          transition: "width 0.1s ease-out, height 0.1s ease-out",
          borderRadius: "50%",
          background: "hsl(var(--foreground))",
        }}
      />
    </>
  );
}
