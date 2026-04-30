import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARTNERS: string[] = [];

export const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !marqueeRef.current) return;
    const ctx = gsap.context(() => {
      // Reveal the "Trusted By" text
      gsap.fromTo(".partners-header", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%" },
      });

      // Change speed of marquee on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
      
      tl.to(marqueeRef.current, { x: "-20%" });

    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="energy" ref={sectionRef} className="relative py-20 bg-silver/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 partners-header" style={{ opacity: 0 }}>
        <p className="text-center font-serif italic tracking-[0.3em] uppercase text-xs text-muted-foreground">Trusted By</p>
      </div>
      <div className="mt-10 overflow-hidden relative">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div ref={marqueeRef} className="flex w-max gap-16 px-8">
          <div className="flex gap-16 animate-marquee">
             {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span key={i} className="font-display text-2xl tracking-[0.25em] text-foreground/40 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300 cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
