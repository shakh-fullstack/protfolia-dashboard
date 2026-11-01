const projectsContainer = document.querySelector("#Projects-container");

const projects = [
  {
    title: "Task Tracker",
    description:
      "A simple and interactive Todo application built with vanilla Javascript and DOM manipulatiion.",
    liveLink: "https://shakh-fullstack.github.io/task-tracker/",
    codeLink: "https://github.com/shakh-fullstack/task-tracker",
  },
  {
    title: "DOM Counter App",
    description:
      "A simple and interactive Counter application built with HTML, CSS, and JavaScript featuring dynamic color changes.",
    liveLink: " https://shakh-fullstack.github.io/dom-Counter-app/",
    codeLink: "https://github.com/shakh-fullstack/dom-Counter-app",
  },
  {
    title: "Vanilla JS Modal",
    description:
      "Vanilla JavaScript yordamida yaratilgan interaktiv modal oyna.",
    liveLink: " https://shakh-fullstack.github.io/vanilla-Js-Modal/",
    codeLink: "https://github.com/shakh-fullstack/vanilla-Js-Modal",
  },
  {
    title: "DOM Events Playground",
    description:
      "DOM hodisalari bilan ishlashni sinab ko'rish uchun maxsus maydon.",
    liveLink: "#",
    codeLink: "https://github.com/shakh-fullstack/dom-events-playground",
  },
  {
    title: "Simple Dark Mode",
    description:
      "Veb-sahifada qorong'i rejimni yoqish va o'chirish uchun kichik loyiha.",
    liveLink: "https://shakh-fullstack.github.io/simple-dark-mode/",
    codeLink: "https://github.com/shakh-fullstack/simple-dark-mode",
  },
];

document.querySelector(".project-counter").textContent = projects.length;

projects.forEach((item) => {
  let div = document.createElement("div");
  div.classList.add("project-card");
  div.innerHTML = `
    <h3>Title: ${item.title}</h3> 
    <p>Description: ${item.description}</p> 
    <a href="${item.liveLink}" target="_blank">Live Demo</a> 
    <a href="${item.codeLink}" target="_blank">Code link</a>
  `;
  projectsContainer.appendChild(div);
});
projectsContainer.addEventListener("mouseenter", () => {
  projectsContainer.style.backgroundColor = "#f9f9f9";
});
projectsContainer.addEventListener("mouseleave", () => {
  projectsContainer.style.backgroundColor = "transparent";
});
