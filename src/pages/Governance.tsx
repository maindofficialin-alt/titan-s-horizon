import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Landmark, Users, Activity, BarChart4, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  { icon: Landmark, name: "Policy Optimization", desc: "AI-driven models that simulate the socio-economic impacts of public policy before implementation." },
  { icon: Users, name: "Citizen Services", desc: "Intelligent portals that predict and fulfill citizen needs with zero bureaucratic friction." },
  { icon: BarChart4, name: "Resource Allocation", desc: "Real-time analytics optimizing municipal budgets and public resource distribution." },
  { icon: Activity, name: "Crisis Management", desc: "Predictive AI systems for disaster response, pandemic tracking, and emergency logistics." },
];

const Governance = () => {
  return (
    <main className="bg-background text-foreground relative min-h-screen pt-32 pb-24">
      <Nav />
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-10 transition-colors font-sans">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-12">
          Governance & Public Administration
        </h1>
        
        <section className="mb-16">
          <h2 className="font-display text-4xl mb-6 text-secondary">Bringing AI to the Public Sector</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-6">
            We bring unparalleled expertise in applying deep learning and edge AI to the complexities of governance and public administration. Our platforms cut through red tape, delivering precision and radical transparency to municipal and federal operations.
          </p>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="p-8 rounded-2xl border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors flex flex-col items-start">
                  <div className="p-3 bg-primary/10 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-primary stroke-[1.5]" />
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

export default Governance;
