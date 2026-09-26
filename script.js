// ---------- Data ----------
 
const skills = [
  "JavaScript",
  "HTML & CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "React",
  "Git & GitHub",
];

const projects = [
  {
    title: "Multi-Vendor E-Commerce Platform",
    description:
      "A marketplace supporting multiple independent vendors, with product listings, order management, and per-vendor dashboards.",
    tech: "Node.js, Express, PostgreSQL, React",
  },
  {
    title: "DevPrac API",
    description:
      "A backend practice project exploring REST API design, authentication, and database modelling with an ORM.",
    tech: "Node.js, Express, Prisma, PostgreSQL",
  },
];

// ---------- Render: Skills ----------
 
function renderSkills() {
  const list = document.getElementById("skills-list");
  for (const skill of skills) {
    const item = document.createElement("li");
    item.textContent = skill;
    list.appendChild(item);
  }
}
 
// ---------- Render: Projects ----------
 
function renderProjects() {
  const container = document.getElementById("projects-list");
  for (const project of projects) {
    const card = document.createElement("div");
    card.className = "project-card";
 
    const title = document.createElement("h3");
    title.textContent = project.title;
 
    const description = document.createElement("p");
    description.textContent = project.description;
 
    const tech = document.createElement("p");
    tech.className = "project-tech";
    tech.textContent = `Built with: ${project.tech}`;
 
    card.append(title, description, tech);
    container.appendChild(card);
  }
}
 
// ---------- Init ----------
 
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
});