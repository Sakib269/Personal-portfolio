"use client";

import { useEffect } from "react";

/*
 * Registers the @noctuatech/uswds custom elements in the browser.
 * Import must be client-only: the elements call customElements.define at
 * module-eval time, which would crash during server rendering.
 */
export function UswdsRegister() {
  useEffect(() => {
    import("@noctuatech/uswds");
  }, []);
  return null;
}
