export enum MotionProfile {
  SHM = 'SHM', // Simple Harmonic Motion
  UNIFORM = 'UNIFORM', // Constant Velocity
  CYCLOIDAL = 'CYCLOIDAL', // Cycloidal Motion
}

export enum AppMode {
  CAM_DESIGN = 'CAM_DESIGN',
  CRANK_SLIDER = 'CRANK_SLIDER',
  FOUR_STROKE = 'FOUR_STROKE',
  WANKEL = 'WANKEL'
}

export interface CamParams {
  baseRadius: number; // mm
  lift: number; // mm
  rpm: number; // revolutions per minute
  profile: MotionProfile;
  riseAngle: number; // degrees
  fallAngle: number; // degrees
  dwell1: number; // degrees (after rise)
  // dwell2 is calculated: 360 - rise - fall - dwell1
}

export interface CrankParams {
  crankRadius: number; // mm (r)
  rodLength: number; // mm (l)
  rpm: number;
}

export interface ChartDataPoint {
  angle: number;
  displacement: number;
  velocity: number;
  acceleration: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}