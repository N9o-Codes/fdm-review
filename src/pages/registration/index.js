import { staticView as html } from "../../shared/ui/static-view.js";

export function createRegistrationPage() {
  const element = html`<div id="registrationPage" class="page">
    <main id="register">
      <section class="tint-bg coming-soon">
        <div class="wrap">
          <a class="back back-to-home" href="#top">← Back to main page</a>
          <div class="card coming-soon-card">
            <span class="badge">Coming soon</span>
            <h1>Team registration</h1>
            <p class="lead">Your FDM journey starts here.</p>
            <p>Team registration is not open yet. We’re preparing a clear, simple way to join the next edition.</p>
            <p>Registration dates, team requirements and participation fees will be announced here when confirmed. This release has no registration form and does not accept participant details.</p>
            <div class="coming-soon-actions">
              <a class="btn" href="#top">Explore FDM</a>
              <a class="coming-soon-contact" href="mailto:info@fdm-leb.com">Contact the FDM team</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>`;
  return { element, title: "Registration coming soon — FDM" };
}
