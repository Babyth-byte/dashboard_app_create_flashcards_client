// ここからコードを書いてください
export default function setupTabs() {
  const homeTab = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const flashcardsTab = document.querySelector('[data-tab="flashcards"]');

  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");
  const flashcardsSection = document.getElementById("flashcards");

  homeTab.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.remove("hidden");
    converterSection.classList.add("hidden");
    flashcardsSection.classList.add("hidden");
  });
  converterTab.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
    flashcardsSection.classList.add("hidden");
  });
  flashcardsTab.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add("hidden");
    converterSection.classList.add("hidden");
    flashcardsSection.classList.remove("hidden");
  });
}
