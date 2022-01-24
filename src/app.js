const nav = document.querySelector(".nav__container");
const menu = document.querySelector(".menu__hamburger");

const desktopLinks = document.querySelectorAll(".nav-menu li");
const sections = document.querySelectorAll("section");

// sad cemo zvat data atribut sta ce bit u principu index, i onda cemo vezat na svaki link u nizu funkciju za scroll into view, po redu i svaka za sebe ce bit

desktopLinks.forEach((link) => {
  // napravimo index, ali mora bit Number jel, jer je u htmlu string
  let index = Number(link.getAttribute("data-nav"));
  link.addEventListener("click", () => {
    sections[index].scrollIntoView({
      block: "start",
      inline: "start",
      // behavior: "smooth",
      // jebe me smooth u firefoxu, u edge radi, ugl mos smooth scroll stavit a mos i u css scroll-behaviour: smooth
    });
  });
});
