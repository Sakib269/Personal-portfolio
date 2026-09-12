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
                I&apos;m a software engineer at Aflac, and honestly the part I
                like most is finding some slow, manual process everyone&apos;s
                quietly resigned to and turning it into something that just runs
                itself. That pulls me up and down the stack, from the backend
                services and APIs underneath to the interface people actually
                touch.
              </p>
              <p>
                I got into this the way a lot of people do: I liked building
                things, and I was always the one who was good with computers. I
                came at software through embedded systems, which is probably why
                I still care most about what&apos;s happening underneath the
                surface, how the pieces actually talk to each other and what
                breaks when they don&apos;t.
              </p>
              <p>
                Away from the keyboard, I&apos;m usually playing soccer, sinking
                too many hours into a video game, or trying to cook something
                ambitious with my cat supervising from the counter.
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
