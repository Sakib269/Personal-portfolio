"use client";

import * as React from "react";

/* Fades its children up into view the first time they enter the viewport.
   Pure IntersectionObserver + a CSS class toggle — see .reveal in globals.css.
   Respects prefers-reduced-motion (handled in CSS). */
export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${shown ? " is-visible" : ""}`}>
      {children}
    </div>
  );
}
