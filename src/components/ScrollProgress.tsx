import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * A fixed progress bar at the top of the viewport that fills
 * as the user scrolls through the page — visual feedback for scrollytelling.
 */
export const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{
          transform: "scaleX(0)",
          background:
            "linear-gradient(90deg, hsl(353 79% 56%), hsl(256 50% 60%), hsl(92 51% 55%))",
        }}
      />
    </div>
  );
};
