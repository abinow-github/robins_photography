
    //$ quick access buttons(whatsapp and call) animation
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".wts-icn");
  const scrolled = window.scrollY;

  // Add or remove a CSS class to control the appearance of the navbar when scrolling
  if (scrolled > 10) {
      navbar.classList.add("wts-actv");
  } else {
      navbar.classList.remove("wts-actv");
  }
});

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".cal-icn");
  const scrolled = window.scrollY;

  // Add or remove a CSS class to control the appearance of the navbar when scrolling
  if (scrolled >10) {
      navbar.classList.add("cal-actv");
  } else {
      navbar.classList.remove("cal-actv");
  }
});
  