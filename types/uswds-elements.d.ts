import type React from "react";

/*
 * JSX typings for the @noctuatech/uswds custom elements we use.
 * Web components take string attributes; React 18 passes them through as-is.
 */
type CustomElement<T = Record<string, unknown>> = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  T & { class?: string };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "usa-config": CustomElement<{ "icon-path"?: string }>;
      "usa-button": CustomElement<{
        variant?: string;
        href?: string;
        target?: string;
        type?: string;
        disabled?: string | boolean;
        value?: string;
      }>;
      "usa-tag": CustomElement<{ variant?: string; type?: string }>;
      "usa-card": CustomElement<{ variant?: string; role?: string }>;
      "usa-card-header": CustomElement;
      "usa-card-body": CustomElement;
      "usa-card-footer": CustomElement;
      "usa-card-media": CustomElement<{ variant?: string }>;
      "usa-card-group": CustomElement<{ role?: string }>;
      "usa-summary-box": CustomElement;
      "usa-alert": CustomElement<{ type?: string }>;
      "usa-link": CustomElement<{ href?: string; target?: string; title?: string }>;
      "usa-icon": CustomElement<{ icon?: string }>;
    }
  }
}

export {};
