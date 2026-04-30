import { MaindLogo } from "./MaindLogo";

const COLS = [
  { head: "Ventures",  links: ["AI & Edge Tech", "Smart Logistics", "Cinematic Media", "Renewable Energy", "EV Infrastructure"] },
  { head: "Company",   links: ["Vision", "Leadership", "Press", "Sustainability Report", "Newsroom"] },
  { head: "Resources", links: ["Whitepapers", "Case Studies", "Developer Hub", "Investor Relations", "Careers"] },
];

const Social = ({ d, label }: { d: string; label: string }) => (
  <a href="#" aria-label={label}
     className="grid place-items-center h-10 w-10 rounded-full border border-border text-foreground/70 hover:bg-lavender hover:text-foreground hover:border-transparent transition-all duration-300">
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={d}/></svg>
  </a>
);

export const Footer = () => (
  <footer id="contact" className="relative bg-pearl">
    <div className="grain absolute inset-0 opacity-40 pointer-events-none" />
    <div className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Top — logo + email */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="text-foreground"><MaindLogo className="h-10 w-10" /></div>
          <p className="mt-6 font-serif text-xl text-foreground/70 max-w-md">
            Architecting the intelligence of tomorrow — quietly, relentlessly,
            and with a deep respect for the world we are building it for.
          </p>
        </div>
        <div className="lg:col-span-7">
          <p className="font-serif italic tracking-[0.3em] uppercase text-xs text-muted-foreground">Get in touch</p>
          <a href="mailto:maindofficial.in@gmail.com"
             className="mt-3 inline-block font-display text-[clamp(1.5rem,4vw,3.5rem)] leading-tight text-crimson hover:underline decoration-2 underline-offset-[10px] decoration-lavender-deep break-all">
            maindofficial.in@gmail.com
          </a>
          <div className="mt-8 flex items-center gap-3">
            <Social label="LinkedIn" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v14H.24V8zM8.5 8h4.33v1.92h.06c.6-1.14 2.07-2.34 4.27-2.34 4.57 0 5.41 3.01 5.41 6.93V22h-4.52v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22H8.5V8z"/>
            <Social label="X"        d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.66-6.06L4.96 22H2.2l6.96-7.95L2 2h6.91l4.21 5.55L18.24 2zm-1.19 18h1.88L7.04 4H5.06l11.99 16z"/>
            <Social label="Instagram" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.84c-3.15 0-3.5.01-4.74.07-.99.05-1.53.21-1.89.35-.47.18-.81.4-1.16.75-.36.36-.57.69-.75 1.16-.14.36-.3.9-.35 1.89-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05.99.21 1.53.35 1.89.18.47.4.81.75 1.16.36.36.69.57 1.16.75.36.14.9.3 1.89.35 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.99-.05 1.53-.21 1.89-.35.47-.18.81-.4 1.16-.75.36-.36.57-.69.75-1.16.14-.36.3-.9.35-1.89.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-.99-.21-1.53-.35-1.89a3.13 3.13 0 0 0-.75-1.16 3.13 3.13 0 0 0-1.16-.75c-.36-.14-.9-.3-1.89-.35-1.24-.06-1.59-.07-4.74-.07zm0 3.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.74zm0 8.03a3.16 3.16 0 1 0 0-6.32 3.16 3.16 0 0 0 0 6.32zm6.2-8.23a1.14 1.14 0 1 1-2.28 0 1.14 1.14 0 0 1 2.28 0z"/>
            <Social label="YouTube"   d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.37.56A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.13 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.37-.56a3.02 3.02 0 0 0 2.13-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="my-16 h-px bg-gradient-divider opacity-60" />

      {/* columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {COLS.map((col) => (
          <div key={col.head}>
            <p className="font-serif italic tracking-[0.25em] uppercase text-xs text-muted-foreground">{col.head}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="font-serif text-lg text-foreground/75 hover:text-crimson transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="font-serif italic tracking-[0.25em] uppercase text-xs text-muted-foreground">Headquarters</p>
          <p className="mt-5 font-serif text-lg text-foreground/75">
            12 Embassy Crescent<br/>Bengaluru 560008<br/>India
          </p>
        </div>
      </div>

      <div className="my-12 h-px bg-gradient-divider opacity-40" />

      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground font-serif">
        <p>© {new Date().getFullYear()} MAIND Holdings. All rights reserved.</p>
        <p className="italic">Designed with quiet conviction.</p>
      </div>
    </div>
  </footer>
);
