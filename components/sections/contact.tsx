import { SectionLabel } from "@/components/section-label";
import { GithubIcon, LinkedinIcon } from "@/components/social";

export function Contact() {
  return (
    <section id="contact" className="usa-section">
      <div className="grid-container">
        <SectionLabel title="Contact" headingId="contact-heading" />

        <div className="summary-box">
          <h3 className="summary-box__heading">Let&apos;s talk.</h3>
          <p className="summary-box__text measure-4">
            Email is the best way to reach me. I read everything that comes in
            and usually reply within a day or two.
          </p>

          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
            className="margin-top-3"
          >
            <usa-button href="mailto:sakibshadab26@gmail.com">
              Send an email
            </usa-button>
            <a
              className="usa-button usa-button--outline"
              href="https://github.com/Sakib269"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: "3rem",
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GithubIcon size={20} />
            </a>
            <a
              className="usa-button usa-button--outline"
              href="https://www.linkedin.com/in/sakib-shadab-8196a3245/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: "3rem",
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
