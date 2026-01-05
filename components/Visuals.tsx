import React from 'react';
import { motion } from 'framer-motion';
import { VisualProps } from '../types';

// CONFIG
const TRANSITION = { duration: 2, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };
const LOOP = { duration: 4, repeat: Infinity, ease: "linear" as const };
const RED = "#D80000"; 

// --- NEW UTILITY METAPHORS (ADDED) ---

// 1. Bottleneck (Narrowing flow)
export const BottleneckVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M10 20 L30 45 L30 55 L10 80" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M90 20 L70 45 L70 55 L90 80" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.circle cx="50" cy="20" r="4" fill="currentColor" animate={{ y: [0, 25, 60], opacity: [1, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="50" cy="20" r="4" fill={RED} animate={{ y: [0, 25, 60], opacity: [1, 1, 0] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
    <motion.circle cx="50" cy="20" r="4" fill="currentColor" animate={{ y: [0, 25, 60], opacity: [1, 1, 0] }} transition={{ duration: 2, delay: 1.0, repeat: Infinity }} />
  </svg>
);

// 2. Alignment (Shapes lining up)
export const AlignmentVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="50" y1="10" x2="50" y2="90" stroke={RED} strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
    {[20, 50, 80].map((y, i) => (
      <motion.rect 
        key={i} 
        x="40" y={y} width="20" height="10" 
        fill={i === 1 ? RED : "currentColor"}
        initial={{ x: i === 0 ? -20 : i === 2 ? 20 : 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }}
      />
    ))}
  </svg>
);

// 3. Fragmentation (Breaking apart)
export const FragmentationVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g transform="translate(50, 50)">
        <motion.rect x="-15" y="-15" width="14" height="14" fill="currentColor" animate={{ x: [-15, -25, -15], y: [-15, -25, -15] }} transition={TRANSITION} />
        <motion.rect x="1" y="-15" width="14" height="14" fill={RED} animate={{ x: [1, 15, 1], y: [-15, -20, -15] }} transition={TRANSITION} />
        <motion.rect x="-15" y="1" width="14" height="14" fill="currentColor" animate={{ x: [-15, -20, -15], y: [1, 15, 1] }} transition={TRANSITION} />
        <motion.rect x="1" y="1" width="14" height="14" fill="currentColor" animate={{ x: [1, 25, 1], y: [1, 25, 1] }} transition={TRANSITION} />
    </g>
  </svg>
);

// 4. Integration (Puzzle/Merging)
export const IntegrationVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.rect x="20" y="35" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" animate={{ x: [0, 15, 0] }} transition={TRANSITION} />
    <motion.rect x="50" y="35" width="30" height="30" stroke={RED} strokeWidth="2" fill="none" animate={{ x: [0, -15, 0] }} transition={TRANSITION} />
    <motion.rect x="42" y="42" width="16" height="16" fill={RED} opacity="0" animate={{ opacity: [0, 1, 0] }} transition={TRANSITION} />
  </svg>
);

// --- EXISTING METAPHORS ---

// LOOP 1: Audit / Steps / Verification
export const AuditVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.path d="M10 50 H90" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
    <motion.g animate={{ x: [0, 40, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}>
      <rect x="25" y="35" width="30" height="30" rx="4" stroke={RED} strokeWidth="2" fill="none" />
      <motion.path d="M32 50 L38 56 L48 44" stroke={RED} strokeWidth="2" fill="none" 
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ pathLength: 1, opacity: [0, 1, 0] }} 
        transition={{ duration: 2, repeat: Infinity, times: [0, 0.5, 1] }} 
      />
    </motion.g>
    {[20, 40, 60, 80].map((x, i) => (
      <circle key={i} cx={x} cy="50" r="2" fill="currentColor" />
    ))}
  </svg>
);

// LOOP 2: Tangle / Orchestration / Overload
export const TangleVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {[1, 2, 3, 4].map((i) => (
      <motion.path 
        key={i}
        d={`M${20*i} 20 Q ${50 + (i%2 ? 20 : -20)} 50 ${20*i} 80`} 
        stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5"
        animate={{ d: [`M${20*i} 20 Q ${50 + (i%2 ? 20 : -20)} 50 ${20*i} 80`, `M${20*i} 20 Q ${50 - (i%2 ? 20 : -20)} 50 ${20*i} 80`] }}
        transition={{ duration: 3 + i, repeat: Infinity, repeatType: "mirror" as const }}
      />
    ))}
    <motion.circle cx="50" cy="50" r="15" stroke={RED} strokeWidth="2" fill="none" animate={{ scale: [1, 1.1, 1] }} transition={TRANSITION} />
    <motion.path d="M40 40 L60 60 M60 40 L40 60" stroke={RED} strokeWidth="2" />
  </svg>
);

