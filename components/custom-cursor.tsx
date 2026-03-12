"use client";

import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

const TRAIL_DURATION = 180;
const TRAIL_COLOR = "92, 108, 66";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
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
      trail.current = trail.current.filter(
        (p) => now - p.t < TRAIL_DURATION
      );

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = trail.current;
      if (pts.length > 2) {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);

        for (let i = 1; i < pts.length - 1; i++) {
          const mx = (pts[i].x + pts[i + 1].x) / 2;
          const my = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
        }

        const last = pts[pts.length - 1];
        ctx.lineTo(last.x, last.y);

        const first = pts[0];
        const age = now - first.t;
        const alphaStart = Math.max(0, 1 - age / TRAIL_DURATION) * 0.08;
        const alphaEnd = 0.55;

        const grad = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
        grad.addColorStop(0, `rgba(${TRAIL_COLOR}, ${alphaStart})`);
        grad.addColorStop(1, `rgba(${TRAIL_COLOR}, ${alphaEnd})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }
    };

    const tick = () => {
      drawTrail();

      if (dotRef.current && ringRef.current) {
        const { x, y } = mousePos.current;
        const clickScale = isClicking.current ? 0.8 : 1;
        const hoverScale = isHovering.current ? 1.5 : 1;
        const hoverOpacity = isHovering.current ? 0.8 : 0.3;

        dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0) scale(${clickScale})`;
        ringRef.current.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0) scale(${hoverScale})`;
        ringRef.current.style.opacity = String(hoverOpacity);
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
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: "hsl(var(--foreground))",
          willChange: "transform",
          transition: "transform 0.05s linear",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998]"
        style={{
          border: "1px solid hsl(var(--muted-foreground))",
          willChange: "transform, opacity",
          transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
        }}
      />
    </>
  );
}
