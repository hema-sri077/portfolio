// Smooth scroll to Projects section
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Simple animation on scroll
window.addEventListener("scroll", function() {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial styles for animation
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.6s ease";
    });
});