// LOOP 3: Shield / Sovereignty
export const ShieldVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    <motion.path 
      d="M50 20 A 30 30 0 0 1 80 50 A 30 30 0 0 1 50 80 A 30 30 0 0 1 20 50 A 30 30 0 0 1 50 20" 
      stroke={RED} strokeWidth="2" fill="none" strokeDasharray="10 5"
      animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }} 
    />
    <motion.circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    <motion.line x1="50" y1="10" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// LOOP 4: Factory / Synthetic Data
export const FactoryVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="2" />
    {[0, 1, 2].map((i) => (
      <motion.rect key={i} x="10" y="60" width="15" height="15" stroke={RED} strokeWidth="2" fill="none"
        animate={{ x: [0, 30, 60, 90], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "linear" as const }}
      />
    ))}
    <motion.rect x="40" y="30" width="20" height="40" fill="currentColor" animate={{ y: [30, 50, 30] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// LOOP 5: Whisper / Privacy / Hidden
export const WhisperVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g opacity="0.1">
       <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none"/>
       <path d="M10 50 H90 M50 10 V90" stroke="currentColor" />
    </g>
    <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.rect x="40" y="40" width="20" height="20" fill={RED} animate={{ opacity: [1, 0.5, 1] }} transition={TRANSITION} />
    <path d="M45 35 V30 A 5 5 0 0 1 55 30 V35" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

// LOOP 6: Battery / Energy / Heat
export const BatteryVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="30" y="20" width="40" height="60" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="40" y="10" width="20" height="10" fill="currentColor" />
    <motion.rect x="35" y="75" width="30" height="0" fill={RED}
      animate={{ height: 50, y: 25 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" as const }} 
    />
    <motion.path d="M80 30 L90 20 M80 50 L95 50 M80 70 L90 80" stroke={RED} strokeWidth="2" 
      animate={{ opacity: [0, 1, 0], x: [0, 5, 0] }} transition={TRANSITION} />
  </svg>
);

// LOOP 7: Pen / Authorship / Identity
export const PenVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="25" y="10" width="50" height="80" stroke="currentColor" strokeWidth="1" fill="none" />
    <g opacity="0.2">
      <line x1="35" y1="25" x2="65" y2="25" stroke="currentColor" strokeWidth="1" />
      <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="1" />
      <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="1" />
    </g>
    <motion.rect x="35" y="55" width="30" height="25" fill={RED} opacity="0.1" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={TRANSITION} />
    <motion.path d="M35 55 L35 80" stroke={RED} strokeWidth="2" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
  </svg>
);

// LOOP 8: Globe / Divergence
export const GlobeVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path d="M50 20 V 80" stroke="currentColor" strokeWidth="1" />
    <motion.path 
      d="M50 20 A 30 30 0 0 1 80 50" stroke={RED} strokeWidth="3" fill="none" 
      animate={{ d: ["M50 20 A 30 30 0 0 1 80 50", "M50 20 A 30 30 0 0 0 20 50"] }} 
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }} 
    />
  </svg>
);

// LOOP 9: Scale / Values
export const ScaleVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M50 80 L40 95 L60 95 Z" fill="currentColor" />
    <motion.line 
      x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" 
      animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }} 
    />
    <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}>
      <line x1="20" y1="50" x2="20" y2="70" stroke="currentColor" strokeWidth="1" />
      <rect x="10" y="70" width="20" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="20" cy="65" r="3" fill={RED} />
    </motion.g>
    <motion.g animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}>
      <line x1="80" y1="50" x2="80" y2="70" stroke="currentColor" strokeWidth="1" />
      <rect x="70" y="70" width="20" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="75" y="60" width="10" height="10" fill={RED} opacity="0.5" />
    </motion.g>
  </svg>
);

