/**
 * Define Global Variables
 */
const sections = document.querySelectorAll('.section');
const navContainer = document.querySelector('.page__header');

/**
 * Helper Functions
 */

/**
 * isElementInViewport - Checks if the given element is in the viewport
 * @param {Element} el - The element to check
 * @returns {boolean} - True if element is in viewport
 */
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Main Functions
 */

/**
 * buildNav - Builds the navigation menu dynamically based on sections
 */
function buildNav() {
    // Create the navigation container
    const navList = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'navbar__list');
    
    // Create navigation items for each section
    sections.forEach((section) => {
        const li = document.createElement('li');
        const navText = section.getAttribute('nav');
        const sectionId = section.getAttribute('id');
        
        li.innerHTML = `<a class="menu__link" href="#${sectionId}">${navText}</a>`;
        ul.appendChild(li);
    });
    
    navList.appendChild(ul);
    navContainer.appendChild(navList);
}

/**
 * setActiveSection - Adds 'active' class to section when it's in viewport
 */
function setActiveSection() {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            // Remove active class from all sections first
            sections.forEach(s => s.classList.remove('your-active-class'));
            // Add active class to current section
            section.classList.add('your-active-class');
            
            // Update active state in navigation
            const navLinks = document.querySelectorAll('.menu__link');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}

/**
 * scrollToSection - Handles smooth scrolling to section
 * @param {Event} e - Click event
 */
function scrollToSection(e) {
    if (e.target.classList.contains('menu__link')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

/**
 * Begin Events
 */

// Build the navigation menu when DOM content is loaded
document.addEventListener('DOMContentLoaded', buildNav);

// Handle smooth scrolling when clicking navigation links
document.querySelector('.page__header').addEventListener('click', scrollToSection);

// Update active section while scrolling
window.addEventListener('scroll', setActiveSection);

document.getel