import { SectionLabel } from "@/components/section-label";

const PROJECTS = [
  {
    title: "Bicycle Mapping Application",
    period: "Aug — Dec 2023",
    description:
      "A route-mapping app with a custom Shortcut Mode for drawing routes across unmapped terrain, using the Open Route Service API for optimized plotting. Computes water intake and calories burned from route distance, terrain, and activity level.",
    stack: ["Python", "Pygame", "REST API"],
    github: "https://github.com/Sakib269/Large-Scale-Dev",
  },
  {
    title: "MIPS Assembly Simulator",
    period: "Jan — May 2023",
    description:
      "A MIPS assembly simulator with a tokenizer, parser, and virtual machine for full instruction execution, exposed through both GUI and TUI interfaces and backed by a unit-test suite covering parsing and execution edge cases.",
    stack: ["C++", "Qt", "Catch2"],
    github: "https://github.com/Sakib269/MIPS-assembly",
  },
  {
    title: "Go Fish",
    period: "Jan — May 2023",
    description:
      "A Go Fish card game with multiplayer turn logic and win detection. A small project for practicing clean game-state modeling.",
    stack: ["Python"],
    github: "https://github.com/Sakib269/Go-Fish",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      className="proj__arrow"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="usa-section">
      <div className="grid-container">
        <SectionLabel title="Projects" headingId="projects-heading" />

        <ul className="projects-list">
          {PROJECTS.map((p) => (
            <li className="proj" key={p.title}>
              <div className="proj__meta">{p.period}</div>
              <div className="proj__body">
                <h3 className="proj__title">
                  <a
                    className="proj__link"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{p.title}</span>
                    <ArrowIcon />
                  </a>
                </h3>
                <p className="proj__desc">{p.description}</p>
                <ul className="proj__stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
