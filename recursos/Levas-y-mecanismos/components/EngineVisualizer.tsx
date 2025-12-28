import React, { useRef, useEffect } from 'react';

interface EngineVisualizerProps {
  crankAngle: number; // 0 to 720 degrees
}

const EngineVisualizer: React.FC<EngineVisualizerProps> = ({ crankAngle }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    // Geometry Parameters
    const cx = width / 2;
    const cy = height * 0.65; // Crankshaft center
    const crankR = 45;   // Crank radius
    const rodL = 140;    // Connecting rod length (Must be > crankR)
    const pistonW = 110; // Piston width
    const pistonH = 70;  // Piston height
    
    // 1. Math Calculation (Strict Geometry for Constant Rod Length)
    // Normalize angle: 0 degrees = TDC (Top Dead Center)
    const thetaRad = (crankAngle * Math.PI) / 180;
    
    // Crank Pin Position (Standard Circle)
    // We assume 0 is UP (TDC). So we use sin for x, -cos for y relative to center.
    const pinX = cx + crankR * Math.sin(thetaRad);
    const pinY = cy - crankR * Math.cos(thetaRad);

    // Piston Pin Position
    // The piston is constrained to the vertical axis x = cx.
    // We know the Rod Length (hypotenuse) is constant.
    // We calculate the vertical distance component.
    const dx = pinX - cx; // Horizontal distance from center
    const dy = Math.sqrt(rodL * rodL - dx * dx); // Vertical component of rod
    
    // Piston Pin Y coordinate (Piston is above crank)
    const pistonPinY = pinY - dy;

    // Cycle Logic (0-720)
    const cyclePos = crankAngle % 720;
    let cycleName = "";
    let cycleColor = "";
    let cycleDescription = "";
    
    // Intake: 0-180
    // Compression: 180-360
    // Power: 360-540
    // Exhaust: 540-720
    
    if (cyclePos < 180) {
      cycleName = "1. ADMISIÓN";
      cycleColor = "#38bdf8"; // Blue
      cycleDescription = "Válvula abierta. Pistón baja succionando mezcla.";
    } else if (cyclePos < 360) {
      cycleName = "2. COMPRESIÓN";
      cycleColor = "#818cf8"; // Indigo
      cycleDescription = "Válvulas cerradas. Pistón sube comprimiendo.";
    } else if (cyclePos < 540) {
      cycleName = "3. EXPLOSIÓN";
      cycleColor = "#f97316"; // Orange
      cycleDescription = "Chispa. Expansión de gases empuja pistón.";
    } else {
      cycleName = "4. ESCAPE";
      cycleColor = "#94a3b8"; // Gray
      cycleDescription = "Válvula escape abierta. Gases expulsados.";
    }

    // Clear Canvas
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // --- DRAWING ---

    // 1. Combustion Chamber & Cylinder Walls
    const chamberTopY = cy - crankR - rodL - pistonH/2 - 20; // Fixed top
    
    // Cylinder Walls
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(cx - pistonW/2 - 4, chamberTopY); 
    ctx.lineTo(cx - pistonW/2 - 4, cy); // Left wall
    ctx.moveTo(cx + pistonW/2 + 4, chamberTopY);
    ctx.lineTo(cx + pistonW/2 + 4, cy); // Right wall
    ctx.stroke();

    // Chamber Background (Gas visualization)
    ctx.save();
    const pistonTopY = pistonPinY - pistonH/2;
    if (pistonTopY > chamberTopY) {
      // Base color based on cycle
      let gasColor = cycleColor;
      let alpha = 0.2;
      
      // Dynamic transparency based on compression
      if (cyclePos >= 180 && cyclePos < 360) {
         // Darker as it compresses
         alpha = 0.2 + (0.6 * (cyclePos - 180) / 180);
      }
      if (cyclePos >= 360 && cyclePos < 540) {
         // Explosion flash fading out
         gasColor = '#ef4444'; 
         alpha = 0.8 - (0.6 * (cyclePos - 360) / 180);
      }

      ctx.fillStyle = gasColor;
      ctx.globalAlpha = alpha;
      ctx.fillRect(cx - pistonW/2, chamberTopY, pistonW, pistonTopY - chamberTopY);
      
      // Draw particles/texture if needed
      ctx.globalAlpha = 1.0;
    }
    ctx.restore();

    // 2. Connecting Rod (Behind Piston)
    ctx.beginPath();
    ctx.strokeStyle = '#cbd5e1'; // Light steel
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.moveTo(pinX, pinY);
    ctx.lineTo(cx, pistonPinY);
    ctx.stroke();
    // Inner line for detail
    ctx.beginPath();
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.moveTo(pinX, pinY);
    ctx.lineTo(cx, pistonPinY);
    ctx.stroke();

    // 3. Crankshaft (Web and Counterweight)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(thetaRad); // Rotate strictly by angle
    
    // Counterweight (Opposite to pin)
    ctx.beginPath();
    ctx.fillStyle = '#334155';
    ctx.arc(0, 0, crankR + 10, Math.PI, 0); // Semicircle bottom
    ctx.lineTo(0, 20); // Connect to center
    ctx.fill();

    // Web
    ctx.beginPath();
    ctx.fillStyle = '#475569';
    ctx.roundRect(-20, -10, 40, crankR + 10, 5);
    ctx.fill();

    ctx.restore();

    // Crank Pin Joint
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(pinX, pinY, 12, 0, 2*Math.PI); ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath(); ctx.arc(pinX, pinY, 5, 0, 2*Math.PI); ctx.fill();


    // 4. Piston
    ctx.save();
    ctx.translate(cx - pistonW/2, pistonPinY - pistonH/2);
    
    // Main Body
    const gradPiston = ctx.createLinearGradient(0, 0, pistonW, 0);
    gradPiston.addColorStop(0, '#64748b');
    gradPiston.addColorStop(0.5, '#94a3b8');
    gradPiston.addColorStop(1, '#64748b');
    ctx.fillStyle = gradPiston;
    ctx.fillRect(0, 0, pistonW, pistonH);
    
    // Rings
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, 10, pistonW, 3);
    ctx.fillRect(0, 20, pistonW, 3);
    
    // Wrist Pin Hole
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(pistonW/2, pistonH/2, 8, 0, 2*Math.PI);
    ctx.fill();
    
    ctx.restore();


    // 5. Head & Valves
    const headY = chamberTopY;
    const valveDist = 35; // Distance from center
    const valveStemL = 50;
    
    // Draw Head Block
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - pistonW/2 - 10, headY - 80, pistonW + 20, 80);

    // Intake Logic (Opens 0-180, starts slightly before, ends slightly after in real engines, but simplified here)
    // To make it look smoother, use a sine wave for lift during 0-180
    let intakeLift = 0;
    if (cyclePos < 180) {
       intakeLift = 10 * Math.sin((cyclePos * Math.PI) / 180);
    }
    
    // Exhaust Logic (Opens 540-720)
    let exhaustLift = 0;
    if (cyclePos > 540) {
       exhaustLift = 10 * Math.sin(((cyclePos - 540) * Math.PI) / 180);
    }

    // Helper to draw Valve
    const drawValve = (x: number, y: number, lift: number, color: string) => {
       ctx.save();
       ctx.translate(x, y + lift);
       
       // Stem
       ctx.strokeStyle = '#cbd5e1';
       ctx.lineWidth = 4;
       ctx.beginPath();
       ctx.moveTo(0, 0);
       ctx.lineTo(0, -valveStemL);
       ctx.stroke();
       
       // Head
       ctx.fillStyle = '#cbd5e1';
       ctx.beginPath();
       ctx.moveTo(-15, 0);
       ctx.lineTo(15, 0);
       ctx.lineTo(5, -5);
       ctx.lineTo(-5, -5);
       ctx.fill();

       // Spring (Zigzag)
       ctx.strokeStyle = '#64748b';
       ctx.lineWidth = 1;
       ctx.beginPath();
       ctx.moveTo(-6, -valveStemL);
       for(let i=0; i<8; i++) {
         ctx.lineTo(i%2===0 ? 6 : -6, -valveStemL + (i * 5) + (lift/2)); 
       }
       ctx.stroke();

       ctx.restore();
    };

    // Draw Intake Valve (Left)
    drawValve(cx - valveDist, headY, intakeLift, '#38bdf8');
    
    // Draw Exhaust Valve (Right)
    drawValve(cx + valveDist, headY, exhaustLift, '#ef4444');

    // 6. Cams (Above Valves)
    // Camshaft speed = 1/2 Crankshaft speed
    const camShaftY = headY - valveStemL - 15;
    const camRad = 13;

    // Draw Cam Helper
    const drawCam = (x: number, offsetRad: number) => {
        ctx.save();
        ctx.translate(x, camShaftY);
        
        // Cam Rotation:
        // Crank Angle = thetaRad.
        // Cam Angle = thetaRad / 2.
        // Rotation Direction: Clockwise for this visual.
        // We apply the offset so the lobe hits the valve at the right time.
        
        ctx.rotate((thetaRad / 2) + offsetRad);
        
        ctx.fillStyle = '#f59e0b'; // Amber
        ctx.beginPath();
        // Base Circle
        ctx.arc(0, 0, camRad, 0, 2*Math.PI);
        ctx.fill();
        
        // Lobe (Nose)
        // Drawn pointing "Down" relative to the local rotated context
        ctx.beginPath();
        ctx.moveTo(-camRad, 0);
        ctx.quadraticCurveTo(0, camRad * 2.5, camRad, 0);
        ctx.fill();
        
        // Pivot/Shaft
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(0, 0, 5, 0, 2*Math.PI); ctx.fill();

        ctx.restore();
    };

    // INTAKE CAM SYNCHRONIZATION:
    // Intake Max Lift is at ~90 deg Crank.
    // At Crank 90, Cam Angle is 45 (PI/4).
    // Visually, the lobe needs to point DOWN (Angle PI/2) to push the valve.
    // So: CurrentCamAngle (PI/4) + Offset = PI/2.
    // Offset = PI/2 - PI/4 = PI/4 (45 degrees).
    drawCam(cx - valveDist, Math.PI / 4);

    // EXHAUST CAM SYNCHRONIZATION:
    // Exhaust Max Lift is at ~630 deg Crank.
    // At Crank 630, Cam Angle is 315 (1.75 * PI).
    // Visually, lobe needs to point DOWN (Angle 0.5 * PI or 2.5 * PI).
    // 1.75 * PI + Offset = 2.5 * PI.
    // Offset = 0.75 * PI (135 degrees).
    drawCam(cx + valveDist, 0.75 * Math.PI);


    // 7. Spark Plug & Effects
    ctx.fillStyle = '#fff';
    ctx.fillRect(cx - 4, headY - 25, 8, 25); // Plug body
    
    // Spark Logic (Near TDC Combustion, ~360)
    if (cyclePos >= 358 && cyclePos <= 365) {
       ctx.strokeStyle = '#facc15';
       ctx.lineWidth = 4;
       ctx.shadowColor = '#facc15';
       ctx.shadowBlur = 15;
       ctx.beginPath();
       ctx.moveTo(cx - 3, headY);
       ctx.lineTo(cx + 3, headY + 5);
       ctx.lineTo(cx - 3, headY + 10);
       ctx.stroke();
       ctx.shadowBlur = 0;
    }

    // Intake Flow Arrows (Blue)
    if (intakeLift > 2) {
       ctx.strokeStyle = '#38bdf8';
       ctx.fillStyle = '#38bdf8';
       ctx.lineWidth = 2;
       ctx.beginPath();
       // Arrow entering
       ctx.moveTo(cx - valveDist - 20, headY - 30);
       ctx.quadraticCurveTo(cx - valveDist, headY, cx - valveDist + 5, headY + 20);
       ctx.stroke();
       // Arrow head
       ctx.beginPath();
       ctx.moveTo(cx - valveDist + 5, headY + 20);
       ctx.lineTo(cx - valveDist, headY + 15);
       ctx.lineTo(cx - valveDist + 10, headY + 15);
       ctx.fill();
    }

    // Exhaust Flow Arrows (Gray)
    if (exhaustLift > 2) {
       ctx.strokeStyle = '#94a3b8';
       ctx.fillStyle = '#94a3b8';
       ctx.lineWidth = 2;
       ctx.beginPath();
       // Arrow exiting
       ctx.moveTo(cx + valveDist - 5, headY + 20);
       ctx.quadraticCurveTo(cx + valveDist, headY, cx + valveDist + 20, headY - 30);
       ctx.stroke();
       // Arrow head
       ctx.beginPath();
       ctx.moveTo(cx + valveDist + 20, headY - 30);
       ctx.lineTo(cx + valveDist + 15, headY - 25);
       ctx.lineTo(cx + valveDist + 25, headY - 25);
       ctx.fill();
    }


    // 8. HUD / Status Display
    
    // Background bar for phases
    const barY = height - 40;
    const barH = 10;
    const barW = width - 40;
    const barX = 20;
    
    // Draw 4 segments
    const segmentW = barW / 4;
    
    const drawSegment = (idx: number, color: string, active: boolean) => {
        ctx.fillStyle = active ? color : '#1e293b';
        ctx.fillRect(barX + idx * segmentW, barY, segmentW - 2, barH);
        if (active) {
            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
            ctx.fillRect(barX + idx * segmentW, barY, segmentW - 2, barH);
            ctx.shadowBlur = 0;
        }
    };

    drawSegment(0, '#38bdf8', cyclePos < 180);
    drawSegment(1, '#818cf8', cyclePos >= 180 && cyclePos < 360);
    drawSegment(2, '#f97316', cyclePos >= 360 && cyclePos < 540);
    drawSegment(3, '#94a3b8', cyclePos >= 540);

    // Indicator Triangle
    const indicatorX = barX + (cyclePos / 720) * barW;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(indicatorX, barY - 5);
    ctx.lineTo(indicatorX - 5, barY - 12);
    ctx.lineTo(indicatorX + 5, barY - 12);
    ctx.fill();

    // Large Text
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = cycleColor;
    ctx.textAlign = 'center';
    ctx.fillText(cycleName, cx, height - 70);
    
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(cycleDescription, cx, height - 50);

  }, [crankAngle]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative shadow-inner">
       <canvas 
        ref={canvasRef} 
        width={400} 
        height={550} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default EngineVisualizer;