import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable hook to create GSAP ScrollTrigger-driven animations.
 * Returns a ref to attach to the container element.
 */
export function useGsapScroll<T extends HTMLElement = HTMLDivElement>(
  setupFn: (el: T, ctx: gsap.Context) => void,
  deps: unknown[] = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      setupFn(ref.current!, ctx);
    }, ref.current);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
