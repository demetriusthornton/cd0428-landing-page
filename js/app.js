/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Define Global Variables
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

// Helper Functions
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
}

// Scroll to section function with smooth scrolling
function scrollToSection(event, sectionId) {
  // Prevent default anchor click behavior
  event.preventDefault();

  const section = document.getElementById(sectionId);

  // Using scrollIntoView with smooth behavior
  section.scrollIntoView({
    behavior: "smooth",
  });
}

// Build navigation menu
function buildNav() {
  sections.forEach((section) => {
    // Create new list item and link
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    // Get section ID and navigation text
    const sectionId = section.getAttribute("id");
    const navText = section.getAttribute("data-nav") || section.id;

    // Set link properties
    link.textContent = navText;
    link.setAttribute("href", `#${sectionId}`);
    link.classList.add("menu__link");

    // Add click event listener to each link
    link.addEventListener("click", (event) => {
      scrollToSection(event, sectionId);
    });

    // Append elements
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
}

// Set active section
function setActiveSection() {
  sections.forEach((section) => {
    const navItem = document.querySelector(`a[href="#${section.id}"]`);

    if (isInViewport(section)) {
      // Add active class to section
      section.classList.add("your-active-class");
      // Add active class to navigation item
      navItem?.classList.add("active");
    } else {
      // Remove active classes when section is not in viewport
      section.classList.remove("your-active-class");
      navItem?.classList.remove("active");
    }
  });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", buildNav);
document.addEventListener("scroll", setActiveSection);