// LOOP 10: Mask / Intimacy
export const MaskVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M30 40 Q 50 80 70 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    <motion.path 
      d="M35 35 Q 50 10 65 35 Q 65 60 50 65 Q 35 60 35 35" fill="none" stroke={RED} strokeWidth="2"
      animate={{ y: [0, -5, 0] }} transition={TRANSITION} 
    />
    <circle cx="43" cy="35" r="2" fill={RED} />
    <circle cx="57" cy="35" r="2" fill={RED} />
  </svg>
);


// --- UTILITY METAPHORS ---

export const GapVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="80" x2="60" y2="80" stroke="currentColor" strokeWidth="2" />
    <motion.circle cx="75" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray="20 10" animate={{ rotate: 360 }} transition={LOOP} />
    <motion.path d="M10 80 Q 50 80 90 10" fill="transparent" stroke={RED} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" as const }} />
  </svg>
);

export const FilterVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g fill="currentColor" opacity="0.2">
      {Array.from({ length: 64 }).map((_, i) => (
        <rect key={i} x={10 + (i % 8) * 8} y={5 + Math.floor(i / 8) * 8} width="4" height="4" />
      ))}
    </g>
    <path d="M10 75 L45 85 L45 95 L55 95 L55 85 L90 75" fill="none" stroke="currentColor" strokeWidth="1" />
    <motion.rect x="46" y="86" width="8" height="8" fill={RED} animate={{ opacity: [0.5, 1, 0.5] }} transition={TRANSITION} />
  </svg>
);

export const TrustVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="50" cy="50" r="10" fill="currentColor" />
    <motion.circle cx="50" cy="50" r="20" stroke={RED} strokeWidth="2" fill="none" strokeDasharray="10 5" animate={{ rotate: -360 }} transition={{ ...LOOP, duration: 10 }} />
    <motion.path d="M50 10 L80 30 V60 L50 90 L20 60 V30 Z" fill="none" stroke={RED} strokeWidth="3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} />
  </svg>
);

export const ContextVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g stroke="currentColor" strokeWidth="1" opacity="0.3">
      {Array.from({ length: 15 }).map((_, i) => (
        <line key={i} x1={Math.random() * 100} y1={Math.random() * 100} x2={Math.random() * 100} y2={Math.random() * 100} />
      ))}
    </g>
    <motion.rect x="30" y="30" width="40" height="40" stroke={RED} strokeWidth="3" fill="none" animate={{ scale: [1, 1.05, 1] }} transition={TRANSITION} />
    <rect x="45" y="45" width="10" height="10" fill={RED} />
  </svg>
);

export const CentaurVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect x="10" y="10" width="40" height="80" fill="url(#grid)" stroke="currentColor" strokeWidth="2" />
    <motion.path d="M50 10 C 80 10, 80 50, 60 50 C 40 50, 80 90, 50 90" fill="none" stroke={RED} strokeWidth="4" strokeLinecap="round" animate={{ d: ["M50 10 C 80 10, 80 50, 60 50 C 40 50, 80 90, 50 90", "M50 10 C 70 20, 90 40, 60 50 C 30 60, 70 80, 50 90", "M50 10 C 80 10, 80 50, 60 50 C 40 50, 80 90, 50 90"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }} />
  </svg>
);

export const MeaningVisual: React.FC<VisualProps> = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="30" cy="30" r="5" stroke="currentColor" fill="none" animate={{y: -10}} transition={TRANSITION}/>
    <motion.circle cx="70" cy="20" r="8" stroke="currentColor" fill="none" animate={{y: -15}} transition={{...TRANSITION, delay: 0.5}}/>
    <path d="M50 40 L50 80" stroke={RED} strokeWidth="2" />
    <motion.rect x="40" y="80" width="20" height="15" fill={RED} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, type: "spring" }} />
  </svg>
);

