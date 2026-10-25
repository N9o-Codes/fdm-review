import { staticView as html } from "../../../shared/ui/static-view.js";
import { createCarousel } from "./carousel.js";

export function createHomePage() {
  const element = html`<div id="homePage" class="page">
    <main id="top">
      <!-- Carousel -->
      <div
        class="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured"
      >
        <div
          class="track"
          id="track"
          tabindex="0"
          aria-label="Use Left and Right arrow keys to change slides"
        >
          <div class="slide s1">
            <div class="wrap">
              <span class="badge hero-badge">Current Edition</span>
              <h1>Future Debate Masters 2026</h1>
              <p>
                Lebanon's authoritative student debate and public speaking
                initiative.
              </p>
              <a
                class="btn hero-register"
                href="#register"
                >Register your team</a
              >
            </div>
          </div>
          <div class="slide s2">
            <div class="wrap">
              <span class="badge hero-badge">Purpose & Eligibility</span>
              <h1>Think deeper, speak stronger</h1>
              <p>
                Open to enrolled high school and university student teams.
                Training and participation details will be announced here.
              </p>
            </div>
          </div>
          <div class="slide s3">
            <div class="wrap">
              <span class="badge hero-badge">Key Milestones</span>
              <h1>ParliYouth in the chamber</h1>
              <p>
                Direct entry into structured debate rounds, parliamentary
                procedures, and accredited workshops.
              </p>
            </div>
          </div>
          <div class="slide s4">
            <div class="wrap">
              <span class="badge hero-badge">Looking ahead</span>
              <h1>Registration coming soon</h1>
              <p>
                Registration is not open yet. Team requirements, fees and
                dates will be announced when confirmed.
              </p>
            </div>
          </div>
        </div>
        <div class="ctl">
          <div class="wrap">
            <div id="dots" role="group" aria-label="Slides" class="dots"></div>
            <div class="arrows">
              <button
                class="rotation"
                type="button"
                aria-label="Pause slide rotation"
                aria-describedby="rotation-help"
              >
                <span aria-hidden="true">Ⅱ</span>
              </button>
              <button type="button" id="prev" aria-label="Previous slide">
                ‹</button
              ><button type="button" id="next" aria-label="Next slide">
                ›
              </button>
            </div>
            <span id="rotation-help" class="visually-hidden"
              >Rotation stops when you use the carousel. Use Start to resume.
              Automatic rotation is disabled while reduced motion is
              enabled.</span
            >
          </div>
        </div>
      </div>

      <!-- Registration -->
      <section id="registration-preview" class="tint-bg">
        <div class="wrap center">
          <h2>Register your team</h2>
          <p class="lead">
            Registration is coming soon. This first website release introduces
            FDM; it does not accept team submissions or create accounts.
          </p>
          <a
            class="btn big"
            href="#register"
            >Register your team</a
          >
        </div>
      </section>

      <!-- About FDM -->
      <section id="about-fdm" class="surface-bg">
        <div class="wrap">
          <span class="badge">About FDM</span>
          <h2>About Future Debate Masters (FDM)</h2>
          <p class="lead">
            A complete public outline of the program, target audience, format,
            and expected participant journey. Visitors can fully understand the
            program without needing to sign in.
          </p>
          <div class="grid-3">
            <div class="card">
              <h3>1. Programme Description</h3>
              <p>
                FDM trains Lebanese youth in rigorous research, logical
                argumentation, and competitive parliamentary-style public
                debate.
              </p>
            </div>
            <div class="card">
              <h3>2. Intended Audience</h3>
              <p>
                Designed for student teams, educators, and debate enthusiasts
                seeking structured rhetoric and civic discourse training.
              </p>
            </div>
            <div class="card">
              <h3>3. Expected Participant Journey</h3>
              <p>
                Team Registration → Clearance & Fee Verification → Material
                Access via Personal Sign-in → Regional Debate Rounds → Grand
                Finale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Events -->
      <section id="events" class="tint-bg">
        <div class="wrap">
          <span class="badge">Events</span>
          <h2>Program Events</h2>
          <p class="lead">
            Public schedule of current and past events with delivery mode,
            audience, and status. No private meeting links are exposed publicly.
          </p>
          <div class="grid-3">
            <div class="card">
              <h3>Orientations & Workshops</h3>
              <p>
                <strong>Mode:</strong> Hybrid (Online / In-person)<br /><strong
                  >Audience:</strong
                >
                Registered Teams<br /><strong>Status:</strong> Active /
                Confirmed
              </p>
            </div>
            <div class="card">
              <h3>Regional Debate Qualifiers</h3>
              <p>
                <strong>Mode:</strong> In-Person Centers<br /><strong
                  >Audience:</strong
                >
                Cleared Competitors<br /><strong>Status:</strong> Scheduled
              </p>
            </div>
            <div class="card">
              <h3>Chamber Grand Final</h3>
              <p>
                <strong>Mode:</strong> Parliamentary Hall<br /><strong
                  >Audience:</strong
                >
                Public & Invited Guests<br /><strong>Status:</strong> Scheduled
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Essentials -->
      <section id="essentials" class="surface-bg">
        <div class="wrap">
          <span class="badge">Essentials</span>
          <h2>Program Essentials</h2>
          <p class="lead">
            Confirmed team requirements, fees and participation details will be
            published before registration opens.
          </p>
          <div class="grid-2">
            <div class="card">
              <h3>Eligibility & Team Composition</h3>
              <ul>
                <li>
                  Team size and eligibility requirements will be announced
                  before registration opens.
                </li>
                <li>
                  Enrolled students from recognized academic institutions in
                  Lebanon.
                </li>
                <li>
                  Official debate language: English / Arabic as specified per
                  motion.
                </li>
              </ul>
            </div>
            <div class="card">
              <h3>Fees & Payment Instructions</h3>
              <ul>
                <li>
                  Participation fees and payment instructions will be announced
                  before registration opens.
                </li>
                <li>
                  No payments are collected through this website.
                </li>
                <li>Participant account access is coming soon.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section id="timeline" class="tint-bg">
        <div class="wrap">
          <span class="badge">Timeline</span>
          <h2>Participant Milestone Timeline</h2>
          <p class="lead">
            Participant-facing milestones with timezones and public status.
            Excludes internal development or infrastructure sprints.
          </p>
          <div class="grid-3">
            <div class="card">
              <h3>1. Registration Phase</h3>
              <p>
                <strong>Timezone:</strong> EEST (Lebanon)<br />Team submission,
                fee clearance, and participant setup email link distribution.
              </p>
            </div>
            <div class="card">
              <h3>2. Material Unlocking</h3>
              <p>
                <strong>Timezone:</strong> EEST (Lebanon)<br />Access to
                training modules and motion announcements via individual login.
              </p>
            </div>
            <div class="card">
              <h3>3. Tournament Rounds</h3>
              <p>
                <strong>Timezone:</strong> EEST (Lebanon)<br />Live competitive
                rounds, feedback sheets, and championship awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="surface-bg">
        <div class="wrap center">
          <span class="badge">Contact</span>
          <h2>Contact & Enquiries</h2>
          <p class="lead">
            Approved direct contact channels for general, outreach, and
            sponsorship inquiries.
          </p>
          <p>
            <strong>Official Email:</strong>
            <a href="mailto:info@fdm-leb.com" class="contact-email"
              >info@fdm-leb.com</a
            >
          </p>
          <p>
            <strong>Program Organization:</strong> Future Debate Masters (FDM),
            Lebanon
          </p>
        </div>
      </section>

      <!-- Privacy & Terms -->
      <section id="privacy" class="tint-bg">
        <div class="wrap">
          <div class="grid-2">
            <div id="privacy-policy">
              <span class="badge">Privacy</span>
              <h2>Privacy Notice</h2>
              <p class="lead compact-lead">
                Information about this public website release. Registration and
                sign-in are not available yet.
              </p>
              <details>
                <summary>Current release information</summary>
                <div class="acc-body">
                  This release has no registration or sign-in forms. Do not send
                  passwords, verification codes or unrequested participant
                  details by email. Programme-specific privacy information will
                  be published before registration opens.
                </div>
              </details>
            </div>
            <div id="terms">
              <span class="badge">Terms</span>
              <h2>Participation Terms</h2>
              <p class="lead compact-lead">
                Confirmed participation conditions will be published before
                registration opens.
              </p>
              <details>
                <summary>Participation information coming soon</summary>
                <div class="acc-body">
                  Registration is not open. Participation conditions, schedules
                  and payment instructions will be announced here before team
                  submissions become available.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>`;
  const carousel = createCarousel(element.querySelector(".carousel"));
  return {
    element,
    title: "FDM — Future Debate Masters",
    activate: carousel.activate,
    deactivate: carousel.deactivate,
    destroy: carousel.destroy,
  };
}
