"use client";

import { useEffect, useRef } from "react";

/**
 * PremiumBackground — replaces the old tsParticles network with a
 * lightweight canvas mesh-gradient + soft floating orbs. Matches the
 * warm editorial palette (cream + navy + teal + tiny gold tint).
 *
 * Performance-conscious: uses requestAnimationFrame, respects
 * prefers-reduced-motion, and only renders on the home page.
 */
export default function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    type Orb = { x: number; y: number; r: number; vx: number; vy: number; color: string };
    let orbs: Orb[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = w < 640 ? 3 : 4;
      orbs = Array.from({ length: count }).map((_, i) => ({
        x: (w / count) * i + Math.random() * 100,
        y: h * (0.2 + Math.random() * 0.6),
        r: Math.max(120, Math.min(w, h) * (0.25 + Math.random() * 0.15)),
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        color: [
          "rgba(18, 184, 176, 0.10)",
          "rgba(10, 46, 87, 0.07)",
          "rgba(18, 184, 176, 0.06)",
          "rgba(200, 163, 106, 0.05)",
        ][i % 4],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // base cream
      ctx.fillStyle = "#FBFAF7";
      ctx.fillRect(0, 0, w, h);

      // soft orbs
      for (const o of orbs) {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = w + o.r;
        if (o.x > w + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = h + o.r;
        if (o.y > h + o.r) o.y = -o.r;

        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0, o.color);
        grad.addColorStop(1, "rgba(251, 250, 247, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduce) {
      draw(); // single frame
    } else {
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
      {/* grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
