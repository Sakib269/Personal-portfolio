import type { Metadata } from "next";
// Real USWDS stylesheet — imported after globals.css so USWDS wins base styles.
import "@uswds/uswds/css/uswds.min.css";
import "./globals.css";
import { UswdsRegister } from "@/components/uswds-register";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://sakibshadab.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sakib Shadab — Software Engineer",
    template: "%s | Sakib Shadab",
  },
  description:
    "Software Engineer at Aflac. Building integrations, REST APIs, and developer tooling on ServiceNow. B.S. Computer Engineering, Virginia Tech.",
  authors: [{ name: "Sakib Shadab" }],
  creator: "Sakib Shadab",
  keywords: [
    "Software Engineer",
    "ServiceNow",
    "REST API",
    "TypeScript",
    "Python",
    "Aflac",
    "Virginia Tech",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Sakib Shadab",
    title: "Sakib Shadab — Software Engineer",
    description:
      "Software Engineer at Aflac building integrations, REST APIs, and developer tooling on ServiceNow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakib Shadab — Software Engineer",
    description:
      "Software Engineer at Aflac building integrations, REST APIs, and developer tooling on ServiceNow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Set the theme before paint to avoid a flash of the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`,
          }}
        />
        {/* Fallback: if JS is off, the scroll-reveal never runs — show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <UswdsRegister />
        {/* Skip link — a USWDS accessibility staple */}
        <a className="usa-skipnav" href="#main-content">
          Skip to main content
        </a>
        {/* usa-config provides the icon-path to descendant <usa-icon> elements */}
        <usa-config icon-path="/uswds-assets/usa-icons/">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </usa-config>
      </body>
    </html>
  );
}
