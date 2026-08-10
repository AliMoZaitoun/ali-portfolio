// main.js

import { getLang, setLang, t } from "./i18n.js";
import { about } from "./data/about.js";
import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";
import { education } from "./data/education.js";
import { initTerminal } from "./terminal.js";

function renderHero() {
  document.getElementById("hero-name").textContent = t(about.name);
  document.getElementById("hero-title").textContent = t(about.title);
  document.getElementById("hero-bio").textContent = t(about.shortBio);
  document.getElementById("hero-location").textContent = t(about.location);
}

function renderAbout() {
  document.getElementById("about-summary").textContent = t(about.summary);

  const langsEl = document.getElementById("about-languages");
  langsEl.innerHTML = about.languages
    .map((l) => `<span class="tag">${t(l.name)} · ${t(l.level)}</span>`)
    .join("");

  const interestsEl = document.getElementById("about-interests");
  interestsEl.innerHTML = about.interests
    .map((i) => `<span class="tag interest">${t(i)}</span>`)
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  container.innerHTML = "";

  for (const [key, group] of Object.entries(skills)) {
    const card = document.createElement("div");
    card.className = "skill-card geometric";
    card.innerHTML = `
      <h3 class="skill-title">${t(group.title)}</h3>
      <div class="skill-tags">
        ${group.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    `;
    container.appendChild(card);
  }
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";

  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = `project-card ${p.featured ? "featured" : ""} ${p.status}`;
    card.innerHTML = `
      <div class="project-header">
        <div class="project-status ${p.status}">${p.status === "in-progress" ? (getLang() === "ar" ? "قيد التطوير" : "In Progress") : getLang() === "ar" ? "مكتمل" : "Completed"}</div>
        <h3 class="project-title">${t(p.title)}</h3>
        <p class="project-subtitle">${t(p.subtitle)}</p>
      </div>
      <p class="project-desc">${t(p.description)}</p>
      <ul class="project-highlights">
        ${t(p.highlights)
          .slice(0, 5)
          .map((h) => `<li>${h}</li>`)
          .join("")}
      </ul>
      <div class="project-tech">
        ${p.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
      </div>
      <div class="project-links">
        ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener" class="btn-link">GitHub</a>` : ""}
        ${p.links.live ? `<a href="${p.links.live}" target="_blank" rel="noopener" class="btn-link">Live Demo</a>` : ""}
        ${p.links.frontend ? `<a href="${p.links.frontend}" target="_blank" rel="noopener" class="btn-link secondary">UI Repo</a>` : ""}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderEducation() {
  const container = document.getElementById("education-list");
  container.innerHTML = education
    .map(
      (edu) => `
      <div class="edu-card geometric">
        <div class="edu-period">${edu.period}</div>
        <h3>${t(edu.degree)}</h3>
        <p class="edu-inst">${t(edu.institution)}</p>
        <p class="edu-loc">${t(edu.location)}</p>
      </div>
    `,
    )
    .join("");
}

function renderContact() {
  document.getElementById("contact-email").href = `mailto:${about.email}`;
  document.getElementById("contact-email").textContent = about.email;
  document.getElementById("contact-phone").href = `tel:${about.phone}`;
  document.getElementById("contact-phone").textContent = about.phone;
  document.getElementById("contact-github").href = about.github;
  document.getElementById("contact-location").textContent = t(about.location);
}

function updateUI() {
  // Nav labels
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translations = {
      "nav.about": { en: "About", ar: "عني" },
      "nav.skills": { en: "Skills", ar: "المهارات" },
      "nav.projects": { en: "Projects", ar: "المشاريع" },
      "nav.education": { en: "Education", ar: "التعليم" },
      "nav.contact": { en: "Contact", ar: "تواصل" },
      "section.about": { en: "About Me", ar: "عني" },
      "section.skills": { en: "Technical Skills", ar: "المهارات التقنية" },
      "section.projects": { en: "Featured Projects", ar: "المشاريع المميزة" },
      "section.education": { en: "Education", ar: "التعليم" },
      "section.contact": { en: "Get In Touch", ar: "تواصل معي" },
      "hero.terminal": { en: "Interactive Terminal", ar: "الطرفية التفاعلية" },
      "footer.rights": {
        en: "Built with precision & security mindset.",
        ar: "مبني بدقة وعقلية أمنية.",
      },
    };
    if (translations[key]) el.textContent = t(translations[key]);
  });

  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderContact();
}

function initLangToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;

  function updateBtn() {
    btn.textContent = getLang() === "en" ? "العربية" : "English";
  }
  updateBtn();

  btn.addEventListener("click", () => {
    setLang(getLang() === "en" ? "ar" : "en");
    updateBtn();
    updateUI();
  });
}

// Smooth scroll for nav
function initNav() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// Geometric background particles (lightweight)
function initParticles() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > width) this.speedX *= -1;
      if (this.y < 0 || this.y > height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 60; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, width, height);
    // Draw subtle connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// Init everything
document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  updateUI();
  initTerminal();
  initNav();
  initParticles();

  window.addEventListener("langChange", updateUI);
});
