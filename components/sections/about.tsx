import { SectionLabel } from "@/components/section-label";

const CREDENTIALS = [
  { logo: "/logos/aflac.png", label: "Software Engineer", sub: "Aflac" },
  { logo: "/logos/vt.svg", label: "B.S. Computer Engineering", sub: "Virginia Tech" },
] as const;

export function About() {
  return (
    <section id="about" className="usa-section">
      <div className="grid-container">
        <SectionLabel title="About" headingId="about-heading" />

        <div className="grid-row grid-gap">
          <div className="desktop:grid-col-7">
            <div className="usa-prose">
              <p>
                I&apos;m a software engineer at Aflac, and what I do best is
                taking slow, manual processes and turning them into systems that
                run themselves. That work spans the whole stack: backend
                services and APIs, the test automation and CI that keep releases
                safe, and the interfaces people actually use.
              </p>
              <p>
                What I care about most is the layer underneath — how the pieces
                of a system fit together, and what happens when they don&apos;t.
                I&apos;m happiest building reliable backends and the kind of
                internal tooling that quietly makes a whole team faster.
              </p>
            </div>

            {/* Credentials */}
            <div className="margin-top-4 padding-top-3 divider-top">
              <div className="grid-row grid-gap">
                {CREDENTIALS.map((c) => (
                  <div className="grid-col-12 tablet:grid-col-6" key={c.sub}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <span className="cred-logo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.logo}
                          alt=""
                          style={{
                            maxHeight: 32,
                            maxWidth: 32,
                            objectFit: "contain",
                          }}
                        />
                      </span>
                      <div>
                        <p className="text-bold margin-y-0">{c.label}</p>
                        <p className="font-sans-3xs text-base margin-y-0">
                          {c.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="desktop:grid-col-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about.jpg"
              alt="Workspace"
              className="width-full radius-lg margin-top-4 desktop:margin-top-0 framed"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
