import React, { useRef, useEffect } from 'react';
import { CrankParams } from '../types';

interface CrankVisualizerProps {
  params: CrankParams;
  angle: number;
}

const CrankVisualizer: React.FC<CrankVisualizerProps> = ({ params, angle }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width * 0.3; // Center X slightly left
    const cy = height / 2;
    const scale = 1.5;

    // Convert degrees to radians
    const theta = (angle * Math.PI) / 180;
    
    // Clear
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw Grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < width; x += 40) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
    ctx.stroke();

    // --- GEOMETRY ---
    // Crank Pin Position
    // We draw crank rotating around (cx, cy)
    const px = cx + params.crankRadius * scale * Math.cos(theta);
    const py = cy + params.crankRadius * scale * Math.sin(theta);

    // Slider Position (Piston)
    // The slider is constrained to the X-axis (y = cy)
    // x_slider = cx + x_displacement
    // Formula: x = r cos(theta) + sqrt(l^2 - r^2 sin^2(theta))
    const term1 = params.crankRadius * Math.cos(theta);
    const sinTheta = Math.sin(theta);
    const insideSqrt = Math.pow(params.rodLength, 2) - Math.pow(params.crankRadius * sinTheta, 2);
    // Safety check for impossible geometry (crank > rod)
    const term2 = insideSqrt >= 0 ? Math.sqrt(insideSqrt) : 0;
    
    const sliderX = cx + (term1 + term2) * scale;
    const sliderY = cy;

    // --- DRAWING ---

    // 1. Draw Crank Circle Path
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(71, 85, 105, 0.5)';
    ctx.setLineDash([5, 5]);
    ctx.arc(cx, cy, params.crankRadius * scale, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Draw Crank Arm
    ctx.beginPath();
    ctx.strokeStyle = '#f59e0b'; // Amber
    ctx.lineWidth = 6;
    ctx.moveTo(cx, cy);
    ctx.lineTo(px, py);
    ctx.stroke();
    // Labels
    ctx.fillStyle = '#f59e0b';
    ctx.font = '12px Arial';
    ctx.fillText('r', cx + (px-cx)/2, cy + (py-cy)/2 - 10);

    // 3. Draw Connecting Rod
    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8'; // Blue
    ctx.lineWidth = 6;
    ctx.moveTo(px, py);
    ctx.lineTo(sliderX, sliderY);
    ctx.stroke();
     // Label
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('l', px + (sliderX-px)/2, py + (sliderY-py)/2 - 10);

    // 4. Draw Slider (Piston)
    const bw = 60; // Block width
    const bh = 40; // Block height
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(sliderX - bw/2, sliderY - bh/2, bw, bh);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.strokeRect(sliderX - bw/2, sliderY - bh/2, bw, bh);

    // 5. Draw Slide Guide
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sliderX - 100, sliderY + bh/2 + 2);
    ctx.lineTo(sliderX + 100, sliderY + bh/2 + 2);
    ctx.stroke();

    // 6. Joints
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(cx, cy, 4, 0, 2*Math.PI); ctx.fill(); // Center
    ctx.beginPath(); ctx.arc(px, py, 4, 0, 2*Math.PI); ctx.fill(); // Crank Pin
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(sliderX, sliderY, 4, 0, 2*Math.PI); ctx.fill(); // Wrist Pin

    // 7. Info
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';
    ctx.fillText(`Ángulo: ${angle.toFixed(0)}°`, 10, 20);
    ctx.fillText(`Posición X: ${(sliderX/scale).toFixed(1)}`, 10, 40);

  }, [params, angle]);

  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={400} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default CrankVisualizer;