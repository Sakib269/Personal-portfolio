import { SectionLabel } from "@/components/section-label";

const EXPERIENCE = [
  {
    company: "Aflac",
    role: "Software Engineer I",
    period: "2025 — Present",
    location: "Remote",
    logo: "/logos/aflac.png",
    bullets: [
      "Build a full-stack employee portal that serves personalized dashboards behind SSO/OAuth, rebuilt from FastAPI to Java for AEC requirements, with a React frontend deployed on AWS.",
      "Cut manual QA effort 60% by shipping Automated Test Framework suites now used across 5+ departments, catching regressions before every release.",
      "Eliminated a manual cross-team handoff by integrating ServiceNow with SAP Solution Manager into one incident and change pipeline used across enterprise departments.",
      "Restored broken QA and code-quality reporting by writing REST API scripts that repaired Zephyr and SonarQube data ingestion into downstream dashboards.",
      "Own end-to-end ServiceNow development for 5+ departments: Business Rules, Script Includes, UI Policies, and Client Scripts behind enterprise ITSM workflows.",
    ],
  },
  {
    company: "Global Atlantic Financial Group",
    role: "Information Security Technology Intern",
    period: "Summer 2023",
    location: "Boston, MA",
    logo: "/logos/global-atlantic.png",
    bullets: [
      "Cut credential audit time 70% with a Python pipeline that unified secretsdump extraction, LDAP querying, and Excel reporting to surface weak and reused passwords across Active Directory.",
      "Reduced provisioning and decommissioning overhead 40% with REST API scripts that automate the full server lifecycle.",
      "Accelerated incident response by triaging daily security alerts across CrowdStrike, Vectra, and ServiceNow.",
    ],
  },
] as const;

export function Experience() {
  return (
    <section id="experience" className="usa-section bg-base-lightest">
      <div className="grid-container">
        <SectionLabel title="Experience" headingId="experience-heading" />

        <div className="experience-list">
          {EXPERIENCE.map((job) => (
            <article className="exp" key={job.company}>
              <div className="exp__head">
                <span className="exp__logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={job.logo} alt="" />
                </span>
                <div>
                  <h3 className="exp__title">
                    {job.role} · {job.company}
                  </h3>
                  <p className="exp__meta">
                    {job.period} · {job.location}
                  </p>
                </div>
              </div>
              <ul className="exp__bullets">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="margin-top-4">
          <a
            className="usa-button usa-button--outline"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
        </div>
      </div>
    </section>
  );
}
