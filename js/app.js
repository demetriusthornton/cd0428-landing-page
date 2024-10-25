/**
 * @desc Gets the navigation container element from the DOM
 * @param void - no parameters required
 * @return {HTMLElement} - The navigation list container element
 */
const navList = document.getElementById("navbar__list");

/**
 * @desc Gets all section elements from the DOM
 * @param void - no parameters required
 * @return {NodeList} - List of all section elements
 */
const sections = document.querySelectorAll("section");

/**
 * @desc Builds the navigation menu dynamically from sections
 * @param void - no parameters required
 * @return void - no return value
 */
function buildNav() {
  /**
   * @desc Creates a document fragment for better performance
   * @type {DocumentFragment}
   */
  const fragment = document.createDocumentFragment();

  sections.forEach((section) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    /**
     * @desc Gets section identifier and title from attributes
    
     */
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");

    // Set link attributes
    link.innerHTML = sectionTitle;
    link.setAttribute("href", `#${sectionId}`);
    link.classList.add("menu__link");

    /**
     * @desc Adds smooth scrolling behavior to navigation links
     * @param {Event} e - The click event object
     * @return void - no return value
     */
    link.addEventListener("click", (e) => {
      e.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });

    // Build DOM structure
    listItem.appendChild(link);
    fragment.appendChild(listItem);
  });

  navList.appendChild(fragment);
}

/**
 * @desc Updates the active section based on viewport position
 * @param void - no parameters required
 * @return void - no return value
 */
function setActiveSection() {
  sections.forEach((section) => {
    /**
     * @desc Gets the section's position relative to viewport
     * @type {DOMRect}
     */
    const rect = section.getBoundingClientRect();
    const navLink = document.querySelector(`a[href="#${section.id}"]`);

    // Check if section is in viewport
    if (rect.top >= 0 && rect.top <= 150) {
      // Update active states
      sections.forEach((s) => s.classList.remove("your-active-class"));
      section.classList.add("your-active-class");

      document.querySelectorAll(".menu__link").forEach((link) => {
        link.classList.remove("active");
      });
      navLink.classList.add("active");
    }
  });
}

/**
 * @desc Initializes the navigation when DOM is loaded
 * @param void - no parameters required
 * @return void - no return value
 */
ddocument.addEventListener("DOMContentLoaded", () => {
  buildNav();
  setActiveSection();
});

/**
 * @desc Tracks scroll position to update active section
 * @param void - no parameters required
 * @return void - no return value
 */
document.addEventListener("scroll", setActiveSection);
