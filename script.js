document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for generic scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: unobserve if you only want the animation to happen once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Form submission animation handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';
            btn.style.cursor = 'not-allowed';

            // Artificial delay to simulate network request
            setTimeout(() => {
                btn.textContent = 'Message Sent Successfully!';
                btn.style.background = 'linear-gradient(45deg, #00b09b, #96c93d)';
                btn.style.boxShadow = '0 4px 15px rgba(150, 201, 61, 0.4)';
                contactForm.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.boxShadow = '';
                    btn.style.opacity = '1';
                    btn.style.cursor = 'pointer';
                }, 3500);
            }, 1800);
        });
    }

    // Smooth scrolling for Anchor Links
    document.querySelectorAll('.nav-links a[href^="#"], .cta-buttons a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
