import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "AI Integration",
    body: "Foundation models tuned to industrial telemetry — agents that converse with infrastructure in its own dialect.",
    color: "hsl(256 50% 60%)",
  },
  {
    title: "Edge Computing",
    body: "Compute that lives at the substation, the dock, the roadside cabinet — millisecond decisions made where they matter.",
    color: "hsl(353 79% 56%)",
  },
  {
    title: "EV — Logistics Synergy",
    body: "A unified scheduler harmonising charge state, weather, payload, and route — converting kilowatts into kilometres of certainty.",
    color: "hsl(92 51% 55%)",
  },
];

const TechIcon = ({ color, idx }: { color: string; idx: number }) => (
  <svg viewBox="0 0 80 80" className="w-16 h-16">
    <rect x="10" y="10" width="60" height="60" rx="14" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
    <rect x="20" y="20" width="40" height="40" rx="8" fill={color} opacity="0.1" />
    <circle cx="40" cy="40" r="10" fill={color} opacity="0.7">
      <animate attributeName="r" values="8;13;8" dur={`${2.5 + idx * 0.5}s`} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${2.5 + idx * 0.5}s`} repeatCount="indefinite" />
    </circle>
  </svg>
);

export const Showreel = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".showreel-header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".showreel-header", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".tech-card").forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            y: 0, opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-lavender/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-crimson/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl showreel-header" style={{ opacity: 0 }}>
          <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-lavender-deep">Technology Showreel</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.05]">
            The <span className="italic text-crimson">substrate</span> beneath every venture.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="tech-card card-bento group p-10 shimmer-lavender" style={{ opacity: 0 }}>
              <div className="animate-float-soft"><TechIcon color={it.color} idx={i} /></div>
              <h3 className="mt-8 font-display text-3xl">{it.title}</h3>
              <p className="mt-4 font-serif text-lg text-foreground/70">{it.body}</p>
              <div className="mt-8 h-px w-12 bg-gradient-divider opacity-60 transition-all duration-500 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
