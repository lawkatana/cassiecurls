// custom cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});
  
});



  // // Get the body and its background image
  var contactBackground = document.querySelector("#contact");
  var conclusionBackground = document.querySelector("#conclusion");
  var image = contactBackground.style.backgroundImage.slice(4, -1).replace(/"/g, "");

  // Set the initial scroll position and speed factor
  var scrollPos = window.scrollY;
  var speed = 0.009;
  var speed2 = 0.04;

  // Add a scroll event listener
  window.addEventListener("scroll", function() {
    // Update the scroll position
    scrollPos = window.scrollY;

    // Calculate the offset and direction of the background image
    var offset = scrollPos * speed * -2;
    var offset2 = scrollPos * speed2 * -1;

    // Set the new background position
    contactBackground.style.backgroundPosition = "center " + offset + "%";
    conclusionBackground.style.backgroundPosition = "center " + offset2 + "%";
  });




// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
    stickyNav();
};

// Get the navbar
var navbar = document.getElementById("sticky-navbar");
var mainNav = document.getElementById("main-nav");

// Get the offset position of the navbar
var appear = mainNav.offsetHeight;

// Add the appear class to the navbar when you reach its scroll position
function stickyNav() {
    if (window.scrollY >= appear) {
        navbar.classList.add("appear");
    } else {
        navbar.classList.remove("appear");
    }
}

// track the sections
var sections = document.querySelectorAll('section'); // Select all your sections
var navLinks = document.querySelectorAll('.nav-link'); // Select your navigation links

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.classList.contains(currentSection)) {
      link.classList.add('active');
    }
  });
});


// responsive menu 
var navMenu = document.getElementById("nav-menu");
var openMenuBtns  = document.querySelectorAll(".open-menu");
var closeMenu = document.getElementById("close-menu");
var menuOverlay = document.getElementById("menu-overlay");
var menuLinks = document.querySelectorAll(".nav-menu a");

openMenuBtns.forEach((btn) => {
  btn.addEventListener('click', showNav)
})

closeMenu.addEventListener('click', showNav);

menuOverlay.addEventListener('click', showNav);

menuLinks.forEach((menuLink) =>{
  menuLink.addEventListener('click', showNav)
})

function showNav() {
  navMenu.classList.toggle("show-menu");
  menuOverlay.classList.toggle("hidden")
}