export const VelocityVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {[0, 20, 40].map((y, i) => (
      <motion.line key={i} x1="-20" y1={30 + y} x2="40" y2={30 + y} stroke={RED} strokeWidth="4" strokeLinecap="round"
        animate={{ x: [0, 150] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" as const, delay: i * 0.2 }} />
    ))}
  </svg>
);

export const StagnationVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.rect x="40" y="40" width="20" height="20" fill={RED}
      animate={{ rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
  </svg>
);

export const OrbitVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="15" fill="currentColor" />
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
    <motion.circle cx="50" cy="15" r="5" fill={RED}
      animate={{ rotate: 360 }} style={{ originX: "50px", originY: "50px" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" as const }} />
  </svg>
);

export const CollisionVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="20" cy="50" r="10" fill="currentColor" animate={{ x: [0, 25, 0] }} transition={TRANSITION} />
    <motion.circle cx="80" cy="50" r="10" fill={RED} animate={{ x: [0, -25, 0] }} transition={TRANSITION} />
    <motion.path d="M45 40 L55 60 M55 40 L45 60" stroke={RED} strokeWidth="2" opacity="0" animate={{ opacity: [0, 1, 0] }} transition={TRANSITION} />
  </svg>
);

export const DivergenceVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="3" />
    <motion.path d="M40 50 Q 70 50 90 20" fill="none" stroke={RED} strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={TRANSITION} />
    <motion.path d="M40 50 Q 70 50 90 80" fill="none" stroke="currentColor" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={TRANSITION} />
  </svg>
);

export const ConvergenceVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M10 20 Q 30 50 60 50" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M10 80 Q 30 50 60 50" fill="none" stroke={RED} strokeWidth="3" />
    <motion.line x1="60" y1="50" x2="90" y2="50" stroke={RED} strokeWidth="3" strokeDasharray="5 2" animate={{ strokeDashoffset: -20 }} transition={LOOP} />
  </svg>
);

export const LoopVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.path d="M30 50 C 30 30, 70 30, 70 50 C 70 70, 30 70, 30 50 Z" stroke={RED} strokeWidth="3" fill="none"
      strokeDasharray="10 10" animate={{ strokeDashoffset: 100 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }} />
  </svg>
);

export const CycleVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g transform="translate(50,50)">
      {[0, 90, 180, 270].map((r, i) => (
        <motion.rect key={i} x="-5" y="-35" width="10" height="10" fill={i === 0 ? RED : "currentColor"}
          animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }} />
      ))}
    </g>
  </svg>
);

export const LinearVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="80" x2="90" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
    <motion.circle cx="10" cy="80" r="6" fill={RED} animate={{ cx: 90, cy: 20 }} transition={TRANSITION} />
  </svg>
);

export const ExponentialVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M10 90 Q 50 90 90 10" stroke="currentColor" strokeWidth="1" fill="none" />
    <motion.circle r="6" fill={RED} animate={{ cx: [10, 50, 90], cy: [90, 85, 10] }} transition={{ duration: 2, repeat: Infinity, ease: "easeIn" as const }} />
  </svg>
);

export const NetworkVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
    <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="1" />
    <motion.circle cx="50" cy="50" r="8" fill={RED} animate={{ scale: [1, 1.2, 1] }} transition={TRANSITION} />
    <circle cx="20" cy="20" r="5" fill="currentColor" />
    <circle cx="80" cy="80" r="5" fill="currentColor" />
    <circle cx="80" cy="20" r="5" fill="currentColor" />
    <circle cx="20" cy="80" r="5" fill="currentColor" />
  </svg>
);

export const SiloVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="20" y="20" width="20" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="60" y="20" width="20" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.circle cx="30" cy="50" r="5" fill={RED} animate={{ y: [0, 20, 0] }} transition={TRANSITION} />
    <motion.circle cx="70" cy="50" r="5" fill={RED} animate={{ y: [0, -20, 0] }} transition={{ ...TRANSITION, delay: 0.5 }} />
  </svg>
);

export const HierarchyVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="45" y="10" width="10" height="10" fill={RED} />
    <g fill="currentColor">
      <rect x="35" y="30" width="10" height="10" />
      <rect x="55" y="30" width="10" height="10" />
      <rect x="25" y="50" width="10" height="10" />
      <rect x="45" y="50" width="10" height="10" />
      <rect x="65" y="50" width="10" height="10" />
    </g>
    <motion.path d="M50 20 L50 30 M40 40 L30 50" stroke="currentColor" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={TRANSITION} />
  </svg>
);

export const FlatVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.line x1="10" y1="50" x2="90" y2="50" stroke={RED} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={TRANSITION} />
    <circle cx="20" cy="50" r="5" fill="currentColor" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    <circle cx="80" cy="50" r="5" fill="currentColor" />
  </svg>
);

