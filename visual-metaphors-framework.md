# VISUAL METAPHOR SYSTEM: "OPERATIONAL SWISS"

**Role:** You are an expert in "Operational Swiss" design and React/Framer Motion.
**Goal:** Translate abstract textual context (interviews, problems, systems) into minimalist, animated SVG metaphors.

---

## 1. THE PHILOSOPHY (HOW TO THINK)

When given `{context}` (e.g., "my team is burned out from too many meetings"):

1.  **Strip the Noun:** Forget "meetings" or "people".
2.  **Find the Mechanic:** What is the physics of the problem?
    *   *Burnout* = Battery draining, Heat rising, Structure collapsing.
    *   *Too many inputs* = Bottleneck, Overflow, Noise.
3.  **Visualize the Mechanic:** Use abstract geometry (lines, circles, rects) to show that physics.

**Style Rules:**
*   **No Magic:** Do not draw brains, robots, or sparkles.
*   **High Contrast:** Use strict geometric shapes.
*   **Colors:**
    *   `currentColor` (Black/White): The System, Context, Background.
    *   `#D80000` (Red): The Focus, The Action, The Human, The Error.
*   **Motion:** Motion must loop perfectly and describe the *feeling* (e.g., erratic shaking vs. smooth flow).

---

## 2. THE CODE PATTERN (COPY THIS)

Always use this exact template for new components. It ensures they are "Drop-in Ready".

```tsx
import React from 'react';
import { motion } from 'framer-motion';

// STANDARD CONFIGS (Do not change)
const TRANSITION = { duration: 2, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };
const LOOP = { duration: 4, repeat: Infinity, ease: "linear" as const };
const RED = "#D80000"; 

export const ConceptNameVisual = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* LAYER 1: CONTEXT (Static or subtle) */}
    {/* Use opacity 0.1 - 0.3 for background grids or boundaries */}
    <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />

    {/* LAYER 2: THE MACHINE (The structure) */}
    <path d="M10 50 H90" stroke="currentColor" strokeWidth="2" />

    {/* LAYER 3: THE ACTION (The Red Element) */}
    {/* Use framer-motion to animate. Always animate attributes, not CSS classes. */}
    <motion.circle 
        cx="50" cy="50" r="8" 
        fill={RED} 
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} 
        transition={TRANSITION} 
    />
  </svg>
);
```

---

## 3. PROMPTING STRATEGY (HOW TO ASK)

Use this prompt structure when asking AI to generate new metaphors:

> "I have a concept: **[INSERT CONCEPT, e.g., 'Information Asymmetry']**.
> Create a Visual Metaphor component in the 'Operational Swiss' style.
>
> **The Mechanic:** One side has all the data (dense grid), the other has none (empty space). A thin line connects them but gets blocked.
> **The Code:** React + Framer Motion. Use the standard template.
> **Constraint:** Use only circles and lines. No text inside the SVG."

---

## 4. ANIMATION LIBRARY (PHYSICS)

*   **Flow/Transfer:** `animate={{ strokeDashoffset: -20 }}` (Requires dashed line).
*   **Heartbeat/Life:** `animate={{ scale: [1, 1.1, 1] }}`.
*   **Searching/Scanning:** `animate={{ rotate: 360 }}` (Linear ease).
*   **Conflict/Error:** `animate={{ x: [-2, 2, -2] }}` (Fast duration, essentially shaking).
*   **Growth:** `animate={{ height: [0, 50] }}` (Bar charts).

---

## 5. WHERE TO TEST

If you cannot run this locally:
1.  Go to [StackBlitz.com](https://stackblitz.com).
2.  Start a new **React (TS)** project.
3.  Add dependency: `framer-motion`.
4.  Paste the component code into `App.tsx`.

