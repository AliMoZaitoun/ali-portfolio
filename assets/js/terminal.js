// terminal.js - Interactive Terminal

import { t } from "./i18n.js";
import { about } from "./data/about.js";
import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";

const commands = {
  help: {
    en: `Available commands:
  whoami      - About me
  skills      - Technical skills
  projects    - List projects
  education   - Education background
  contact     - Contact information
  clear       - Clear terminal
  github      - Open GitHub profile
  help        - Show this help`,
    ar: `الأوامر المتاحة:
  whoami      - من أنا
  skills      - المهارات التقنية
  projects    - قائمة المشاريع
  education   - الخلفية التعليمية
  contact     - معلومات التواصل
  clear       - مسح الطرفية
  github      - فتح ملف GitHub
  help        - عرض هذه المساعدة`,
  },
  whoami: () => t(about.summary),
  skills: () => {
    let out = "";
    for (const [key, group] of Object.entries(skills)) {
      out += `\n${t(group.title)}:\n  ${group.items.join(", ")}\n`;
    }
    return out.trim();
  },
  projects: () => {
    return projects
      .map((p, i) => `${i + 1}. ${t(p.title)} [${p.status}]`)
      .join("\n");
  },
  education: () => {
    return `Damascus University – B.Sc. Software Engineering (2021-2026)
Blue Ocean Institute – English B1.2 (2025-Present)`;
  },
  contact: () => {
    return `Email   : ${about.email}
Phone   : ${about.phone}
GitHub  : ${about.github}
Location: ${t(about.location)}`;
  },
  github: () => {
    window.open(about.github, "_blank");
    return t({ en: "Opening GitHub...", ar: "جاري فتح GitHub..." });
  },
  clear: "CLEAR",
};

export function initTerminal() {
  const term = document.getElementById("terminal");
  const output = document.getElementById("term-output");
  const input = document.getElementById("term-input");
  const form = document.getElementById("term-form");

  if (!term || !output || !input || !form) return;

  function print(text, isCommand = false) {
    const line = document.createElement("div");
    line.className = isCommand ? "term-cmd" : "term-line";
    line.innerHTML = text.replace(/\n/g, "<br>");
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function runCommand(cmd) {
    const clean = cmd.trim().toLowerCase();
    if (!clean) return;

    print(`<span class="prompt">visitor@ali-zaitoun:~$</span> ${cmd}`, true);

    if (clean === "clear") {
      output.innerHTML = "";
      return;
    }

    if (commands[clean]) {
      const result =
        typeof commands[clean] === "function"
          ? commands[clean]()
          : t(commands[clean]);
      print(result);
    } else {
      print(
        t({
          en: `Command not found: ${clean}. Type 'help' for available commands.`,
          ar: `الأمر غير موجود: ${clean}. اكتب 'help' لعرض الأوامر.`,
        }),
      );
    }
  }

  // Initial welcome
  print(
    t({
      en: `Welcome to Ali Zaitoun's interactive terminal.
Type 'help' to see available commands.`,
      ar: `مرحباً بك في الطرفية التفاعلية لعلي زيتون.
اكتب 'help' لعرض الأوامر المتاحة.`,
    }),
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value;
    input.value = "";
    runCommand(val);
  });

  // Focus on click
  term.addEventListener("click", () => input.focus());
}