export const GridVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g fill="currentColor" opacity="0.3">
      {Array.from({ length: 16 }).map((_, i) => (
        <circle key={i} cx={20 + (i % 4) * 20} cy={20 + Math.floor(i / 4) * 20} r="2" />
      ))}
    </g>
    <motion.rect x="15" y="15" width="30" height="30" stroke={RED} strokeWidth="2" fill="none"
      animate={{ x: [0, 40, 0], y: [0, 40, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }} />
  </svg>
);

export const StackVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {[0, 10, 20].map((y, i) => (
      <motion.rect key={i} x="30" y={60 - y} width="40" height="8" fill={i === 2 ? RED : "currentColor"}
        animate={{ y: [60 - y, 50 - y, 60 - y] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }} />
    ))}
  </svg>
);

export const QueueVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
    {[0, 20, 40, 60].map((x, i) => (
      <motion.circle key={i} cx={20 + x} cy="50" r="5" fill={i === 0 ? RED : "currentColor"}
        animate={{ cx: [20 + x, 40 + x] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" as const }} />
    ))}
  </svg>
);

export const BridgeVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="10" y="40" width="20" height="40" fill="currentColor" />
    <rect x="70" y="40" width="20" height="40" fill="currentColor" />
    <motion.line x1="30" y1="45" x2="70" y2="45" stroke={RED} strokeWidth="4"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={TRANSITION} />
  </svg>
);

export const BarrierVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="4" />
    <motion.circle cx="30" cy="50" r="8" fill={RED} animate={{ cx: [20, 40, 20] }} transition={{ duration: 0.5, repeat: Infinity }} />
  </svg>
);

export const PortalVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.circle cx="50" cy="50" r="0" fill={RED} opacity="0.5"
      animate={{ r: [0, 30] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" as const }} />
  </svg>
);

export const SyncVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="30" cy="50" r="10" fill="currentColor" animate={{ scale: [1, 1.2, 1] }} transition={TRANSITION} />
    <motion.circle cx="70" cy="50" r="10" fill={RED} animate={{ scale: [1, 1.2, 1] }} transition={TRANSITION} />
    <line x1="40" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

export const AsyncVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.rect x="25" y="45" width="10" height="10" fill="currentColor" animate={{ y: [0, -20, 0] }} transition={TRANSITION} />
    <motion.rect x="65" y="45" width="10" height="10" fill={RED} animate={{ y: [0, 20, 0] }} transition={TRANSITION} />
  </svg>
);

export const BalanceVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M45 80 L55 80 L50 70 Z" fill="currentColor" />
    <motion.line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="2" animate={{ rotate: [-10, 10, -10] }} transition={TRANSITION} />
    <motion.circle cx="20" cy="60" r="8" fill={RED} animate={{ y: [-15, 5, -15] }} transition={TRANSITION} />
    <motion.rect x="75" y="52" width="10" height="10" fill="currentColor" animate={{ y: [5, -15, 5] }} transition={TRANSITION} />
  </svg>
);

export const FrictionVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g transform="translate(45, 20)">
      <motion.rect width="10" height="60" fill="currentColor" />
    </g>
    <g transform="translate(55, 20)">
      <motion.rect width="10" height="60" fill={RED} animate={{ y: [0, 10, -5, 5, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
    </g>
    <path d="M50 30 L60 40 M50 50 L60 60" stroke="white" strokeWidth="2" />
  </svg>
);

export const EchoVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="5" fill={RED} />
    {[1, 2, 3].map(i => (
      <motion.circle key={i} cx="50" cy="50" r={5 + i * 10} stroke="currentColor" strokeWidth="1" fill="none"
        animate={{ opacity: [1, 0] }} transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }} />
    ))}
  </svg>
);

export const MirrorVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
    <motion.rect x="20" y="40" width="20" height="20" fill="currentColor" animate={{ x: [0, 5, 0] }} transition={TRANSITION} />
    <motion.rect x="60" y="40" width="20" height="20" stroke={RED} strokeWidth="2" fill="none" animate={{ x: [0, -5, 0] }} transition={TRANSITION} />
  </svg>
);

export const ShadowVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="40" cy="40" r="10" fill={RED} animate={{ x: [0, 20, 0], y: [0, 20, 0] }} transition={TRANSITION} />
    <motion.circle cx="45" cy="45" r="10" fill="currentColor" opacity="0.2" animate={{ x: [0, 20, 0], y: [0, 20, 0] }} transition={{ ...TRANSITION, delay: 0.2 }} />
  </svg>
);

