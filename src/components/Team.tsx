import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  { name: "", title: "Founder & Chief Architect", initials: "AR", hue: "from-crimson-soft to-lavender-soft" },
  { name: "", title: "Head of EV Infrastructure", initials: "ML", hue: "from-lettuce-soft to-pearl" },
  { name: "", title: "Director, Cinematic Media", initials: "YT", hue: "from-lavender-soft to-crimson-soft" },
  { name: "", title: "Lead Scientist, AI Systems", initials: "IO", hue: "from-pearl to-lavender-soft" },
];

export const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".team-header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".team-header", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".team-card").forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="evs" ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl team-header" style={{ opacity: 0 }}>
          <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-lavender-deep">Meet the Innovators</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.05]">
            Quiet hands, <span className="italic text-crimson">loud futures</span>.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m) => (
            <div key={m.title} className="team-card card-bento p-6 shimmer-lavender group" style={{ opacity: 0 }}>
              <div className={`aspect-[4/5] rounded-[18px] bg-gradient-to-br ${m.hue} grid place-items-center overflow-hidden relative`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-foreground/20 to-transparent transition-opacity duration-500" />
                <span className="font-display text-6xl text-foreground/70 group-hover:scale-110 transition-transform duration-500 ease-out">{m.initials}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl group-hover:text-crimson transition-colors duration-300">{m.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
