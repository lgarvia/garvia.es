
import { MortalityRow } from '../types';

export const generateMortalityTable = (): MortalityRow[] => {
  const table: MortalityRow[] = [];
  let lx = 100000;
  
  for (let age = 0; age <= 100; age++) {
    const qx = 0.0001 + 0.00005 * Math.pow(1.11, age);
    const clampedQx = Math.min(qx, 1.0);
    const px = 1 - clampedQx;
    const dx = Math.round(lx * clampedQx);
    
    table.push({
      age,
      lx: Math.round(lx),
      qx: Number(clampedQx.toFixed(6)),
      px: Number(px.toFixed(6)),
      dx,
    });
    
    lx -= dx;
    if (lx < 0) lx = 0;
  }
  
  return table;
};

export const MORTALITY_TABLE = generateMortalityTable();
