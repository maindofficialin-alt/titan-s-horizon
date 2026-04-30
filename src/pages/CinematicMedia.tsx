import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Video, Camera, MonitorPlay, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  { icon: Camera, name: "Automated Drones", desc: "AI-piloted drone swarms capturing impossible aerial cinematography." },
  { icon: Sparkles, name: "Advanced VFX", desc: "Hyper-realistic visual effects blending physical infrastructure with digital art." },
  { icon: Video, name: "AI Framing", desc: "Algorithmic framing that perfectly tracks high-speed industrial motion." },
  { icon: MonitorPlay, name: "Immersive Narratives", desc: "High-end commercial media that tells the story of our zero-emission future." },
];

const CinematicMedia = () => {
  return (
    <main className="bg-background text-foreground relative min-h-screen pt-32 pb-24">
      <Nav />
      <div className="mx-auto max-w-5xl px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-10 transition-colors font-sans">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-display text-5xl md:text-7xl text-crimson mb-12">
          Cinematic Ad Media
        </h1>
        
        <section className="mb-20">
          <h2 className="font-display text-4xl mb-8 text-crimson">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col items-start">
                  <div className="p-3 bg-crimson/10 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-crimson stroke-[1.5]" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-3">{feature.name}</h3>
                  <p className="font-sans text-[1.05rem] text-foreground/60 leading-relaxed">{feature.desc}</p>
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

export default CinematicMedia;
