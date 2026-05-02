import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaindLogo } from "./MaindLogo";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "Vision", href: "/#vision" },
  { label: "Projects", href: "/#projects" },
  { label: "Team", href: "/#team" },
  { label: "AI Event", href: "/#ai-event" },
  { label: "Careers", href: "/#careers" },
];

const servicesDropdown = [
  { label: "AI & Edge Computing", href: "/service/ai-edge" },
  { label: "Logistics", href: "/service/logistics" },
  { label: "Energy", href: "/service/energy" },
  { label: "EVs", href: "/service/evs" },
  { label: "Cinematic Ad Media", href: "/service/cinematic-media" },
  { label: "Governance & Public Admin", href: "/service/governance" },
  { label: "Environmental AI", href: "/service/environment" },
];

export const Nav = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    // Animate nav in on page load
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    // Change nav style on scroll
    ScrollTrigger.create({
      start: "top -100",
      onUpdate: (self) => {
        setScrolled(self.progress > 0);
      },
    });
  }, []);

  return (
    <header ref={navRef} className="fixed top-4 left-1/2 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2" style={{ opacity: 0 }}>
      <nav className={`rounded-full px-6 py-3 flex items-center justify-between transition-all duration-700 ${
        scrolled
          ? "glass-strong shadow-lg backdrop-blur-xl"
          : "glass shadow-soft"
      }`}>
        <Link to="/" className="text-foreground group">
          <MaindLogo className="h-7 w-7 text-foreground transition-transform duration-500 group-hover:rotate-[360deg]" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="relative group animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <button className="nav-link flex items-center gap-1 pb-1">
              Services
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {/* Invisible bridge to prevent hover loss */}
            <div className="absolute top-full left-0 w-full h-4" />
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-64 rounded-2xl glass-strong border border-border shadow-card opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden flex flex-col">
              {servicesDropdown.map((s) => (
                <Link key={s.label} to={s.href} className="px-5 py-4 text-xl text-foreground/80 hover:text-lettuce hover:bg-white/5 transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </li>
          {links.map((l, i) => (
            <li key={l.label} style={{ animationDelay: `${680 + i * 80}ms` }} className="animate-fade-in-up">
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>

        <a href="#contact" className="hidden md:inline-flex btn-base bg-foreground text-background py-2.5 px-5 text-sm rounded-full hover:scale-105 transition-transform duration-300">
          Connect
        </a>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden mt-2 rounded-2xl glass-strong overflow-hidden transition-all duration-500 ${
        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <ul className="flex flex-col p-6 gap-4">
          <li>
            <Link to="/" className="nav-link text-lg" onClick={() => setMobileOpen(false)}>Home</Link>
          </li>
          <li className="font-bold text-sm text-foreground/50 uppercase tracking-widest mt-2">Services</li>
          {servicesDropdown.map((s) => (
            <li key={s.label} className="pl-4">
              <Link to={s.href} className="nav-link text-lg" onClick={() => setMobileOpen(false)}>{s.label}</Link>
            </li>
          ))}
          <li className="font-bold text-sm text-foreground/50 uppercase tracking-widest mt-2">Company</li>
          {links.map((l) => (
            <li key={l.label} className="pl-4">
              <a href={l.href} className="nav-link text-lg" onClick={() => setMobileOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li className="mt-4">
            <a href="#contact" className="btn-base bg-foreground text-background py-2.5 px-5 text-sm rounded-full w-full text-center">
              Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
