import { useEffect, useRef } from "react";

export default function ScoreRing({ value, size = 40, stroke = 4 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    const pct = value ? Math.max(0, Math.min(1, value / 10)) : 0;

    const center = size / 2;
    const radius = (size - stroke) / 2;
    const start = -Math.PI / 2;
    const end = start + pct * Math.PI * 2;

    ctx.lineWidth = stroke;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#204529";
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.stroke();

    const color = value >= 7 ? "#21d07a" : value >= 4 ? "#d2d531" : "#636363";

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(center, center, radius, start, end);
    ctx.stroke();
  }, [value, size, stroke]);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
