// Reveal elements on scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cursor blob movement
const blob = document.querySelector(".blob");
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    blob.style.left = `${x}px`;
    blob.style.top = `${y}px`;
    
    // Move slightly offset to create organic feel
    blob.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 3000, fill: "forwards" });
});

// Form submission effect
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        btn.innerHTML = 'Message Sent! ✨';
        btn.style.background = '#10b981';
        e.target.reset();
    }, 2000);
});

// Initial reveal check
reveal();
