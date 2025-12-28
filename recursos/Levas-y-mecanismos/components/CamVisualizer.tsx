import React, { useRef, useEffect } from 'react';
import { CamParams, ChartDataPoint } from '../types';

interface CamVisualizerProps {
  params: CamParams;
  data: ChartDataPoint[];
  currentAngle: number;
}

const CamVisualizer: React.FC<CamVisualizerProps> = ({ params, data, currentAngle }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas dimensions
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 2.5; // Scale factor to fit cam in canvas

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0f172a'; // Match bg
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < width; x += 40) {
      ctx.moveTo(x, 0); ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += 40) {
      ctx.moveTo(0, y); ctx.lineTo(width, y);
    }
    ctx.stroke();

    // ----------------------
    // Draw The Cam Profile
    // ----------------------
    ctx.save();
    ctx.translate(centerX, centerY);
    // Rotate the CAM context. 
    // If the cam rotates clockwise, we draw it rotated by -currentAngle.
    ctx.rotate((-currentAngle * Math.PI) / 180);

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#38bdf8'; // Cyan
    ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';

    // Iterate through 360 degrees to draw shape
    if (data.length > 0) {
      const startR = params.baseRadius + data[0].displacement;
      ctx.moveTo(startR * scale, 0);

      for (let i = 1; i < data.length; i++) {
        const thetaRad = (data[i].angle * Math.PI) / 180;
        const r = (params.baseRadius + data[i].displacement) * scale;
        const x = r * Math.cos(thetaRad);
        const y = r * Math.sin(thetaRad);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Draw Base Circle Reference
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)'; // Slate 400
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.arc(0, 0, params.baseRadius * scale, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Axle (Center)
    ctx.beginPath();
    ctx.fillStyle = '#94a3b8';
    ctx.arc(0, 0, 8, 0, 2 * Math.PI);
    ctx.fill();

    // Visualize a "Point" on the cam to see rotation better
    ctx.beginPath();
    ctx.fillStyle = '#fef08a'; // Yellow dot
    ctx.arc((params.baseRadius + 5) * scale, 0, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();

    // ----------------------
    // Draw The Follower
    // ----------------------
    // The follower stays fixed on the Y-axis (screen Y, visually up)
    // Actually, in standard math, 0 degrees is usually X-axis right. 
    // To simulate a vertical follower at the "top", we interact with the cam at 90 degrees or 270?
    // Let's simplify: We assume the follower is at angle 0 relative to the cam's rotation.
    // If we rotated the cam by -currentAngle, the contact point is effectively at angle 0 in the rotated frame?
    // No, simpler: The cam rotates. The follower is fixed at Screen X+ (angle 0) for drawing simplicity, 
    // OR we fix follower at top (Screen Y-).
    
    // Let's put follower at the top (Screen Y negative).
    // The visual rotation was -currentAngle. So the point of the cam touching the top is at (currentAngle + 90) or similar.
    // To keep it simple matching the graph:
    // Graph X=Angle means Cam Angle.
    // Let's say Follower is at angle 0 of the cam when cam is at 0.
    // Visually, let's place follower at the "Right" (Angle 0).
    
    // Find current displacement for currentAngle
    // Since data is discrete (integers), find closest index
    const normalizedAngle = Math.floor(currentAngle) % 360;
    const currentPoint = data.find(d => d.angle === normalizedAngle) || { displacement: 0 };
    
    const followerX = (params.baseRadius + currentPoint.displacement) * scale;
    
    ctx.save();
    ctx.translate(centerX, centerY);
    
    // Draw Follower Stem
    ctx.beginPath();
    ctx.strokeStyle = '#f472b6'; // Pink
    ctx.lineWidth = 6;
    // From contact point outwards
    ctx.moveTo(followerX, 0);
    ctx.lineTo(followerX + 60, 0); // Stick length
    ctx.stroke();

    // Draw Roller
    ctx.beginPath();
    ctx.fillStyle = '#be185d';
    ctx.arc(followerX, 0, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Guide/Bushing
    ctx.fillStyle = '#334155';
    ctx.fillRect(params.baseRadius * scale + 60, -15, 20, 30);

    ctx.restore();

  }, [params, data, currentAngle]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
      <div className="absolute top-4 left-4 z-10 bg-slate-800/80 p-2 rounded text-xs text-white">
        <div>Ángulo: {currentAngle.toFixed(0)}°</div>
        <div>Radio Actual: {((data[Math.floor(currentAngle) % 360]?.displacement || 0) + params.baseRadius).toFixed(1)} mm</div>
      </div>
      <canvas 
        ref={canvasRef} 
        width={500} 
        height={400} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default CamVisualizer;