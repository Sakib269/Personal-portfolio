import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
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
        </div>
      </div>
    </header>
  );
}
