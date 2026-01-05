export type SlideType = 
  | 'cover' 
  | 'section' 
  | 'split'     
  | 'big-stat'  
  | 'quote'     
  | 'manifesto' 
  | 'timeline'  
  | 'loop'         
  | 'metaphor'     
  | 'cards'     
  | 'text-density' 
  | 'grid-stats'   
  | 'comparative'
  | 'statement'
  | 'checklist'
  | 'blueprint'
  | 'gallery';  

export type VisualType = 
  // Loop Specifics (New)
  | 'audit'        // Loop 1
  | 'tangle'       // Loop 2
  | 'shield'       // Loop 3
  | 'factory'      // Loop 4
  | 'whisper'      // Loop 5
  | 'battery'      // Loop 6
  | 'pen'          // Loop 7
  | 'globe'        // Loop 8
  | 'scale'        // Loop 9
  | 'mask'         // Loop 10
  
  // Originals & Utilities
  | 'gap' | 'filter' | 'trust' | 'context' | 'centaur' | 'meaning' 
  | 'velocity' | 'stagnation' | 'orbit' | 'collision' | 'divergence' | 'convergence' | 'loop' | 'cycle' | 'linear' | 'exponential'
  | 'network' | 'silo' | 'hierarchy' | 'flat' | 'grid' | 'stack' | 'queue' | 'bridge' | 'barrier' | 'portal'
  | 'sync' | 'async' | 'balance' | 'friction' | 'echo' | 'mirror' | 'shadow' | 'source' | 'target' | 'exchange'
  | 'clarity' | 'blur' | 'noise' | 'signal' | 'overload' | 'empty' | 'locked' | 'unlocked' | 'focus' | 'search'
  | 'pulse' | 'growth' | 'decay' | 'spark' | 'breath'
  | 'none';

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export interface CardItem {
  title: string;
  subtitle: string;
  body: string;
  highlight?: string;
}

export interface GridStatItem {
  value: string;
  label: string;
  desc: string;
}

export interface ComparativeColumn {
  header: string;
  sub: string;
  points: string[];
  footer?: string;
}

export interface ChecklistItem {
  label: string;
  text: string;
  checked?: boolean;
}

export interface SlideData {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  body?: string; // Main text
  bodyRight?: string; // Secondary column for text-density
  points?: string[];
  
  // For Loop Layout
  loopData?: {
    machine: string;
    human: string;
    gap: string;
    move?: string;
    sources?: { text: string; url?: string; type?: 'paper' | 'report' | 'article' }[];
  };

  stat?: {
    value: string;
    label: string;
    sub?: string;
    context?: string;
  };
  
  // New Complex Data Props
  gridStats?: GridStatItem[];
  comparative?: ComparativeColumn[];
  checklist?: ChecklistItem[];

  quote?: {
    text: string;
    author: string;
    role: string;
  };
  
  timeline?: TimelineEvent[];
  cards?: CardItem[];
  
  visual: VisualType;
  dark?: boolean;
  source?: string; // Footer source citation
}

export interface VisualProps {
  className?: string;
}
