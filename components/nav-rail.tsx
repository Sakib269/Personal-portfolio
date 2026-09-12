"use client";

import * as React from "react";

const LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

/* Fixed vertical section nav (wide screens). Highlights the section currently
   in view via IntersectionObserver; the header's inline nav is hidden at this
   width (see globals.css), and a sticky header covers narrower screens. */
export function NavRail() {
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visible.set(id, entry.intersectionRatio);
          else visible.delete(id);
          if (visible.size > 0) {
            setActive(
              Array.from(visible.entries()).sort((a, b) => b[1] - a[1])[0][0]
            );
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="nav-rail" aria-label="Section navigation">
      <ul>
        {LINKS.map((l) => (
          <li key={l.id}>
            <a
              href={l.href}
              className={active === l.id ? "is-active" : undefined}
              aria-current={active === l.id ? "true" : undefined}
            >
              <span className="nav-rail__label">{l.label}</span>
              <span className="nav-rail__line" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
