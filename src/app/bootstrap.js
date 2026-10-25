import { initializeApplication } from "./main.js";

// Static discovery loads the module graph alongside CSS. The HTML shell handles
// module-fetch failures; this boundary also catches initialization failures.
try {
  initializeApplication();
  document.body.dataset.appState = "ready";
  document.getElementById("pages").setAttribute("aria-busy", "false");
  const nav = document.getElementById("nav");
  nav.inert = false;
  nav.removeAttribute("aria-busy");
  document.getElementById("burger").disabled = false;
  const signInLink = document.getElementById("signinBtn");
  signInLink.removeAttribute("aria-disabled");
  signInLink.removeAttribute("tabindex");
  document.querySelector(".skip-link").setAttribute("href", "#pages");
} catch {
  document.body.dataset.appState = "error";
  document.getElementById("pages").setAttribute("aria-busy", "false");
  document.getElementById("startup-error-title").focus();
}
