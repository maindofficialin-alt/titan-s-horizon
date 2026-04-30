import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Cpu, Brain, Cloud, Shield, Globe, Zap, Dna, Network, Atom, Crosshair, Hexagon, Glasses, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const SOFTWARE_SERVICES = [
  {
    name: "Custom Software",
    description: "Tailored solutions engineered for scale, speed, and reliability.",
    icon: Cpu
  },
  {
    name: "AI & Machine Learning",
    description: "Intelligent systems that learn, adapt, and drive real decisions.",
    icon: Brain
  },
  {
    name: "Cloud Architecture",
    description: "Resilient cloud-native infrastructure built for global reach.",
    icon: Cloud
  },
  {
    name: "Cybersecurity",
    description: "Zero-trust security models protecting your digital assets.",
    icon: Shield
  },
  {
    name: "Web Platforms",
    description: "High-performance web apps with pixel-perfect interfaces.",
    icon: Globe
  },
  {
    name: "DevOps & Automation",
    description: "CI/CD pipelines and infrastructure-as-code at every layer.",
    icon: Zap
  }
];

const TECHNOLOGIES = [
  {
    name: "Biotechnology",
    description: "Integrating organic neural processes with synthetic compute architecture. Our vision is to pioneer bio-computational interfaces that can heal, adapt, and scale seamlessly within living ecosystems.",
    icon: Dna
  },
  {
    name: "Internet of Things",
    description: "Creating a ubiquitous sensory network where every physical asset speaks a unified digital dialect. We envision a world where cities, grids, and fleets anticipate human needs before they are articulated.",
    icon: Network
  },
  {
    name: "Nanotechnology",
    description: "Engineering computational substrates at the atomic level. Our pursuit involves microscopic autonomous agents capable of repairing infrastructure, purifying energy storage, and enhancing cognitive arrays.",
    icon: Atom
  },
  {
    name: "Defence",
    description: "Developing hyper-resilient, impenetrable cognitive shields. Our vision for defence centers on predictive threat neutralization and autonomous strategic orchestration to ensure absolute systemic peace.",
    icon: Crosshair
  },
  {
    name: "Quantum Technology",
    description: "Harnessing superposition and entanglement to solve planetary-scale logistical and climatic equations in milliseconds. We are laying the groundwork for the post-binary computational era.",
    icon: Hexagon
  },
  {
    name: "Augmented Reality & Virtual Reality",
    description: "Dissolving the barrier between the physical and the virtual. We construct immersive operational paradigms where infrastructure operators manipulate entire energy grids through intuitive, spatial gestures.",
    icon: Glasses
  },
  {
    name: "Space Technology",
    description: "Extending the neural network beyond the atmosphere. Developing autonomous orbital logistics, deep-space communication relays, and AI-driven exploratory probes for interplanetary infrastructure.",
    icon: Rocket
  }
];

const AiEdge = () => {

  return (
    <main className="bg-background text-foreground relative min-h-screen pt-32 pb-24 overflow-hidden z-0">
      
      {/* Animated background elements (Drones, Rockets, Orbits) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] text-primary/60">
        <div className="absolute top-0 left-[20%] animate-rocket-launch">
          <Rocket className="w-32 h-32 transform rotate-45" />
        </div>
        <div className="absolute top-[30%] right-[20%] animate-drone-patrol">
          <Crosshair className="w-40 h-40" /> {/* Drone/Targeting visual */}
        </div>
        <div className="absolute top-[35%] left-[55%] animate-[spin-slow_30s_infinite]">
          <Hexagon className="w-[400px] h-[400px]" />
        </div>
        <div className="absolute top-[75%] left-[20%] animate-[pulse-ring_8s_infinite]">
          <Globe className="w-64 h-64" />
        </div>
        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[2px] border-primary/20 border-dashed animate-[spin-slow_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border-[2px] border-primary/20 border-dashed animate-[spin-slow_90s_linear_infinite_reverse]" />
      </div>
      <Nav />
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-10 transition-colors font-sans">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-8">
          Artificial Intelligence & Edge Technology
        </h1>
        
        <section className="mb-16">
          <h2 className="font-display text-4xl mb-6 text-lavender-deep">Our Vision Towards AI</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-6">
            We perceive Artificial Intelligence not as a tool, but as the emergent consciousness of our global infrastructure. Our vision transcends automation; we are cultivating an omniscient, empathetic cognitive layer that breathes life into the inanimate.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
            Our contribution is the decentralization of this intellect—pushing decision-making to the extreme edge. By embedding neural engines directly into substations, logistics fleets, and cinematic arrays, we eliminate latency, ensuring that our ecosystems react to reality in the exact moment it unfolds.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-4xl mb-8 text-primary">Software Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOFTWARE_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className="p-6 rounded-2xl border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors flex flex-col">
                  <Icon className="w-8 h-8 text-primary mb-5 stroke-[1.5]" />
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">{service.name}</h3>
                  <p className="font-sans text-[0.95rem] text-foreground/60 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="font-display text-4xl mb-8 text-lettuce">Edge-Cutting Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECHNOLOGIES.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.name} className="p-6 rounded-2xl border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors flex flex-col">
                  <Icon className="w-8 h-8 text-lettuce mb-5 stroke-[1.5]" />
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">{tech.name}</h3>
                  <p className="font-sans text-[0.95rem] text-foreground/60 leading-relaxed">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AiEdge;
