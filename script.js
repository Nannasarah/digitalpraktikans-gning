// ------------------- BURGER-MENU --------------------------------- -----

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Tilføj click-event til burger-menuen
burger.addEventListener("click", () => {
  menu.classList.toggle("active"); // Skift mellem at vise/skjule menu
  burger.classList.toggle("active"); // Tilføj X-animation på burger-menu
});

// ------------------- TIDLIGERE PROJEKTER: FLYV IND -------------------
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".projekt");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tilføj class "visible" med fast delay (fx 100ms)
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  projects.forEach((proj) => observer.observe(proj));
});

// -------------------------- SKIFT TEMA ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".theme");
  const body = document.body;

  // Tilføj event når tema dropdown ændres
  select.addEventListener("change", (event) => {
    body.setAttribute("data-theme", event.target.value);
  });
});

// ---------------------------- LOGO SCROLL-EFFEKT -------------------------

const logo = document.querySelector(".logo");
const startSection = document.querySelector("#start");
const header = document.querySelector("header");

logo.style.transition = "transform 0.5s ease, filter 0.5s ease";

// Klik på logo = scroll til toppen af siden
logo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll event for at ændre logoets størrelse, når man scroller
window.addEventListener("scroll", () => {
  const startRect = startSection.getBoundingClientRect();
  const headerRect = header.getBoundingClientRect();

  // Hvis man er i #start eller header
  if ((startRect.top <= window.innerHeight && startRect.bottom >= 300) || (headerRect.top <= window.innerHeight && headerRect.bottom >= 0)) {
    logo.style.transform = "scale(1) translateX(0)";
    logo.style.filter = "drop-shadow(0 0 0 transparent)";
    logo.style.zIndex = "6000";
  } else {
    // Når man scroller ned, gør logo mindre, flyt til venstre og tilføj skygge
    logo.style.transform = "scale(0.5) translateX(-250px)";
    logo.style.filter = "drop-shadow(5px 5px 15px rgba(0,0,0,0.5))";
    logo.style.zIndex = "6000";
  }
});
