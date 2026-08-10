// i18n.js - Simple language switcher

let currentLang = localStorage.getItem("lang") || "en";

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", lang === "ar");
  // Trigger re-render
  window.dispatchEvent(new CustomEvent("langChange", { detail: lang }));
}

export function t(obj) {
  if (!obj) return "";
  return obj[currentLang] || obj.en || "";
}

// Initialize
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
if (currentLang === "ar") document.body.classList.add("rtl");
