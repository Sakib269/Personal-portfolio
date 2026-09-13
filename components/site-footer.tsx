const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="usa-footer usa-footer--slim">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#main-content">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">
        <div className="usa-footer__primary-container grid-row">
          <div className="mobile-lg:grid-col-8">
            <nav className="usa-footer__nav" aria-label="Footer navigation">
              <ul className="grid-row grid-gap">
                {FOOTER_LINKS.map((l) => (
                  <li
                    key={l.href}
                    className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content"
                  >
                    <a className="usa-footer__primary-link" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="usa-footer__logo grid-row grid-gap-2">
            <div className="grid-col-auto">
              <p className="usa-footer__logo-heading">Sakib Shadab</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
