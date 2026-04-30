import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Careers = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".careers-header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".careers-header", start: "top 80%" },
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="careers" ref={sectionRef} className="relative py-28 md:py-36 bg-pearl overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="careers-header" style={{ opacity: 0 }}>
          <p className="font-sans italic tracking-[0.3em] uppercase text-xs text-lettuce">Join the Future</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.05]">
            Help build the <span className="italic text-crimson">zero-emission</span> future.
          </h2>
          <p className="mt-8 font-sans text-xl md:text-2xl text-foreground/70 leading-relaxed mx-auto">
            We are actively recruiting visionaries, engineers, and strategists. If you possess the taste, rigour, and a quiet obsession with the long view, we want to hear from you.
          </p>
          
          <div className="mt-12">
            <a href="mailto:hr@maind.in" className="inline-block px-8 py-4 rounded-xl bg-crimson text-white font-sans font-semibold text-lg hover:bg-crimson/90 transition-colors shadow-crimson hover:shadow-none">
              Reach out at hr@maind.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
