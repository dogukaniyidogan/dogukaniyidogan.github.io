//const glow = document.querySelector(".cursor-glow");

// window.addEventListener("mousemove", (e) => {
//   glow.style.left = e.clientX + "px";
//   glow.style.top = e.clientY + "px";
// });


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;

    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  sections.forEach(sec => sec.classList.remove("aktif"));
  document.getElementById(current)?.classList.add("aktif");

  navLinks.forEach(link => {
    link.parentElement.classList.toggle(
      "aktif",
      link.getAttribute("href") === `#${current}`
    );
  });
});



// başlangıçta temayı yükle
function loadTheme() {
  const saved = localStorage.getItem("theme");

  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  } else {
    // sistem temasını algıla
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }
}

// toggle
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");

  const newTheme = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// event
document.querySelector(".alt .toggle-color-scheme").addEventListener("click", toggleTheme);

// init
loadTheme();
