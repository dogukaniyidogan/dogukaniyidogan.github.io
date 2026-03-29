//const glow = document.querySelector(".cursor-glow");

// window.addEventListener("mousemove", (e) => {
//   glow.style.left = e.clientX + "px";
//   glow.style.top = e.clientY + "px";
// });


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;

      if (entry.isIntersecting) {
        sections.forEach(sec => sec.classList.remove("aktif"));
        entry.target.classList.add("aktif");

        navLinks.forEach(link => {
          link.parentElement.classList.remove("aktif");

          if (link.getAttribute("href") === `#${id}`) {
            link.parentElement.classList.add("aktif");
          }
        });
      }
    });
  },
  {
    root: null,
    threshold: 0.1 // section'ın %60'ı görünür olunca aktif
  }
);

sections.forEach((section) => {
  observer.observe(section);
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
