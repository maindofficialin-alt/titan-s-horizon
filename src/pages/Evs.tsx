import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Car, Factory, ShoppingCart, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  { icon: Factory, name: "Advanced EV Manufacturing", desc: "Building high-performance, aerodynamically perfect electric vehicles using sustainable, aerospace-grade materials." },
  { icon: ShoppingCart, name: "Direct-to-Consumer Sales", desc: "A seamless, transparent digital purchasing experience that bypasses traditional dealership networks entirely." },
  { icon: Car, name: "AI-Powered Production", desc: "Utilizing precision robotics and edge AI on the assembly line to achieve zero-defect manufacturing at scale." },
  { icon: Globe2, name: "Global Vehicle Distribution", desc: "Delivering our next-generation electric mobility fleets directly to individual buyers and commercial partners worldwide." },
];

const Evs = () => {
  return (
    <main className="bg-background text-foreground relative min-h-screen pt-32 pb-24">
      <Nav />
      <div className="mx-auto max-w-5xl px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-10 transition-colors font-sans">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-12">
          Electric Vehicle Manufacturing
        </h1>
        
        <section className="mb-20">
          <h2 className="font-display text-4xl mb-8 text-secondary">Our Capabilities</h2>
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

export default Evs;
