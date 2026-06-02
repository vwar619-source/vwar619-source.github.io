// Website JavaScript functionality

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (name && email && message) {
                console.log('Form submitted with data:', {
                    name: name,
                    email: email,
                    message: message
                });
                
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlight
window.addEventListener('load', function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('nav a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.style.borderBottom = '3px solid #3498db';
        }
    });
});

// Simple analytics - log page views
console.log('Page loaded:', {
    title: document.title,
    url: window.location.href,
    timestamp: new Date().toISOString()
});
