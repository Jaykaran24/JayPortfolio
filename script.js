const projects = [
  {
    title: "CogniPrep | AI-Powered Mock Interview Platform",
    description: "Built an AI-powered interview platform with Node.js APIs for session handling, response evaluation, and real-time feedback.",
    tags: ["Node.js", "MongoDB", "REST API"],
    demo: "#",
    code: "https://github.com/Jaykaran24/Cogniprep"
  },
  {
    title: "SmartStock (WMS) | Warehouse Management System",
    description: "Developed a full-stack warehouse system for inventory tracking with Node.js CRUD operations and optimized SQL queries for reporting.",
    tags: ["Node.js", "SQL", "CRUD"],
    demo: "#",
    code: "https://github.com/Jaykaran24/smartstock-wms"
  },
  {
    title: "Fitbot AI | Nutritional Data Tracker",
    description: "Created a nutrition tracking app using external APIs with efficient JSON parsing and data-fetching for real-time insights.",
    tags: ["JavaScript", "API", "Git"],
    demo: "#",
    code: "https://github.com/Jaykaran24/fitbot"
  }
];

const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-links">
            ${
              project.demo !== "#"
                ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>`
                : ""
            }
            <a href="${project.code}" target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </article>
      `
    )
    .join("");
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear().toString();
}
