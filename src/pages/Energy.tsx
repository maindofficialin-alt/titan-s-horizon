import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Sun, Wind, Zap, BatteryCharging } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  { icon: Sun, name: "Solar Grids", desc: "Massive-scale photoelectric arrays capturing gigawatts of clean energy." },
  { icon: Wind, name: "Wind Orchestration", desc: "Aerodynamic turbine networks driven by predictive weather AI." },
  { icon: Zap, name: "Smart Distribution", desc: "Dynamic load balancing across national power infrastructures." },
  { icon: BatteryCharging, name: "Kinetic Storage", desc: "Next-gen solid-state batteries holding surplus energy for absolute grid stability." },
];

const Energy = () => {
  return (
    <main className="bg-background text-foreground relative min-h-screen pt-32 pb-24">
      <Nav />
      <div className="mx-auto max-w-5xl px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-10 transition-colors font-sans">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-display text-5xl md:text-7xl text-crimson mb-12">
          Renewable Energy Networks
        </h1>
        
        <section className="mb-20">
          <h2 className="font-display text-4xl mb-8 text-[#2EE5E5]">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col items-start">
                  <div className="p-3 bg-[#2EE5E5]/10 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-[#2EE5E5] stroke-[1.5]" />
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

export default Energy;
