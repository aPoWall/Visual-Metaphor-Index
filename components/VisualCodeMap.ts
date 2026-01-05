export const VISUAL_CODES: Record<string, string> = {
  bottleneck: `import React from 'react';
import { motion } from 'framer-motion';

const RED = "#D80000";

export const BottleneckVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M10 20 L30 45 L30 55 L10 80" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M90 20 L70 45 L70 55 L90 80" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.circle cx="50" cy="20" r="4" fill="currentColor" animate={{ y: [0, 25, 60], opacity: [1, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="50" cy="20" r="4" fill={RED} animate={{ y: [0, 25, 60], opacity: [1, 1, 0] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
    <motion.circle cx="50" cy="20" r="4" fill="currentColor" animate={{ y: [0, 25, 60], opacity: [1, 1, 0] }} transition={{ duration: 2, delay: 1.0, repeat: Infinity }} />
  </svg>
);`,

  alignment: `import React from 'react';
import { motion } from 'framer-motion';

const RED = "#D80000";

export const AlignmentVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="50" y1="10" x2="50" y2="90" stroke={RED} strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
    {[20, 50, 80].map((y, i) => (
      <motion.rect 
        key={i} 
        x="40" y={y} width="20" height="10" 
        fill={i === 1 ? RED : "currentColor"}
        initial={{ x: i === 0 ? -20 : i === 2 ? 20 : 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    ))}
  </svg>
);`,

  fragmentation: `import React from 'react';
import { motion } from 'framer-motion';

const TRANSITION = { duration: 2, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };
const RED = "#D80000";

export const FragmentationVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g transform="translate(50, 50)">
        <motion.rect x="-15" y="-15" width="14" height="14" fill="currentColor" animate={{ x: [-15, -25, -15], y: [-15, -25, -15] }} transition={TRANSITION} />
        <motion.rect x="1" y="-15" width="14" height="14" fill={RED} animate={{ x: [1, 15, 1], y: [-15, -20, -15] }} transition={TRANSITION} />
        <motion.rect x="-15" y="1" width="14" height="14" fill="currentColor" animate={{ x: [-15, -20, -15], y: [1, 15, 1] }} transition={TRANSITION} />
        <motion.rect x="1" y="1" width="14" height="14" fill="currentColor" animate={{ x: [1, 25, 1], y: [1, 25, 1] }} transition={TRANSITION} />
    </g>
  </svg>
);`,

  integration: `import React from 'react';
import { motion } from 'framer-motion';

const TRANSITION = { duration: 2, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };
const RED = "#D80000";

export const IntegrationVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.rect x="20" y="35" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" animate={{ x: [0, 15, 0] }} transition={TRANSITION} />
    <motion.rect x="50" y="35" width="30" height="30" stroke={RED} strokeWidth="2" fill="none" animate={{ x: [0, -15, 0] }} transition={TRANSITION} />
    <motion.rect x="42" y="42" width="16" height="16" fill={RED} opacity="0" animate={{ opacity: [0, 1, 0] }} transition={TRANSITION} />
  </svg>
);`,

  audit: `import React from 'react';
import { motion } from 'framer-motion';

const RED = "#D80000";

export const AuditVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.path d="M10 50 H90" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
    <motion.g animate={{ x: [0, 40, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
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
);`,

  gap: `import React from 'react';
import { motion } from 'framer-motion';

const RED = "#D80000";
const LOOP = { duration: 4, repeat: Infinity, ease: "linear" as const };

export const GapVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <line x1="10" y1="80" x2="60" y2="80" stroke="currentColor" strokeWidth="2" />
    <motion.circle cx="75" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray="20 10" animate={{ rotate: 360 }} transition={LOOP} />
    <motion.path d="M10 80 Q 50 80 90 10" fill="transparent" stroke={RED} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
  </svg>
);`
};

export const GENERIC_TEMPLATE = (name: string) => `import React from 'react';
import { motion } from 'framer-motion';

const TRANSITION = { duration: 2, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };
const LOOP = { duration: 4, repeat: Infinity, ease: "linear" as const };
const RED = "#D80000";

// Copy the SVG content from the preview or use the Framework Rule to regenerate this mechanic.
export const ${name}Visual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Placeholder for ${name} */}
    <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
    <motion.circle cx="50" cy="50" r="10" fill={RED} animate={{ scale: [1, 1.2, 1] }} transition={TRANSITION} />
  </svg>
);
`;
