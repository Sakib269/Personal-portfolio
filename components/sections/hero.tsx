export function Hero() {
  return (
    <section id="hero" className="usa-section bg-primary-darker text-white">
      <div className="grid-container">
        <div className="grid-row grid-gap flex-align-center">
          <div className="tablet:grid-col-8">
            <span
              style={{
                display: "inline-block",
                background: "#ffbe2e",
                color: "#1b1b1b",
                fontWeight: 700,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "0.25rem 0.75rem",
                borderRadius: "0.25rem",
                marginBottom: "1.5rem",
              }}
            >
              Open to new roles
            </span>

            <h1 className="font-heading-3xl text-bold margin-top-0 margin-bottom-2">
              Sakib Shadab
            </h1>

            <p
              className="font-sans-lg text-bold margin-y-0"
              style={{ color: "#73b3e7" }}
            >
              Software Engineer at Aflac
            </p>

            <p className="font-sans-md text-base-lightest measure-4 margin-top-2 margin-bottom-4">
              I&apos;m a software engineer who automates inefficient processes.
            </p>

            <div
              className="hero-actions"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
            >
              <usa-button href="#contact">Get in touch</usa-button>
            </div>
          </div>

          <div className="tablet:grid-col-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.png"
              alt="Sakib Shadab"
              className="width-full radius-lg margin-top-4 tablet:margin-top-0"
              style={{
                border: "4px solid rgba(255,255,255,0.2)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
