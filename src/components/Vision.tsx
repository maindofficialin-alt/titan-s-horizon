import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Vision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Quote words split animation — each line fades in with stagger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
      });

      tl.fromTo(
        quoteRef.current,
        { y: 60, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          bodyRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );

      // Art — rotating nodes that speed up on scroll
      gsap.fromTo(
        artRef.current,
        { y: 80, opacity: 0, scale: 0.8, rotate: -10 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: artRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Continuous slow rotation of the nodes art
      gsap.to(artRef.current?.querySelector("svg"), {
        rotate: 360,
        duration: 60,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background accent blurs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-crimson/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-lavender/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-lavender-deep">Our Vision</p>
          <h2
            ref={quoteRef}
            className="mt-6 font-display text-[clamp(2.2rem,5.4vw,5rem)] leading-[1.02] text-crimson"
            style={{ opacity: 0, perspective: "600px" }}
          >
            "We do not build<br />
            <span className="italic">industries.</span><br />
            We build the{" "}
            <em className="not-italic underline decoration-lavender decoration-[3px] underline-offset-[10px]">
              nervous system
            </em>
            <br />
            of tomorrow."
          </h2>
          <p
            className="mt-10 max-w-xl font-serif text-xl leading-relaxed text-lavender-deep"
          >
            MAIND.in is a global conglomerate redefining the boundaries of artificial intelligence,
            renewable energy, and motion — an organism of disciplines, breathing as one.
          </p>
          <p
            ref={bodyRef}
            className="mt-6 max-w-xl font-serif text-xl leading-relaxed text-foreground/75"
            style={{ opacity: 0 }}
          >
            From the silent hum of a charging fleet to the quiet calculus of an edge model orchestrating
            a wind farm at dawn — every venture under MAIND.in is a single, continuous gesture toward a
            cleaner, more intelligent civilisation.
          </p>
          <div ref={dividerRef} className="mt-12 divider-pulse w-40 origin-left" style={{ transform: "scaleX(0)" }} />
        </div>

        <div ref={artRef} className="lg:col-span-5" style={{ opacity: 0 }}>
          <NodesArt />
        </div>
      </div>
    </section>
  );
};

const NodesArt = () => (
  <div className="relative aspect-square w-full max-w-[520px] mx-auto">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender-soft via-pearl to-lettuce-soft blur-2xl opacity-70" />
    <svg viewBox="0 0 500 500" className="relative w-full h-full">
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="hsl(353 79% 56%)" stopOpacity="0.18" />
          <stop offset="1" stopColor="hsl(353 79% 56%)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="250" cy="250" r="240" fill="url(#halo)" />
      {/* concentric rings */}
      {[80, 140, 200].map((r, i) => (
        <circle
          key={r}
          cx="250"
          cy="250"
          r={r}
          fill="none"
          stroke="hsl(220 13% 80%)"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity={0.5 - i * 0.12}
        />
      ))}
      {/* nodes */}
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 14) * Math.PI * 2;
        const r = 200;
        const x = 250 + Math.cos(a) * r;
        const y = 250 + Math.sin(a) * r;
        const c =
          i % 3 === 0 ? "hsl(353 79% 56%)" : i % 3 === 1 ? "hsl(256 50% 60%)" : "hsl(92 51% 55%)";
        return (
          <g key={i}>
            <line x1="250" y1="250" x2={x} y2={y} stroke={c} strokeWidth="0.8" opacity="0.35" />
            <circle cx={x} cy={y} r="6" fill={c}>
              <animate attributeName="r" values="4;8;4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
      <circle cx="250" cy="250" r="14" fill="hsl(0 0% 100%)" stroke="hsl(353 79% 56%)" strokeWidth="2" />
      <circle cx="250" cy="250" r="5" fill="hsl(353 79% 56%)">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);
