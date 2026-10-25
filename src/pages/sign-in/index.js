import { staticView as html } from "../../shared/ui/static-view.js";

export function createSignInPage() {
  const element = html`<div id="signInPage" class="page">
    <main id="sign-in">
      <section class="tint-bg coming-soon">
        <div class="wrap">
          <a class="back back-to-home" href="#top">← Back to main page</a>
          <div class="card coming-soon-card">
            <span class="badge">Coming soon</span>
            <h1>Sign in</h1>
            <p class="lead">Your future FDM space.</p>
            <p>Participant and staff sign-in is not available yet. Account access will be announced when the platform is ready.</p>
            <p>There is nothing to sign in to at this stage. We do not ask for your email, password or verification code.</p>
            <div class="coming-soon-actions">
              <a class="btn" href="#top">Explore FDM</a>
              <a class="coming-soon-contact" href="mailto:info@fdm-leb.com">Contact the FDM team</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>`;
  return { element, title: "Sign in coming soon — FDM" };
}
