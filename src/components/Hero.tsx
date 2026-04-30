import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphCanvas } from "./MorphCanvas";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        tagRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          headingRef.current,
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          scrollHintRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        );

      // Parallax on scroll — heading rises, canvas sinks
      gsap.to(headingRef.current, {
        y: -120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(canvasWrapRef.current, {
        y: 80,
        scale: 1.1,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Scroll hint pulse animation
      gsap.to(scrollHintRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Animated energy veins */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pearl via-pearl to-background" />
        {[
          { top: "18%", color: "hsl(353 79% 56% / 0.55)", delay: "0s", dur: "11s" },
          { top: "42%", color: "hsl(256 65% 70% / 0.55)", delay: "2.5s", dur: "13s" },
          { top: "68%", color: "hsl(353 79% 56% / 0.45)", delay: "1.2s", dur: "9s" },
          { top: "85%", color: "hsl(256 50% 60% / 0.45)", delay: "3.4s", dur: "12s" },
        ].map((v, i) => (
          <div key={i} className="absolute left-0 right-0 h-px" style={{ top: v.top }}>
            <div
              className="h-px w-1/3"
              style={{
                background: `linear-gradient(90deg, transparent, ${v.color}, transparent)`,
                animation: `vein-flow ${v.dur} ${v.delay} ease-in-out infinite`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0
                ? "hsl(353 79% 56% / 0.3)"
                : i % 3 === 1
                ? "hsl(256 50% 60% / 0.3)"
                : "hsl(92 51% 55% / 0.3)",
              animation: `float-particle ${8 + Math.random() * 12}s ${Math.random() * 5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* MorphCanvas */}
      <div ref={canvasWrapRef} className="absolute inset-0 flex items-center justify-center -z-0">
        <div className="absolute inset-0 bg-background/50 z-10" />
        <div className="relative w-[min(1100px,90vw)] h-[min(620px,80vh)]">
          <MorphCanvas />
          <div className="absolute inset-0 bg-gradient-mist" />
        </div>
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 pb-24 text-center">
        <p ref={tagRef} className="font-serif italic text-muted-foreground tracking-[0.3em] uppercase text-xs" style={{ opacity: 0 }}>
          A Global Infrastructure Titan
        </p>
        <h1
          ref={headingRef}
          className="mt-6 font-display text-[clamp(2.6rem,7.2vw,7.2rem)] leading-[0.98] text-crimson"
          style={{ opacity: 0 }}
        >
          Architecting the<br />
          <span className="italic font-medium">Intelligence</span> of Tomorrow
        </h1>
        <div ref={ctaRef} className="mt-12 flex flex-wrap items-center justify-center gap-5" style={{ opacity: 0 }}>
          <a href="#services" className="font-sans px-8 py-4 rounded-xl bg-primary text-primary-foreground shadow-crimson font-semibold hover:bg-primary/90 transition-colors flex items-center group">
            <span className="mr-2">Explore the System</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#vision" className="font-sans px-8 py-4 rounded-xl border border-foreground/20 bg-foreground/5 text-foreground font-semibold hover:bg-foreground/10 transition-colors">Our Vision</a>
        </div>

        <div
          ref={scrollHintRef}
          className="mt-24 flex items-center justify-center gap-3 text-muted-foreground/80"
          style={{ opacity: 0 }}
        >
          <div className="h-px w-10 bg-current opacity-40" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif italic text-sm tracking-widest">scroll</span>
            <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
          <div className="h-px w-10 bg-current opacity-40" />
        </div>
      </div>
    </section>
  );
};
