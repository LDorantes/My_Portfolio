const toggleBtn = document.getElementById("toggleLang");
let currentLang = "es";

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.getAttribute("data-lang") === currentLang ? "" : "none";
  });
  toggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
});
