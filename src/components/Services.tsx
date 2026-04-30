import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  { title: "AI & Edge Tech", tag: "Cognition", body: "Edge-cutting neural systems encompassing bio tech, IoT, nano, defence, quantum tech, and AR & VR.", accent: "lavender", span: "lg:col-span-2 lg:row-span-2", color: "hsl(256 50% 60%)" },
  { title: "Smart Logistics", tag: "Motion", body: "Autonomous fleets choreographed by predictive routing — large scale industry international trade expertise.", accent: "crimson", span: "lg:col-span-2", color: "hsl(353 79% 56%)" },
  { title: "Cinematic Ad Media", tag: "Story", body: "Production-grade narrative engineering: lens, light, and the lingering after-image of a brand.", accent: "pearl", span: "lg:col-span-2", color: "hsl(220 13% 70%)" },
  { title: "Renewable Energy", tag: "Breath", body: "Smart-grid wind, solar, and storage — generation that learns from the load it serves.", accent: "lettuce", span: "lg:col-span-2", color: "hsl(92 51% 55%)" },
  { title: "Electric Vehicles", tag: "Pulse", body: "Manufacturing aerodynamically perfect, high-performance electric fleets engineered for the future.", accent: "mint", span: "lg:col-span-2", color: "hsl(140 55% 65%)" },
  { title: "Governance & Public Admin", tag: "Order", body: "Applying AI expertise to optimize policy, streamline citizen services, and modernize administration.", accent: "lavender", span: "lg:col-span-3", color: "hsl(256 50% 60%)" },
  { title: "Environmental AI", tag: "Nature", body: "Deploying AI to restore ecosystems and track emissions in alignment with UN sustainability goals.", accent: "lettuce", span: "lg:col-span-3", color: "hsl(92 51% 55%)" },
];

const accentGrad: Record<string, string> = {
  lavender: "from-lavender-soft to-white",
  crimson: "from-crimson-soft to-white",
  pearl: "from-silver to-white",
  lettuce: "from-lettuce-soft to-white",
  mint: "from-[hsl(140_55%_92%)] to-white",
};

const PillarIcon = ({ color, idx }: { color: string; idx: number }) => (
  <svg viewBox="0 0 80 80" className="w-16 h-16">
    <circle cx="40" cy="40" r="36" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
    <circle cx="40" cy="40" r="22" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
    <circle cx="40" cy="40" r="8" fill={color} opacity="0.8">
      <animate attributeName="r" values="6;10;6" dur={`${2 + idx * 0.4}s`} repeatCount="indefinite" />
    </circle>
    {[0, 72, 144, 216, 288].map((d) => (
      <circle key={d} cx={40 + Math.cos((d * Math.PI) / 180) * 28} cy={40 + Math.sin((d * Math.PI) / 180) * 28} r="3" fill={color} opacity="0.6" />
    ))}
  </svg>
);

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".services-header", { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".services-header", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".pillar-card").forEach((card, i) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0, rotateY: i % 2 === 0 ? -6 : 6, scale: 0.93 },
          { y: 0, opacity: 1, rotateY: 0, scale: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" } }
        );
      });

      gsap.fromTo(".synergy-strip", { y: 50, opacity: 0, filter: "blur(8px)" }, {
        y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".synergy-strip", start: "top 85%" },
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-28 md:py-36 bg-pearl overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-3xl services-header" style={{ opacity: 0 }}>
          <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-lavender-deep">Service Ecosystem</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.05] text-foreground">
            Five pillars. <span className="text-crimson italic">One organism.</span>
          </h2>
          <p className="mt-6 font-serif text-xl text-foreground/70 max-w-2xl">
            Not a portfolio of companies — a single living infrastructure where intelligence, energy, and motion exchange breath.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(220px,auto)] gap-6">
          {PILLARS.map((p, i) => (
            <article key={p.title} className={`pillar-card card-bento p-8 ${p.span}`} style={{ opacity: 0, perspective: "800px" }}>
              <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${accentGrad[p.accent]} opacity-60`} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="font-serif italic text-xs uppercase tracking-[0.25em] text-foreground/50">{p.tag}</span>
                  <div className="animate-float-soft"><PillarIcon color={p.color} idx={i} /></div>
                </div>
                <h3 className="mt-auto font-display text-3xl md:text-4xl leading-tight">{p.title}</h3>
                <p className="mt-3 font-serif text-lg text-foreground/70">{p.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 synergy-strip" style={{ opacity: 0 }}>
          <div className="rounded-[28px] bg-card shadow-soft p-10 md:p-14 border border-border">
            <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-crimson">A single organism</p>
            <div className="mt-6 grid md:grid-cols-3 gap-10">
              {[
                { h: "AI", c: "", t: "Forecasts demand windows across the grid and re-prices charge slots in real time." },
                { h: "routes", c: "text-lavender-deep", t: "EV charging plans become dynamic waypoints inside the logistics dispatcher." },
                { h: "Logistics", c: "text-lettuce", t: "Fleets glide along the cleanest, cheapest, lowest-emission corridors — automatically." },
              ].map((item, i) => (
                <div key={i} className={i === 1 ? "md:border-x md:border-border md:px-10" : ""}>
                  <h4 className={`font-display text-2xl ${item.c}`}>{item.h}</h4>
                  <p className="mt-3 font-serif text-lg text-foreground/70">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
