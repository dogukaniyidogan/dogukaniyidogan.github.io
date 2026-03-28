const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


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
    threshold: 0.6 // section'ın %60'ı görünür olunca aktif
  }
);

sections.forEach((section) => {
  observer.observe(section);
});