import { useEffect, useRef } from "react";
import Lenis from "lenis";

const DEFAULT_EASING = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function useLenis({ enabled = true, options = {} } = {}) {
  const lenisRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      easing: DEFAULT_EASING,
      ...options,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled, options]);

  return lenisRef;
}
