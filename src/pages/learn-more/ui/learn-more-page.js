import { staticView as html } from "../../../shared/ui/static-view.js";

export function createLearnMorePage() {
  const element = html`<div id="learnMorePage" class="page">
    <main>
      <div class="wrap page-back">
        <button class="back backToHomeBtn back-to-home" type="button">
          ← Back to main page
        </button>
      </div>

      <!-- Goals -->
      <section id="goals-sub" class="tint-bg">
        <div class="wrap">
          <span class="badge">Goals</span>
          <h2>Approved Learning Goals & Outcomes</h2>
          <p class="lead">
            Focusing on concrete educational impact without fabricated
            statistics or unsupported claims.
          </p>
          <div class="grid-3">
            <div class="card">
              <h3>Structured Rhetoric</h3>
              <p>
                Mastering argument construction, claim-evidence-reasoning
                structures, and rebuttal techniques.
              </p>
            </div>
            <div class="card">
              <h3>Critical Information Literacy</h3>
              <p>
                Evaluating source credibility, dissecting complex global/local
                topics, and identifying logical fallacies.
              </p>
            </div>
            <div class="card">
              <h3>Civic & Parliamentary Literacy</h3>
              <p>
                Understanding parliamentary procedures, point-of-information
                etiquette, and constructive dialogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- History -->
      <section id="history-sub" class="surface-bg">
        <div class="wrap">
          <span class="badge">History</span>
          <h2>FDM Throughout the Years</h2>
          <p class="lead">
            Published edition records and cleared historical media from past
            cohorts (2022–2025).
          </p>
          <div class="grid-3">
            <div class="card">
              <h3>2022–2023 Editions</h3>
              <p>
                Inaugural debate sessions bringing together schools across
                Lebanese regions with approved public highlights and cleared
                event media.
              </p>
            </div>
            <div class="card">
              <h3>2024–2025 Editions</h3>
              <p>
                Expansion into formal parliamentary simulations, expanded judge
                panels, and published results.
              </p>
            </div>
            <div class="card">
              <h3>2026 Current Cohort</h3>
              <p>
                Active ongoing edition. Content and media pending confirmation
                by the content owner prior to archiving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq-sub" class="tint-bg">
        <div class="wrap">
          <span class="badge">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p class="lead">
            Approved answers on eligibility, registration, payments, system
            access, and support channels.
          </p>
          <details>
            <summary>Who can register a team for FDM?</summary>
            <div class="acc-body">
              Registration is not open yet. Team eligibility and submission
              instructions will be announced on our
              <a href="#register">registration page</a>.
            </div>
          </details>
          <details>
            <summary>
              How do individual participants get sign-in credentials?
            </summary>
            <div class="acc-body">
              Participant and staff account access is coming soon. There are no
              active accounts or setup links in this website release. Visit
              <a href="#sign-in">sign in</a> for the current availability notice.
            </div>
          </details>
          <details>
            <summary>What payment currencies and methods are accepted?</summary>
            <div class="acc-body">
              Confirmed fees and payment instructions will be published before
              registration opens. No payments are collected on this website.
            </div>
          </details>
        </div>
      </section>
    </main>
  </div>`;
  return { element, title: "Learn More — FDM" };
}
