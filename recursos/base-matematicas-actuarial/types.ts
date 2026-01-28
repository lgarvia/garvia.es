
export interface MortalityRow {
  age: number;
  lx: number; // Survivors at age x
  qx: number; // Probability of dying at age x
  px: number; // Probability of surviving at age x
  dx: number; // Deaths at age x
}

export interface SimulationResult {
  year: number;
  survivalProb: number;
  presentValueFactor: number;
  actuarialPV: number;
  fixedPV: number;
}

export interface CapitalPath {
  time: number;
  capital: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