export const SourceVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((r, i) => (
      <motion.line key={i} x1="50" y1="50" x2="50" y2="20" stroke={RED} strokeWidth="2" transform={`rotate(${r} 50 50)`}
        strokeDasharray="30" animate={{ strokeDashoffset: [30, 0] }} transition={{ duration: 1, repeat: Infinity }} />
    ))}
  </svg>
);

export const TargetVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }} />
    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
    <motion.circle cx="50" cy="50" r="5" fill={RED} animate={{ scale: [1, 1.5, 1] }} transition={TRANSITION} />
  </svg>
);

export const ExchangeVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="30" cy="50" r="8" fill="currentColor" animate={{ cx: [30, 70, 30] }} transition={TRANSITION} />
    <motion.circle cx="70" cy="50" r="8" stroke={RED} strokeWidth="2" fill="none" animate={{ cx: [70, 30, 70] }} transition={TRANSITION} />
  </svg>
);

export const ClarityVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="50" cy="50" r="20" fill={RED} animate={{ filter: ["blur(10px)", "blur(0px)", "blur(10px)"] }} transition={TRANSITION} />
  </svg>
);

export const BlurVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g>
        <rect x="30" y="30" width="40" height="40" fill="currentColor" />
        <motion.rect x="35" y="35" width="40" height="40" stroke={RED} strokeWidth="2" fill="none" animate={{ x: [35, 45, 35], y: [35, 25, 35], opacity: [0.5, 0, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }} />
    </g>
  </svg>
);

export const NoiseVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.line key={i} x1={Math.random() * 100} y1={Math.random() * 100} x2={Math.random() * 100} y2={Math.random() * 100} stroke="currentColor" strokeWidth="1"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.2, repeat: Infinity, delay: Math.random() }} />
    ))}
  </svg>
);

export const SignalVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <motion.path d="M10 50 Q 30 20 50 50 T 90 50" fill="none" stroke={RED} strokeWidth="2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={TRANSITION} />
  </svg>
);

export const OverloadVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="30" y="20" width="40" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.rect x="30" y="80" width="40" height="0" fill={RED} animate={{ height: [0, 60], y: [80, 20] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

export const EmptyVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.line x1="30" y1="70" x2="70" y2="30" stroke={RED} strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={TRANSITION} />
  </svg>
);

export const LockedVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="35" y="40" width="30" height="25" fill="currentColor" />
    <path d="M35 40 V 30 A 15 15 0 0 1 65 30 V 40" stroke="currentColor" strokeWidth="4" fill="none" />
    <motion.circle cx="50" cy="52" r="3" fill={RED} animate={{ opacity: [1, 0.5, 1] }} transition={TRANSITION} />
  </svg>
);

export const UnlockedVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="35" y="40" width="30" height="25" fill="currentColor" opacity="0.5" />
    <motion.path d="M35 40 V 30 A 15 15 0 0 1 65 30 V 35" stroke={RED} strokeWidth="4" fill="none"
      animate={{ d: "M35 40 V 30 A 15 15 0 0 1 65 30 V 20" }} transition={TRANSITION} />
  </svg>
);

export const FocusVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.path d="M30 30 L40 30 M30 30 L30 40" stroke={RED} strokeWidth="2" animate={{ x: [0, 10, 0], y: [0, 10, 0] }} transition={TRANSITION} />
    <motion.path d="M70 30 L60 30 M70 30 L70 40" stroke={RED} strokeWidth="2" animate={{ x: [0, -10, 0], y: [0, 10, 0] }} transition={TRANSITION} />
    <motion.path d="M30 70 L40 70 M30 70 L30 60" stroke={RED} strokeWidth="2" animate={{ x: [0, 10, 0], y: [0, -10, 0] }} transition={TRANSITION} />
    <motion.path d="M70 70 L60 70 M70 70 L70 60" stroke={RED} strokeWidth="2" animate={{ x: [0, -10, 0], y: [0, -10, 0] }} transition={TRANSITION} />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

export const SearchVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="45" cy="45" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="55" y1="55" x2="70" y2="70" stroke="currentColor" strokeWidth="2" />
    <motion.line x1="35" y1="35" x2="55" y2="55" stroke={RED} strokeWidth="2" animate={{ rotate: [0, 90, 0] }} style={{originX: "45px", originY: "45px"}} transition={TRANSITION} />
  </svg>
);

