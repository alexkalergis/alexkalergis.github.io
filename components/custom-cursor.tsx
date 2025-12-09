"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const isClicking = useRef(false);

  useEffect(() => {
    // Hide custom cursor on mobile/touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      return;
    }

    let rafId: number;

    const updateCursor = () => {
      if (dotRef.current && ringRef.current) {
        const { x, y } = mousePos.current;
        const clickScale = isClicking.current ? 0.8 : 1;
        const hoverScale = isHovering.current ? 1.5 : 1;
        const hoverOpacity = isHovering.current ? 0.8 : 0.3;

        dotRef.current.style.transform = `translate3d(${x - 3}px, ${
          y - 3
        }px, 0) scale(${clickScale})`;
        ringRef.current.style.transform = `translate3d(${x - 12}px, ${
          y - 12
        }px, 0) scale(${hoverScale})`;
        ringRef.current.style.opacity = String(hoverOpacity);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCursor);
    };

    const handleMouseDown = () => {
      isClicking.current = true;
      updateCursor();
    };

    const handleMouseUp = () => {
      isClicking.current = false;
      updateCursor();
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
      updateCursor();
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      updateCursor();
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-hover'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Hide custom cursor on mobile/touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Small, precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gray-700 rounded-full pointer-events-none z-[9999]"
        style={{
          willChange: "transform",
          transition: "transform 0.05s linear",
        }}
      />

      {/* Larger, aesthetic ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-6 h-6 border border-gray-400 rounded-full pointer-events-none z-[9998]"
        style={{
          willChange: "transform, opacity",
          transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
        }}
      />
    </>
  );
}
