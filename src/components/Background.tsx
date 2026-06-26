"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const LINK_DIST = 130; // px: connect two nodes within this distance
const CURSOR_DIST = 150; // px: connect a node to the cursor within this distance
const SPEED = 0.12; // px/frame drift
const MAX_DPR = 2;

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    let rgb = "100, 116, 139";

    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const readColor = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-rgb")
        .trim();
      if (v) rgb = v;
    };

    const seed = () => {
      const count = Math.min(64, Math.max(24, Math.round((width * height) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2 * SPEED,
        vy: (Math.random() - 0.5) * 2 * SPEED,
      }));
    };

    const resize = () => {
      dpr = Math.min(MAX_DPR, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    // Cursor (null when absent / touch-only)
    const mouse = { x: -1, y: -1, active: false };
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Node-to-node links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const a = (1 - d / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(${rgb}, ${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Nodes (+ cursor links)
      for (const p of particles) {
        let radius = 1.4;
        let alpha = 0.5;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < CURSOR_DIST) {
            const t = 1 - d / CURSOR_DIST;
            radius = 1.4 + t * 1.1; // grow slightly near cursor
            alpha = 0.5 + t * 0.4; // brighten slightly
            ctx.strokeStyle = `rgba(${rgb}, ${t * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x += width;
        else if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        else if (p.y > height) p.y -= height;
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (raf) return;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    readColor();
    resize();

    if (reduceMotion) {
      // Static single frame — no animation, no pointer tracking.
      draw();
    } else {
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
      document.addEventListener("visibilitychange", onVisibility);
      themeQuery.addEventListener("change", readColor);
      start();
    }

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      themeQuery.removeEventListener("change", readColor);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}
