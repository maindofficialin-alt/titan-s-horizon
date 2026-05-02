import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DIRECTOR = {
  name: "TVS MOHAN VISHAL RAJ",
  title: "Managing Director",
  bio: "Visionary leader overseeing the long-term strategic evolution of the MAIND ecosystem, ensuring every venture aligns with a zero-emission, intelligence-first future.",
  image: "/director.jpg",
  hue: "from-crimson-soft to-lavender-soft"
};

const CEO = {
  name: "B Hemanth sri sai",
  title: "Chief Executive Officer",
  bio: "A strategic visionary at the helm of MAIND Holdings. B Hemanth sri sai orchestrates the synergy between AI ecosystems and industrial infrastructure, driving the company's mission to architect the intelligence of tomorrow.",
  image: "/ceo-hemanth.jpg",
  hue: "from-lettuce-soft to-pearl"
};

export const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".team-header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".team-header", start: "top 80%" },
      });

      gsap.fromTo(".director-card", { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".director-card", start: "top 75%" },
      });

      gsap.fromTo(".ceo-card", { x: 60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".ceo-card", start: "top 75%" },
      });

      gsap.fromTo(".expert-footer", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".expert-footer", start: "top 95%" },
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="team-header text-center mb-20 md:mb-28" style={{ opacity: 0 }}>
          <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-crimson">Our Leadership</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-foreground">
            The minds behind the <span className="italic text-crimson">momentum.</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Director Highlight */}
          <div className="director-card" style={{ opacity: 0 }}>
            <div className="group relative bg-pearl rounded-[48px] p-8 md:p-14 border border-border shadow-card overflow-hidden">
              <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${DIRECTOR.hue} opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`} />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
                <div className="lg:col-span-4 aspect-square rounded-[36px] overflow-hidden shadow-soft border border-white/50 bg-silver/10">
                  <img 
                    src={DIRECTOR.image} 
                    alt={DIRECTOR.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <p className="font-serif italic text-crimson tracking-[0.3em] uppercase text-xs mb-3">Managing Director</p>
                    <h3 className="font-display text-4xl md:text-6xl text-foreground">{DIRECTOR.name}</h3>
                    <div className="mt-4 h-px w-20 bg-crimson/30" />
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl">
                    {DIRECTOR.bio}
                  </p>
                  <div className="pt-4">
                    <a href="#" className="inline-flex items-center gap-3 text-crimson hover:gap-5 transition-all duration-300 font-display text-lg group/link">
                      Connect on LinkedIn
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Highlight */}
          <div className="ceo-card" style={{ opacity: 0 }}>
            <div className="group relative bg-pearl rounded-[48px] p-8 md:p-14 border border-border shadow-card overflow-hidden">
              <div className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r ${CEO.hue} opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`} />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
                <div className="lg:col-span-8 order-2 lg:order-1 space-y-6 text-right lg:text-left flex flex-col items-end lg:items-start">
                  <div>
                    <p className="font-serif italic text-crimson tracking-[0.3em] uppercase text-xs mb-3">Chief Executive Officer</p>
                    <h3 className="font-display text-4xl md:text-6xl text-foreground">{CEO.name}</h3>
                    <div className="mt-4 h-px w-20 bg-crimson/30 ml-auto lg:ml-0" />
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl">
                    {CEO.bio}
                  </p>
                  <div className="pt-4">
                    <a href="#" className="inline-flex items-center gap-3 text-crimson hover:gap-5 transition-all duration-300 font-display text-lg group/link">
                      Connect on LinkedIn
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-4 order-1 lg:order-2 aspect-square rounded-[36px] overflow-hidden shadow-soft border border-white/50 bg-silver/10">
                  <img 
                    src={CEO.image} 
                    alt={CEO.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Mention */}
        <div className="expert-footer mt-24 md:mt-32 text-center" style={{ opacity: 0 }}>
          <div className="inline-flex flex-col md:flex-row items-center gap-6 px-10 py-6 rounded-[32px] bg-pearl border border-border shadow-soft relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-pearl bg-silver/20 grid place-items-center">
                  <span className="text-[10px] font-display text-foreground/30 italic">Expert</span>
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-pearl bg-crimson text-white grid place-items-center shadow-lg shadow-crimson/20">
                <span className="text-xs font-bold">+</span>
              </div>
            </div>
            <p className="font-serif text-xl text-foreground/80 relative z-10">
              Backed by a global network of <span className="text-crimson font-bold">100+ industry experts</span> and visionaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
