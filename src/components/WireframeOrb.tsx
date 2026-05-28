import { useEffect, useRef } from "react";

const WireframeOrb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const size = 320;
    canvas.width = size;
    canvas.height = size;
    let angle = 0;
    let animId: number;

    // Generate icosphere-like points
    const points: [number, number, number][] = [];
    const edges: [number, number][] = [];
    const R = 120;
    const latSteps = 8;
    const lonSteps = 12;

    for (let i = 0; i <= latSteps; i++) {
      const lat = (Math.PI * i) / latSteps;
      for (let j = 0; j < lonSteps; j++) {
        const lon = (2 * Math.PI * j) / lonSteps;
        points.push([
          R * Math.sin(lat) * Math.cos(lon),
          R * Math.cos(lat),
          R * Math.sin(lat) * Math.sin(lon),
        ]);
      }
    }

    // Connect edges
    for (let i = 0; i <= latSteps; i++) {
      for (let j = 0; j < lonSteps; j++) {
        const curr = i * lonSteps + j;
        const next = i * lonSteps + ((j + 1) % lonSteps);
        if (curr < points.length && next < points.length) edges.push([curr, next]);
        const below = (i + 1) * lonSteps + j;
        if (below < points.length) edges.push([curr, below]);
      }
    }

    const project = (p: [number, number, number]): [number, number] => {
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const x = p[0] * cosA - p[2] * sinA;
      const z = p[0] * sinA + p[2] * cosA;
      const cosB = Math.cos(0.3);
      const sinB = Math.sin(0.3);
      const y = p[1] * cosB - z * sinB;
      return [x + size / 2, y + size / 2];
    };

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.strokeStyle = "hsla(43, 90%, 50%, 0.25)";
      ctx.lineWidth = 0.8;

      edges.forEach(([a, b]) => {
        const [x1, y1] = project(points[a]);
        const [x2, y2] = project(points[b]);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // Draw vertices
      points.forEach((p) => {
        const [x, y] = project(p);
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(43, 90%, 50%, 0.5)";
        ctx.fill();
      });

      angle += 0.005;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
      style={{ width: 320, height: 320 }}
    />
  );
};

export default WireframeOrb;
