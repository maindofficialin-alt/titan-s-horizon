import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AIEvent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".event-header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".event-header", start: "top 80%" },
      });

      gsap.fromTo(".event-content", { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".event-content", start: "top 80%" },
      });

      gsap.fromTo(".event-form", { x: 30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".event-form", start: "top 80%" },
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for registering! We will get back to you soon.");
    formRef.current?.reset();
  };

  return (
    <section id="ai-event" ref={sectionRef} className="relative py-28 md:py-36 bg-pearl overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="event-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-crimson">Opportunity</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-foreground">
            AI Internship <span className="italic text-crimson">2026 Event</span>
          </h2>
          <p className="mt-6 font-serif text-xl text-foreground/70 max-w-2xl mx-auto">
            Join the next generation of AI pioneers. Register for our exclusive internship drive and build the future of intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="event-content" style={{ opacity: 0 }}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-foreground">What to Expect</h3>
                <p className="mt-3 font-serif text-lg text-foreground/70">
                  A 3-month intensive program working on real-world AI challenges across our five pillars: from autonomous logistics to environmental restoration.
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">Eligibility</h3>
                <p className="mt-3 font-serif text-lg text-foreground/70">
                  Pre-final and final year students with a passion for machine learning, neural networks, and problem-solving.
                </p>
              </div>
              <div className="p-8 rounded-[24px] bg-pearl border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-crimson/10 flex items-center justify-center text-crimson">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-serif text-sm uppercase tracking-widest text-muted-foreground">Event Date</p>
                    <p className="font-display text-xl text-foreground">Coming Very Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="event-form" style={{ opacity: 0 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-strong p-8 md:p-10 rounded-[32px] border border-border shadow-card">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block font-serif text-sm text-foreground/60 mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-border focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all font-serif"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-serif text-sm text-foreground/60 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@university.edu"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-border focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all font-serif"
                  />
                </div>
                <div>
                  <label htmlFor="university" className="block font-serif text-sm text-foreground/60 mb-2 ml-1">University / Institute</label>
                  <input
                    type="text"
                    id="university"
                    required
                    placeholder="Stanford University"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-border focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all font-serif"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-serif text-sm text-foreground/60 mb-2 ml-1">Why do you want to join?</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your interest in AI..."
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-border focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all font-serif resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-crimson w-full py-5 rounded-2xl font-display text-lg tracking-wide mt-2"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
