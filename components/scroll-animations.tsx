"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach((el) => {
      // Only hide elements that are below the fold
      const rect = el.getBoundingClientRect();
      const belowFold = rect.top > window.innerHeight * 0.92;
      if (belowFold) {
        el.classList.add("will-animate");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
