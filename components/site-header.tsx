"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();
    SECTION_IDS.forEach((id) => {
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
    <>
      <div
        className={`usa-overlay${mobileOpen ? " is-visible" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href="#" title="Sakib Shadab — home">
                  Sakib Shadab
                </a>
              </em>
            </div>
            <ThemeToggle />
            <button
              type="button"
              className="usa-menu-btn"
              onClick={() => setMobileOpen(true)}
            >
              Menu
            </button>
          </div>
          <nav
            aria-label="Primary navigation"
            className={`usa-nav${mobileOpen ? " is-visible" : ""}`}
          >
            <button
              type="button"
              className="usa-nav__close"
              onClick={() => setMobileOpen(false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/usa-icons/close.svg" role="img" alt="Close" />
            </button>
            <ul className="usa-nav__primary usa-accordion">
              {NAV_LINKS.map(({ label, href, id }) => (
                <li key={href} className="usa-nav__primary-item">
                  <a
                    href={href}
                    className={`usa-nav__link${
                      active === id ? " usa-current" : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
