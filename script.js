// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = document.querySelector('.theme-toggle i');

// Check for saved user preference, if any, on load of the website
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    moonIcon.classList.remove('fa-moon');
    moonIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    if (document.body.classList.contains('dark-mode')) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode', null);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}); 