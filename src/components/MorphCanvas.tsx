import { useEffect, useState } from "react";

/**
 * MorphCanvas — a cinematic 3-stage SVG that loops:
 *   0) EV charging silently at a wireless station
 *   1) A pulsing neural network
 *   2) A wind-turbine energy grid
 * Wrapped by a "Light Mist" overlay applied by the parent.
 */
export const MorphCanvas = () => {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % 3), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full">
      <Stage active={stage === 0}><EVScene /></Stage>
      <Stage active={stage === 1}><NeuralScene /></Stage>
      <Stage active={stage === 2}><TurbineScene /></Stage>
    </div>
  );
};

const Stage = ({ active, children }: { active: boolean; children: React.ReactNode }) => (
  <div
    className="absolute inset-0 transition-all duration-1000 ease-out"
    style={{
      opacity: active ? 1 : 0,
      transform: active ? "scale(1)" : "scale(0.96)",
      filter: active ? "blur(0)" : "blur(6px)",
    }}
  >
    {children}
  </div>
);

/* ---------- Scene 1 — EV at wireless charger ---------- */
const EVScene = () => (
  <svg viewBox="0 0 800 500" className="w-full h-full">
    <defs>
      <linearGradient id="ev-body" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="hsl(0 0% 100%)" />
        <stop offset="1" stopColor="hsl(220 13% 91%)" />
      </linearGradient>
      <radialGradient id="ev-pad" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="hsl(92 51% 55%)" stopOpacity="0.55" />
        <stop offset="1" stopColor="hsl(92 51% 55%)" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* charging pad glow */}
    <ellipse cx="400" cy="380" rx="220" ry="40" fill="url(#ev-pad)" />
    {[0,1,2].map(i => (
      <circle key={i} cx="400" cy="380" r="60" fill="none" stroke="hsl(92 51% 55%)" strokeWidth="1.2"
        opacity="0.5" style={{ animation: `pulse-ring 2.6s ${i*0.7}s ease-out infinite` }} />
    ))}
    {/* car silhouette */}
    <g transform="translate(220,260)">
      <path d="M0,80 Q40,30 120,20 L240,20 Q320,30 360,80 L360,120 Q360,140 340,140 L20,140 Q0,140 0,120 Z"
            fill="url(#ev-body)" stroke="hsl(220 13% 80%)" strokeWidth="1.5" />
      <path d="M50,70 L110,30 L240,30 L300,70 Z" fill="hsl(256 65% 84% / 0.5)" />
      <circle cx="80"  cy="140" r="22" fill="hsl(0 0% 8%)" />
      <circle cx="80"  cy="140" r="9"  fill="hsl(220 13% 91%)" />
      <circle cx="280" cy="140" r="22" fill="hsl(0 0% 8%)" />
      <circle cx="280" cy="140" r="9"  fill="hsl(220 13% 91%)" />
      {/* energy bolt above */}
      <path d="M180,-30 L160,10 L178,10 L168,40 L196,5 L182,5 Z"
            fill="hsl(353 79% 56%)" opacity="0.9">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

/* ---------- Scene 2 — Neural network ---------- */
const NeuralScene = () => {
  const layers = [3, 5, 5, 3];
  const xs = layers.map((_, i) => 140 + i * 170);
  const nodes: { x: number; y: number; layer: number; idx: number }[] = [];
  layers.forEach((count, li) => {
    for (let i = 0; i < count; i++) {
      const y = 250 + (i - (count - 1) / 2) * 70;
      nodes.push({ x: xs[li], y, layer: li, idx: i });
    }
  });
  const lines: { a: typeof nodes[0]; b: typeof nodes[0] }[] = [];
  for (let li = 0; li < layers.length - 1; li++) {
    const A = nodes.filter((n) => n.layer === li);
    const B = nodes.filter((n) => n.layer === li + 1);
    A.forEach((a) => B.forEach((b) => lines.push({ a, b })));
  }
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full">
      {lines.map((l, i) => (
        <line key={i} x1={l.a.x} y1={l.a.y} x2={l.b.x} y2={l.b.y}
          stroke="hsl(256 50% 60%)" strokeWidth="0.8" opacity="0.35">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" begin={`${(i % 9) * 0.18}s`} repeatCount="indefinite" />
        </line>
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="12" fill="hsl(256 65% 95%)" stroke="hsl(256 50% 60%)" strokeWidth="1.2" />
          <circle cx={n.x} cy={n.y} r="4" fill="hsl(353 79% 56%)">
            <animate attributeName="r" values="3;6;3" dur="2.2s" begin={`${(i % 6) * 0.25}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
};

/* ---------- Scene 3 — Wind turbine grid ---------- */
const TurbineScene = () => (
  <svg viewBox="0 0 800 500" className="w-full h-full">
    <defs>
      <linearGradient id="ground" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="hsl(92 51% 92%)" />
        <stop offset="1" stopColor="hsl(0 0% 98%)" />
      </linearGradient>
    </defs>
    <rect x="0" y="380" width="800" height="120" fill="url(#ground)" />
    {[{x:180,s:1.0},{x:400,s:1.2},{x:620,s:0.9}].map((t,i)=>(
      <g key={i} transform={`translate(${t.x},${380}) scale(${t.s})`}>
        <rect x="-4" y="-180" width="8" height="180" fill="hsl(220 13% 80%)" />
        <g transform="translate(0,-180)" style={{ transformOrigin: "0 0", animation: `spin-slow ${6 + i*2}s linear infinite` }}>
          {[0,120,240].map((deg)=>(
            <path key={deg} d="M0,0 L6,-90 L-6,-90 Z" transform={`rotate(${deg})`} fill="hsl(0 0% 100%)" stroke="hsl(220 13% 70%)" strokeWidth="1" />
          ))}
          <circle r="6" fill="hsl(353 79% 56%)" />
        </g>
      </g>
    ))}
    {/* grid lines */}
    {Array.from({length:9}).map((_,i)=>(
      <line key={i} x1={0} x2={800} y1={400+i*10} y2={400+i*10} stroke="hsl(256 65% 84%)" strokeWidth="0.4" opacity={0.4 - i*0.04}/>
    ))}
  </svg>
);
