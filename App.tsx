
import React, { useState, useRef } from 'react';
import { VISUAL_MAP } from './components/Visuals';
import { VISUAL_CODES, GENERIC_TEMPLATE } from './components/VisualCodeMap';
import { Copy, Check, Grid, List, Search, Code, Info, ExternalLink, Image as ImageIcon, Video, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as htmlToImage from 'html-to-image';

const App: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [recordingId, setRecordingId] = useState<string | null>(null);
  const [isoId, setIsoId] = useState<string | null>(null);

  // Get all visual keys
  const visuals = Object.keys(VISUAL_MAP)
    .filter(key => key !== 'none')
    .map((key, index) => ({
      id: `SYS-${String(index + 1).padStart(2, '0')}`,
      name: key,
      Component: VISUAL_MAP[key]
    }));

  const filteredVisuals = visuals.filter(v => v.name.toLowerCase().includes(filter.toLowerCase()));

  // --- COPY SVG ---
  const handleCopySvg = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const container = document.getElementById(`visual-${id}`);
    const svg = container?.querySelector('svg');
    
    if (svg) {
      navigator.clipboard.writeText(svg.outerHTML);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // --- COPY JSX ---
  const handleCopyReact = (id: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let codeToCopy = VISUAL_CODES[name];
    if (!codeToCopy) {
       codeToCopy = GENERIC_TEMPLATE(name.charAt(0).toUpperCase() + name.slice(1));
    }
    navigator.clipboard.writeText(codeToCopy);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // --- DOWNLOAD PNG ---
  const handleDownloadPng = async (id: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const node = document.getElementById(`visual-${id}`);
    if (!node) return;

    try {
        const dataUrl = await htmlToImage.toPng(node, { backgroundColor: '#ffffff', pixelRatio: 4 }); // 4x for high res
        const link = document.createElement('a');
        link.download = `ai-mindset-${name}.png`;
        link.href = dataUrl;
        link.click();
    } catch (err) {
        console.error('Failed to save image', err);
    }
  };

  // --- RECORD VIDEO (WebM @ 60fps) ---
  const handleRecordVideo = async (id: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (recordingId) return; // Prevent double recording
    setRecordingId(id);

    const node = document.getElementById(`visual-${id}`);
    if (!node) {
        setRecordingId(null);
        return;
    }

    try {
        const stream = await captureElementStream(node, 4000); // 4 seconds
        if (!stream) throw new Error("Stream capture failed");

        const recorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
        const chunks: Blob[] = [];

        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) chunks.push(e.data);
        };

        recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `ai-mindset-${name}-loop.webm`;
            link.click();
            setRecordingId(null);
        };

        recorder.start();
        setTimeout(() => recorder.stop(), 4000); // Stop after 4s

    } catch (err) {
        console.error("Recording failed:", err);
        setRecordingId(null);
        alert("Browser doesn't support advanced canvas capture. Try Chrome/Arc.");
    }
  };

  // Helper to capture a DOM element as a high-fps stream
  const captureElementStream = async (element: HTMLElement, duration: number) => {
    const canvas = document.createElement('canvas');
    const width = element.offsetWidth * 2;
    const height = element.offsetHeight * 2;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // We create a loop that manually rasterizes the DOM to the canvas
    // Note: This is CPU intensive but works for capturing CSS/JS animations snapshot-by-snapshot
    let active = true;
    
    const drawFrame = async () => {
        if (!active) return;
        try {
            // High quality rasterization
            const dataUrl = await htmlToImage.toPng(element, { 
                width: width, 
                height: height, 
                pixelRatio: 2,
                skipAutoScale: true,
                style: { transform: 'scale(1)', transformOrigin: 'top left' }
            });
            
            const img = new Image();
            img.onload = () => {
                ctx?.drawImage(img, 0, 0, width, height);
            };
            img.src = dataUrl;
        } catch (e) {
            console.warn("Frame drop");
        }
        if (active) requestAnimationFrame(drawFrame);
    };

    drawFrame();
    
    // Stop loop after duration
    setTimeout(() => { active = false; }, duration + 100);

    return canvas.captureStream(30); // 30 FPS stream
  };


  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black font-sans selection:bg-[#D80000] selection:text-white pb-24">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/10 px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
        <div>
          <h1 className="text-2xl font-black tracking-tight flex items-center gap-3 uppercase">
            <div className="w-4 h-4 bg-[#D80000] rounded-sm"></div>
            Visual Metaphor Index
          </h1>
          <p className="text-xs font-mono text-gray-400 mt-1 tracking-widest">AI MINDSET • SWISS STYLE SYSTEM v2.0</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="FILTER..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-100 border border-transparent focus:bg-white focus:border-black/20 rounded-md py-3 pl-10 pr-4 text-sm focus:outline-none w-full md:w-64 transition-all placeholder:uppercase placeholder:text-xs font-mono"
            />
          </div>
          
          <div className="flex bg-gray-100 rounded-md p-1">
            <button onClick={() => setView('grid')} className={`p-2 rounded ${view === 'grid' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}>
              <Grid size={18} />
            </button>
            <button onClick={() => setView('list')} className={`p-2 rounded ${view === 'list' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}>
              <List size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="p-6 md:p-12">
        <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2'}`}>
          {filteredVisuals.map(({ id, name, Component }) => (
            <div 
              key={id} 
              id={`card-${id}`}
              className={`group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#D80000] hover:shadow-xl hover:shadow-[#D80000]/10 transition-all duration-300 ${view === 'list' ? 'flex items-center p-6 gap-8' : 'flex flex-col'}`}
            >
              {/* Header/ID */}
              <div className={`flex justify-between items-center px-6 pt-6 ${view === 'list' ? 'hidden' : ''}`}>
                <span className="font-mono text-[10px] text-gray-300 font-bold">{id}</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsoId(name); }}
                  className="text-gray-300 hover:text-[#D80000] transition-colors"
                  title="Fullscreen ISO Mode"
                >
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Visual Container */}
              <div 
                id={`visual-${id}`}
                className={`relative ${view === 'list' ? 'w-32 h-32 shrink-0' : 'w-full aspect-square p-8 md:p-12'} flex items-center justify-center text-black`}
              >
                <Component />
              </div>

              {/* Footer / Actions */}
              <div className={`${view === 'list' ? 'flex-grow flex flex-col justify-center' : 'p-6 border-t border-gray-50 bg-gray-50/50'}`}>
                <div className="mb-4">
                    <div className="font-bold uppercase tracking-tight text-lg leading-none mb-1">{name}</div>
                    {/* Clean look: Removed the tech stack text as requested */}
                </div>

                <div className="flex gap-1">
                    <button 
                        onClick={(e) => handleCopySvg(id, e)}
                        className="flex-1 flex items-center justify-center gap-1 bg-white hover:bg-gray-100 border border-gray-200 py-2 rounded text-[10px] font-bold font-mono uppercase transition-colors"
                        title="Copy SVG Code"
                    >
                       {copiedId === id ? <Check size={12} className="text-green-600" /> : <Code size={12} />} 
                       SVG
                    </button>
                    <button 
                        onClick={(e) => handleCopyReact(id, name, e)}
                        className="flex-1 flex items-center justify-center gap-1 bg-black text-white hover:bg-[#D80000] border border-transparent py-2 rounded text-[10px] font-bold font-mono uppercase transition-colors"
                        title="Copy React Code"
                    >
                       {copiedId === id ? <Check size={12} /> : <Copy size={12} />} 
                       JSX
                    </button>
                    <div className="w-px bg-gray-300 mx-1 h-full"></div>
                    <button 
                        onClick={(e) => handleDownloadPng(id, name, e)}
                        className="w-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-gray-200 py-2 rounded text-gray-500 hover:text-black transition-colors"
                        title="Download Hi-Res PNG"
                    >
                       <ImageIcon size={14} />
                    </button>
                    <button 
                        onClick={(e) => handleRecordVideo(id, name, e)}
                        className={`w-8 flex items-center justify-center border border-gray-200 py-2 rounded transition-colors ${recordingId === id ? 'bg-[#D80000] text-white border-[#D80000]' : 'bg-white hover:bg-gray-100 text-gray-500 hover:text-black'}`}
                        title="Record 4s Loop (WebM)"
                    >
                       {recordingId === id ? <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-2 h-2 bg-white rounded-full" /> : <Video size={14} />}
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ISO MODAL */}
      <AnimatePresence>
        {isoId && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            <button 
                onClick={() => setIsoId(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
                <X size={24} />
            </button>
            
            <div className="w-[80vw] max-w-[600px] aspect-square text-black relative">
                {VISUAL_MAP[isoId] && React.createElement(VISUAL_MAP[isoId])}
            </div>

            <div className="absolute bottom-12 font-mono text-xs text-gray-400 uppercase tracking-widest">
                ISO MODE • {isoId} • SCREEN RECORD NOW
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Instructions */}
      <footer className="p-12 border-t border-gray-200 mt-12 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
             <div className="flex items-center justify-center gap-2 text-[#D80000] font-bold uppercase tracking-widest text-xs mb-2">
                <Info size={14} /> EXPORT GUIDE
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                    <h3 className="font-bold mb-2 text-sm uppercase">Copy Code</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        <strong>SVG:</strong> For static design (Figma/Illustrator).<br/>
                        <strong>JSX:</strong> Full React component with animation code.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-sm uppercase">Export Media</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        <strong>PNG:</strong> 4x High-Res Snapshot.<br/>
                        <strong>WebM:</strong> 4-second animated loop (Use this for "GIFs" in Slack/Twitter/Presentations).
                    </p>
                </div>
             </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
