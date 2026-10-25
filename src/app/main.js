import { createHomePage } from "../pages/home/index.js";
import { createTeamsPage } from "../pages/teams/index.js";
import { createLearnMorePage } from "../pages/learn-more/index.js";
import { createRegistrationPage } from "../pages/registration/index.js";
import { createSignInPage } from "../pages/sign-in/index.js";
import { createNavigation } from "./navigation.js";

export function initializeApplication() {
  const home = createHomePage();
  const pages = {
    home,
    teams: createTeamsPage(),
    "learn-more": createLearnMorePage(),
    register: createRegistrationPage(),
    "sign-in": createSignInPage(),
  };
  document
    .getElementById("pages")
    .replaceChildren(...Object.values(pages).map((page) => page.element));
  const navigation = createNavigation(pages);
  function handlePageHide(event) {
    // A page entering the back/forward cache must retain its event handlers.
    if (event.persisted) return;
    destroy();
  }

  function destroy() {
    window.removeEventListener("pagehide", handlePageHide);
    navigation.destroy();
    home.destroy();
  }
  window.addEventListener("pagehide", handlePageHide);
  return { destroy };
}
