const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const learnMoreButton = document.getElementById("learn-more");

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

learnMoreButton.addEventListener("click", function () {
    const aboutSection = document.getElementById("about");
    const offset = -107;
    const targetPosition = aboutSection.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });

    document.body.classList.remove("no-scroll");
});

const contactLink = document.getElementById('contact-link');

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    const offset = 5;
    const targetPosition = contactSection.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
    });
});

const projectsLink = document.getElementById('projects-link');

projectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('work');
    const offset = -107;
    const targetPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
    });
});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  