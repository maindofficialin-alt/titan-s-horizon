import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Leaf, Droplets, Wind, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  { icon: Leaf, name: "Ecosystem Restoration", desc: "Autonomous drone swarms mapping and replanting deforested regions at unprecedented speeds." },
  { icon: Droplets, name: "Oceanic AI Integration", desc: "Deep-sea sensor networks tracking acidification and protecting marine biodiversity." },
  { icon: Wind, name: "Emissions Tracking", desc: "Satellite-linked edge nodes monitoring and predicting atmospheric carbon levels in real time." },
  { icon: Globe2, name: "UN Goals Alignment", desc: "Strategic deployment of AI infrastructure designed specifically to accelerate the United Nations Sustainable Development Goals (SDGs)." },
];

const Environment = () => {
  return (
    <main className="bg-background text-foreground relative min-h-screen pt-32 pb-24 overflow-hidden z-0">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] text-secondary/40">
        <div className="absolute top-[20%] right-[10%] animate-[float-soft_18s_infinite]">
          <Globe2 className="w-96 h-96" />
        </div>
        <div className="absolute top-[60%] left-[5%] animate-[float-soft_14s_infinite_reverse]">
          <Leaf className="w-64 h-64" />
        </div>
      </div>
      <Nav />
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-10 transition-colors font-sans">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-12">
          Environmental AI Integration
        </h1>
        
        <section className="mb-16">
          <h2 className="font-display text-4xl mb-6 text-secondary">A United Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-6">
            Our vision is a fully restored, dynamically balanced biosphere. We focus explicitly on the United Nations' mission for sustainable development, utilizing our edge computing arrays to defend, monitor, and heal the natural world.
          </p>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="p-8 rounded-2xl border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors flex flex-col items-start">
                  <div className="p-3 bg-secondary/10 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-secondary stroke-[1.5]" />
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

export default Environment;
