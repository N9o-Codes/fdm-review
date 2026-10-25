import { staticView as html } from "../../../shared/ui/static-view.js";
import { departments } from "../model/team-data.js";

function createPerson(leader = false) {
  const person = document.createElement("div");
  person.className = leader ? "person ld" : "person";
  const photo = document.createElement("div");
  photo.className = "photo";
  photo.setAttribute("aria-hidden", "true");
  const name = document.createElement("b");
  name.textContent = leader ? "Leader name" : "Member name";
  person.append(photo, name);
  if (leader) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = "Leader";
    person.append(tag);
  }
  return person;
}

function createDepartment(department) {
  const group = document.createElement("article");
  group.className = "group";
  const description = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = department.name;
  const summary = document.createElement("p");
  summary.textContent = department.description;
  description.append(title, summary);
  const people = document.createElement("div");
  people.className = "row";
  people.append(
    createPerson(true),
    ...Array.from({ length: 3 }, () => createPerson()),
  );
  group.append(description, people);
  return group;
}

export function createTeamsPage() {
  const element = html`<div id="teamsPage" class="page">
    <main>
      <section id="teams">
        <div class="wrap">
          <button class="back backToHomeBtn back-to-home" type="button">
            ← Back to main page
          </button>
          <h2>Meet the teams</h2>
          <p class="lead">
            Organizational structure and department leaders supporting the
            Future Debate Masters program.
          </p>
          <div class="teamlist" id="groups"></div>
        </div>
      </section>
    </main>
  </div>`;
  element
    .querySelector("#groups")
    .replaceChildren(...departments.map(createDepartment));
  return { element, title: "Meet the teams — FDM" };
}
