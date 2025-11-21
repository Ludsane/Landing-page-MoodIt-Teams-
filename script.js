// Modal Management
const modal = document.getElementById('demo-modal');
const modalOverlay = modal?.querySelector('.modal-overlay');
const modalClose = modal?.querySelector('.modal-close');
const demoForm = document.getElementById('demo-form');

// Open modal
function openModal() {
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Event listeners for modal
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeModal();
    }
});

// Open modal from CTAs
document.querySelectorAll('[data-modal="demo"], a[href="#demo"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

// Form submission
if (demoForm) {
    demoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(demoForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send data to your backend
        // For now, we'll simulate a submission
        console.log('Form submitted:', data);
        
        // Show success message (you can replace this with actual API call)
        const submitButton = demoForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitButton.textContent = '✓ Demande envoyée !';
            submitButton.style.background = 'var(--success)';
            
            // Redirect to thank you page or show success message
            setTimeout(() => {
                closeModal();
                // You can redirect to a thank you page here
                // window.location.href = '/merci';
            }, 1500);
        }, 1000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#demo') {
            e.preventDefault();
            openModal();
            return;
        }
        
        const target = document.querySelector(href);
        if (target && href !== '#') {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for sticky navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations - DISABLED
// Les éléments restent visibles en permanence
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// Animate elements on scroll - DISABLED
// const animatedElements = document.querySelectorAll(
//     '.feature-card, .testimonial-card, .step, .pricing-card, .result-stat'
// );

// animatedElements.forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(20px)';
//     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     observer.observe(el);
// });

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats for counter animation - DISABLED
// const statsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
//             entry.target.classList.add('animated');
//             const statValue = entry.target.querySelector('.stat-value');
//             if (statValue) {
//                 const target = parseInt(statValue.getAttribute('data-target'));
//                 if (target && !isNaN(target)) {
//                     statValue.textContent = '0';
//                     setTimeout(() => {
//                         animateCounter(statValue, target);
//                     }, 200);
//                 }
//             }
//         }
//     });
// }, { threshold: 0.5 });

// document.querySelectorAll('.result-stat').forEach(stat => {
//     statsObserver.observe(stat);
// });

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Hero animation on load - DISABLED
// Le contenu reste visible dès le chargement
// window.addEventListener('load', () => {
//     const heroContent = document.querySelector('.hero-content');
//     if (heroContent) {
//         heroContent.style.opacity = '0';
//         heroContent.style.transform = 'translateY(30px)';
//         heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
//         
//         setTimeout(() => {
//             heroContent.style.opacity = '1';
//             heroContent.style.transform = 'translateY(0)';
//         }, 100);
//     }
//     
//     // Animate dashboard mockup
//     const dashboardMockup = document.querySelector('.dashboard-mockup');
//     if (dashboardMockup) {
//         dashboardMockup.style.opacity = '0';
//         dashboardMockup.style.transform = 'translateY(30px) scale(0.95)';
//         dashboardMockup.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
//         
//         setTimeout(() => {
//             dashboardMockup.style.opacity = '1';
//             dashboardMockup.style.transform = 'translateY(0) scale(1)';
//         }, 300);
//     }
// });

// Form validation
const formInputs = document.querySelectorAll('.demo-form input, .demo-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    // Remove previous error
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Validate
    if (isRequired && !value) {
        showFieldError(field, 'Ce champ est requis');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Veuillez entrer une adresse email valide');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--error)';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '4px';
    field.parentElement.appendChild(errorDiv);
}

// Add error styles
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group select.error {
        border-color: var(--error);
    }
`;
document.head.appendChild(style);

// Parallax effect for hero - DISABLED
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero && scrolled < hero.offsetHeight) {
//         const parallax = scrolled * 0.3;
//         hero.style.transform = `translateY(${parallax}px)`;
//     }
// });

// Add loading state to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.type === 'submit') return;
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Track CTA clicks (for analytics)
document.querySelectorAll('[data-modal="demo"], .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        // You can add analytics tracking here
        // Example: gtag('event', 'cta_click', { cta_name: btn.textContent });
        console.log('CTA clicked:', btn.textContent);
    });
});

// Force visibility of all content - No scroll blocking
document.addEventListener('DOMContentLoaded', () => {
    // Force visibility of all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
        section.style.transform = 'none';
    });
    
    // Force visibility of solution section
    const solutionSection = document.querySelector('.solution');
    if (solutionSection) {
        solutionSection.style.opacity = '1';
        solutionSection.style.visibility = 'visible';
    }
    
    // Force visibility of all section titles
    document.querySelectorAll('.section-title').forEach(title => {
        title.style.opacity = '1';
        title.style.visibility = 'visible';
        title.style.transform = 'none';
    });
    
    // Force visibility of solution intro and feature cards
    const solutionIntro = document.querySelector('.solution-intro');
    if (solutionIntro) {
        solutionIntro.style.opacity = '1';
        solutionIntro.style.visibility = 'visible';
    }
    
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'none';
    });
    
    // Force visibility of hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.visibility = 'visible';
        heroContent.style.transform = 'none';
    }
    
    const dashboardMockup = document.querySelector('.dashboard-mockup');
    if (dashboardMockup) {
        dashboardMockup.style.opacity = '1';
        dashboardMockup.style.visibility = 'visible';
        dashboardMockup.style.transform = 'none';
    }
    
    // Force visibility of all pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'none';
    });
});