export const PulseVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.circle cx="50" cy="50" r="20" fill={RED} animate={{ scale: [1, 1.1, 1], opacity: [0.8, 0.4, 0.8] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

export const GrowthVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="2" />
    {[20, 40, 60, 80].map((x, i) => (
      <motion.rect key={i} x={x} y={90} width="10" height="0" fill={RED}
        animate={{ height: (i + 1) * 20, y: 90 - (i + 1) * 20 }} transition={{ duration: 1, delay: i * 0.2 }} />
    ))}
  </svg>
);

export const DecayVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="2" />
    {[20, 40, 60, 80].map((x, i) => (
      <motion.rect key={i} x={x} y={90 - (4-i)*20} width="10" height={(4-i)*20} fill="currentColor"
        animate={{ height: 0, y: 90 }} transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }} />
    ))}
  </svg>
);

export const SparkVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {[0, 60, 120, 180, 240, 300].map((r, i) => (
        <motion.line key={i} x1="50" y1="50" x2="50" y2="20" stroke={RED} strokeWidth="2"
            transform={`rotate(${r} 50 50)`}
            animate={{ strokeDasharray: ["0 30", "30 0", "0 30"] }} transition={{ duration: 0.5, repeat: Infinity, delay: Math.random() * 0.2 }} />
    ))}
  </svg>
);

export const BreathVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.path d="M30 50 Q 50 30 70 50 Q 50 70 30 50" fill={RED} opacity="0.2"
        animate={{ d: ["M30 50 Q 50 30 70 50 Q 50 70 30 50", "M20 50 Q 50 10 80 50 Q 50 90 20 50", "M30 50 Q 50 30 70 50 Q 50 70 30 50"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }} />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);


// --- EXPORT MAP ---

export const VISUAL_MAP: Record<string, React.FC<VisualProps>> = {
  // NEW UTILITY
  bottleneck: BottleneckVisual,
  alignment: AlignmentVisual,
  fragmentation: FragmentationVisual,
  integration: IntegrationVisual,
  
  // NEW LOOPS
  audit: AuditVisual,
  tangle: TangleVisual,
  shield: ShieldVisual,
  factory: FactoryVisual,
  whisper: WhisperVisual,
  battery: BatteryVisual,
  pen: PenVisual,
  globe: GlobeVisual,
  scale: ScaleVisual,
  mask: MaskVisual,

  // Originals
  gap: GapVisual,
  filter: FilterVisual,
  trust: TrustVisual,
  context: ContextVisual,
  centaur: CentaurVisual,
  meaning: MeaningVisual,
  // Dynamics
  velocity: VelocityVisual,
  stagnation: StagnationVisual,
  orbit: OrbitVisual,
  collision: CollisionVisual,
  divergence: DivergenceVisual,
  convergence: ConvergenceVisual,
  loop: LoopVisual,
  cycle: CycleVisual,
  linear: LinearVisual,
  exponential: ExponentialVisual,
  // Structure
  network: NetworkVisual,
  silo: SiloVisual,
  hierarchy: HierarchyVisual,
  flat: FlatVisual,
  grid: GridVisual,
  stack: StackVisual,
  queue: QueueVisual,
  bridge: BridgeVisual,
  barrier: BarrierVisual,
  portal: PortalVisual,
  // Interaction
  sync: SyncVisual,
  async: AsyncVisual,
  balance: BalanceVisual,
  friction: FrictionVisual,
  echo: EchoVisual,
  mirror: MirrorVisual,
  shadow: ShadowVisual,
  source: SourceVisual,
  target: TargetVisual,
  exchange: ExchangeVisual,
  // State
  clarity: ClarityVisual,
  blur: BlurVisual,
  noise: NoiseVisual,
  signal: SignalVisual,
  overload: OverloadVisual,
  empty: EmptyVisual,
  locked: LockedVisual,
  unlocked: UnlockedVisual,
  focus: FocusVisual,
  search: SearchVisual,
  // Human
  pulse: PulseVisual,
  growth: GrowthVisual,
  decay: DecayVisual,
  spark: SparkVisual,
  breath: BreathVisual,
  // Fallback
  none: () => null
};
