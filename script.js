// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Timeline Year Switching
const timelineButtons = document.querySelectorAll('.timeline-btn');
const timelineYears = document.querySelectorAll('.timeline-year');

timelineButtons.forEach(button => {
    button.addEventListener('click', () => {
        const year = button.getAttribute('data-year');
        
        // Remove active class from all buttons and years
        timelineButtons.forEach(btn => btn.classList.remove('active'));
        timelineYears.forEach(yearEl => yearEl.classList.remove('active'));
        
        // Add active class to clicked button and corresponding year
        button.classList.add('active');
        document.querySelector(`.timeline-year[data-year="${year}"]`).classList.add('active');
    });
});

// Newsletter Form Handling
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('formMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simulate form submission
        newsletterMessage.textContent = 'Thank you! You\'ve been added to the list.';
        newsletterMessage.style.color = '#6ba644';
        
        // Reset form
        newsletterForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            newsletterMessage.textContent = '';
        }, 5000);
    });
}

// Connect Form Handling
const connectForm = document.getElementById('connectForm');
const connectFormMessage = document.getElementById('connectFormMessage');

if (connectForm) {
    connectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = connectForm.querySelector('input[type="email"]').value;
        
        // Simulate form submission
        connectFormMessage.textContent = 'Thank you! Your submission has been received!';
        connectFormMessage.style.color = '#6ba644';
        
        // Reset form
        connectForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            connectFormMessage.textContent = '';
        }, 5000);
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Observe cards
document.querySelectorAll('.principle-card, .experiment-card, .grant-card, .testimonial-card, .editorial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

