import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "Renewable Energy", hue: "lettuce",
    bgGrad: "from-lavender-soft to-lettuce-soft",
  },
  {
    title: "Cinematic Ad Media", hue: "crimson",
    bgGrad: "from-crimson-soft to-lavender-soft",
  },
  {
    title: "Smart Logistics", hue: "lavender",
    bgGrad: "from-lavender-soft to-pearl",
  },
];

const tint: Record<string, string> = {
  crimson: "from-crimson/40",
  lavender: "from-lavender-deep/40",
  lettuce: "from-lettuce/40",
};

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".projects-header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".projects-header", start: "top 80%" },
      });

      // Horizontal scroll animation for project cards
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { x: 120, opacity: 0, scale: 0.9, rotateY: 5 },
          {
            x: 0, opacity: 1, scale: 1, rotateY: 0,
            duration: 1, ease: "power3.out", delay: i * 0.15,
            scrollTrigger: { trigger: scrollRef.current, start: "top 80%" },
          }
        );
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 md:py-36 bg-pearl overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 projects-header" style={{ opacity: 0 }}>
          <div className="max-w-2xl">
            <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-lavender-deep">Global Impact</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.05]">
              Projects, in <span className="italic text-crimson">flagship</span>.
            </h2>
          </div>
          <p className="font-serif text-base text-muted-foreground italic">scroll horizontally →</p>
        </div>
      </div>

      <div ref={scrollRef} className="mt-14 overflow-x-auto no-scrollbar">
        <div className="flex gap-8 px-[max(1.5rem,calc((100vw-1280px)/2))] pb-10">
          {PROJECTS.map((p) => (
            <article key={p.title} className="project-card group relative shrink-0 w-[min(86vw,640px)] h-[460px] rounded-[28px] overflow-hidden card-bento" style={{ opacity: 0 }}>
              {/* Background gradient instead of SVG visual */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.bgGrad}`} />
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%"><defs><pattern id={`grid-${p.hue}`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill={`url(#grid-${p.hue})`} /></svg>
              </div>
              {/* Tint overlay */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${tint[p.hue]} via-transparent to-transparent mix-blend-multiply`} />
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/70 blur-2xl" />

              {/* Center decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-current opacity-10 animate-pulse" />
              </div>

              {/* Title */}
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-display text-4xl md:text-5xl leading-tight drop-shadow-sm">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
