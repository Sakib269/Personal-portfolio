import { SectionLabel } from "@/components/section-label";

const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    label: "Backend & APIs",
    skills: ["FastAPI", "Flask", "Node.js", "REST APIs", "SSO/OAuth", "Docker"],
  },
  {
    label: "Frontend & Data",
    skills: ["React", "HTML/CSS", "pandas", "NumPy", "Plotly", "scikit-learn"],
  },
  {
    label: "Platforms & Practices",
    skills: ["AWS", "ServiceNow", "Git", "Jira", "CI/CD", "Agile"],
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="usa-section bg-base-lightest">
      <div className="grid-container">
        <SectionLabel title="Skills" headingId="skills-heading" />

        <div className="grid-row grid-gap">
          {SKILL_GROUPS.map((group) => (
            <div
              className="tablet:grid-col-6 desktop:grid-col-3 margin-bottom-4"
              key={group.label}
            >
              <h3 className="font-heading-sm text-primary-darker margin-bottom-1">
                {group.label}
              </h3>
              <div
                aria-hidden
                className="bg-primary margin-bottom-2"
                style={{ height: 2, width: "100%", maxWidth: 140 }}
              />
              <ul className="usa-list usa-list--unstyled">
                {group.skills.map((skill) => (
                  <li key={skill} className="margin-bottom-1 text-base-dark">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
