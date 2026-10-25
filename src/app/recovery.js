// A separate classic script also handles failure to load the module graph.
// Keeping this external allows script-src 'self' without unsafe-inline.
document
  .getElementById("retry-startup")
  .addEventListener("click", () => location.reload());
document.addEventListener(
  "error",
  (event) => {
    if (event.target?.id !== "app-entry") return;
    document.body.dataset.appState = "error";
    document.getElementById("pages").setAttribute("aria-busy", "false");
    document.getElementById("startup-error-title").focus();
  },
  true,
);
