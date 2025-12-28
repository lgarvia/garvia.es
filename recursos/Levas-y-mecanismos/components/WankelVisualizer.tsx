import React, { useRef, useEffect } from 'react';

interface WankelVisualizerProps {
  shaftAngle: number; // 0 to 1080 degrees (3 turns of shaft = 1 turn of rotor)
}

const WankelVisualizer: React.FC<WankelVisualizerProps> = ({ shaftAngle }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    // --- Geometría Wankel ---
    // R: Radio del rotor (centro a vértice)
    // e: Excentricidad (desplazamiento del centro del rotor respecto al centro de la carcasa)
    const e = 20; 
    const R = 130; 
    
    // Normalizar ángulo del eje motriz (Eccentric Shaft)
    const theta = (shaftAngle * Math.PI) / 180; 
    
    // Centro del rotor orbita alrededor del centro de la carcasa
    const rotorCx = cx + e * Math.cos(theta);
    const rotorCy = cy + e * Math.sin(theta);
    
    // Rotación propia del rotor (1/3 de la del eje)
    const rotorAngle = theta / 3;

    // --- Lógica del Ciclo (Basada en la cara "superior" inicial) ---
    // 0 - 270: Admisión
    // 270 - 540: Compresión
    // 540 - 810: Expansión
    // 810 - 1080: Escape
    
    const cyclePos = shaftAngle % 1080;
    let cycleName = "";
    let cycleColor = "";
    let cycleDesc = "";
    let activeColor = "";

    if (cyclePos < 270) {
      cycleName = "1. ADMISIÓN";
      activeColor = "#38bdf8"; // Blue
      cycleColor = activeColor;
      cycleDesc = "La mezcla entra por la lumbrera de admisión.";
    } else if (cyclePos < 540) {
      cycleName = "2. COMPRESIÓN";
      activeColor = "#818cf8"; // Indigo
      cycleColor = activeColor;
      cycleDesc = "El rotor comprime la mezcla contra la carcasa.";
    } else if (cyclePos < 810) {
      cycleName = "3. EXPLOSIÓN";
      activeColor = "#f97316"; // Orange
      cycleColor = activeColor;
      cycleDesc = "Ignición. La expansión fuerza el giro del rotor.";
    } else {
      cycleName = "4. ESCAPE";
      activeColor = "#94a3b8"; // Gray
      cycleColor = activeColor;
      cycleDesc = "Los gases quemados salen por la lumbrera de escape.";
    }


    // Clear
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // 1. DIBUJAR CARCASA (Epitrocoide)
    ctx.beginPath();
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 5;
    
    // Fórmula paramétrica de carcasa
    for (let t = 0; t <= 2 * Math.PI + 0.1; t += 0.05) {
        const hx = cx + e * Math.cos(3 * t) + R * Math.cos(t);
        const hy = cy + e * Math.sin(3 * t) + R * Math.sin(t);
        if (t === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = '#1e293b';
    ctx.fill();

    // 2. DIBUJAR PUERTOS (Lumbreras)
    // Definir posiciones de puertos en el borde
    const drawPort = (angleStart: number, angleEnd: number, color: string, label: string) => {
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = 14;
       ctx.lineCap = 'round';
       
       // Dibujar un arco siguiendo aprox la forma de la carcasa en esa zona
       // Simplificamos usando un arco de círculo desplazado
       const portR = R + e + 5; 
       ctx.arc(cx, cy, portR, angleStart, angleEnd);
       ctx.stroke();

       // Etiqueta
       const midAngle = (angleStart + angleEnd) / 2;
       ctx.fillStyle = color;
       ctx.font = 'bold 12px Arial';
       ctx.fillText(label, cx + (portR+20)*Math.cos(midAngle)-10, cy + (portR+20)*Math.sin(midAngle));
    };

    // Puerto Admisión (Arriba Izquierda ~220 grados)
    // In Rads: ~3.8 to ~4.2
    drawPort(3.7, 4.3, '#38bdf8', 'ADM');

    // Puerto Escape (Abajo Izquierda ~140 grados)
    // In Rads: ~2.0 to ~2.6
    drawPort(2.1, 2.7, '#94a3b8', 'ESC');
    
    // Flujo Visual (Partículas)
    // Si estamos en admisión, dibujar flechas entrando
    if (cyclePos < 270) {
        const t = Date.now() / 200;
        ctx.fillStyle = '#38bdf8';
        for(let i=0; i<3; i++) {
           const offset = (t + i) % 3;
           ctx.beginPath();
           ctx.arc(cx - 100 + offset*10, cy - 100 + offset*10, 3, 0, 2*Math.PI);
           ctx.fill();
        }
    }
    // Si estamos en escape, flechas saliendo
    if (cyclePos > 810) {
        const t = Date.now() / 200;
        ctx.fillStyle = '#cbd5e1';
        for(let i=0; i<3; i++) {
           const offset = (t + i) % 3;
           ctx.beginPath();
           ctx.arc(cx - 80 - offset*10, cy + 90 + offset*10, 3, 0, 2*Math.PI);
           ctx.fill();
        }
    }


    // 3. GASES Y COMBUSTIÓN (Entre carcasa y rotor)
    ctx.save();
    
    // Rotar contexto al sistema de referencia del Rotor
    // Pero para dibujar el gas estático respecto a la cara activa es difícil.
    // Dibujamos el gas en relación al centro del rotor.
    ctx.translate(rotorCx, rotorCy);
    ctx.rotate(rotorAngle);

    // La "Cara Activa" es la definida entre Vértice 0 (0 rad) y Vértice 1 (2PI/3 rad).
    // Dibujamos un shape que represente el volumen de gas atrapado en esa cara.
    // Usamos una curva Bézier cuadrática hacia afuera para rellenar hasta la pared.
    
    ctx.beginPath();
    // Vértice 1
    ctx.moveTo(R, 0);
    // Control point lejano para llenar la cámara
    const midAngle = Math.PI / 3; // 60 grados
    const bulgeDist = R + e * 3.5; // Empujar hacia afuera para cubrir el área de la carcasa
    const midX = bulgeDist * Math.cos(midAngle);
    const midY = bulgeDist * Math.sin(midAngle);
    
    // Vértice 2
    const v2X = R * Math.cos(2 * Math.PI / 3);
    const v2Y = R * Math.sin(2 * Math.PI / 3);
    
    ctx.quadraticCurveTo(midX, midY, v2X, v2Y);
    // Cerrar por el lado del rotor (que es convexo, no plano)
    // Usamos curva inversa ligera para coincidir con el rotor
    ctx.quadraticCurveTo(R * 0.4, R * 0.8, R, 0); // Aproximación
    
    ctx.fillStyle = activeColor;
    // Opacidad pulsante para explosión
    let alpha = 0.3;
    if (cyclePos >= 540 && cyclePos < 560) alpha = 0.8; // Flash
    else if (cyclePos >= 560 && cyclePos < 810) alpha = 0.6 - (0.4 * (cyclePos-560)/250); // Fade
    
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.globalAlpha = 1.0;
    
    ctx.restore();


    // 4. DIBUJAR ROTOR (Triángulo de Reuleaux)
    ctx.save();
    ctx.translate(rotorCx, rotorCy);
    ctx.rotate(rotorAngle);

    ctx.beginPath();
    ctx.fillStyle = '#cbd5e1'; 
    ctx.strokeStyle = '#f59e0b'; // Sellos
    ctx.lineWidth = 2;

    const points = [];
    for (let i = 0; i < 3; i++) {
        const a = i * (2 * Math.PI / 3);
        points.push({ x: R * Math.cos(a), y: R * Math.sin(a) });
    }

    // Dibujar lados curvos (Reuleaux)
    ctx.moveTo(points[0].x, points[0].y);
    
    // Un triángulo de Reuleaux se forma con arcos circulares centrados en el vértice opuesto.
    // Visualmente, usamos una curva cuadrática con el punto de control un poco hacia afuera.
    const bulgeFactor = 1.25; // Qué tanto se "infla" el lado
    
    const drawReuleauxSide = (pStart: any, pEnd: any, angleOffset: number) => {
        // Punto medio del lado plano
        const midX = (pStart.x + pEnd.x) / 2;
        const midY = (pStart.y + pEnd.y) / 2;
        // Distancia al centro
        const dist = Math.sqrt(midX*midX + midY*midY);
        // Extender el punto medio hacia afuera
        const cpX = (midX / dist) * (dist * bulgeFactor);
        const cpY = (midY / dist) * (dist * bulgeFactor);
        
        ctx.quadraticCurveTo(cpX, cpY, pEnd.x, pEnd.y);
    };

    drawReuleauxSide(points[0], points[1], 0);
    drawReuleauxSide(points[1], points[2], 0);
    drawReuleauxSide(points[2], points[0], 0);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Sellos en vértices (Apex Seals)
    ctx.fillStyle = '#ef4444';
    points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
        ctx.fill();
    });

    // Círculo central (Cojinete)
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.45, 0, 2*Math.PI);
    ctx.fill();
    
    // Engranaje Interno (Estacionario relativo al rotor)
    ctx.strokeStyle = '#94a3b8';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.35, 0, 2*Math.PI);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();

    // 5. ENGRANAJE FIJO (Estator)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    ctx.fillStyle = '#64748b';
    ctx.arc(0, 0, R * 0.2, 0, 2*Math.PI); // Engranaje pequeño fijo en el centro
    ctx.fill();
    ctx.restore();
    
    // 6. BUJÍA
    ctx.save();
    ctx.translate(cx + R - 15, cy);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, -4, 25, 8);
    // Spark
    if (cyclePos >= 535 && cyclePos <= 555) {
        ctx.beginPath();
        ctx.arc(0, 0, 25, 0, 2*Math.PI);
        ctx.fillStyle = 'rgba(250, 204, 21, 0.9)';
        ctx.shadowColor = '#facc15';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    ctx.restore();


    // 7. HUD
    const barY = height - 40;
    const barH = 10;
    const barW = width - 40;
    const barX = 20;
    const segmentW = barW / 4;
    
    const drawSegment = (idx: number, color: string, active: boolean) => {
        ctx.fillStyle = active ? color : '#1e293b';
        ctx.fillRect(barX + idx * segmentW, barY, segmentW - 2, barH);
    };

    drawSegment(0, '#38bdf8', cyclePos < 270);
    drawSegment(1, '#818cf8', cyclePos >= 270 && cyclePos < 540);
    drawSegment(2, '#f97316', cyclePos >= 540 && cyclePos < 810);
    drawSegment(3, '#94a3b8', cyclePos >= 810);

    const indicatorX = barX + (cyclePos / 1080) * barW;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(indicatorX, barY - 5);
    ctx.lineTo(indicatorX - 5, barY - 12);
    ctx.lineTo(indicatorX + 5, barY - 12);
    ctx.fill();

    ctx.font = 'bold 20px Arial';
    ctx.fillStyle = activeColor;
    ctx.textAlign = 'center';
    ctx.fillText(cycleName, cx, height - 70);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(cycleDesc, cx, height - 55);

  }, [shaftAngle]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative shadow-inner">
       <div className="absolute top-4 right-4 text-xs text-slate-500 text-right">
         <div>Eje: {shaftAngle.toFixed(0)}°</div>
         <div>Ciclo: {((shaftAngle/1080)*100).toFixed(0)}%</div>
       </div>
       <canvas 
        ref={canvasRef} 
        width={400} 
        height={400} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default WankelVisualizer;