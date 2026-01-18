/* ============================================
   VINAY'S PORTFOLIO - MAIN JAVASCRIPT
   ============================================ */

// ============================================
// DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initNavbarScroll();
    initSkillBars();
    initTypewriter();
    initSmoothScroll();
    initCurrentYear();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Set active nav link based on current page
    setActiveNavLink();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when visible
                if (entry.target.classList.contains('skill-bar-container')) {
                    animateSkillBar(entry.target);
                }
                
                // Animate counters when visible
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
    
    // Observe skill bars
    document.querySelectorAll('.skill-bar-container').forEach(el => {
        observer.observe(el);
    });
    
    // Observe stat numbers
    document.querySelectorAll('.stat-number[data-count]').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// SKILL BARS ANIMATION
// ============================================
function initSkillBars() {
    // Initialize skill bars with 0 width
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = '0%';
    });
}

function animateSkillBar(container) {
    const fill = container.querySelector('.skill-bar-fill');
    const percent = fill.getAttribute('data-percent');
    
    if (fill && percent) {
        setTimeout(() => {
            fill.style.width = percent + '%';
        }, 200);
    }
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const suffix = element.getAttribute('data-suffix') || '';
    const prefix = element.getAttribute('data-prefix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = prefix + Math.floor(current) + suffix;
    }, 16);
}

// ============================================
// TYPEWRITER EFFECT
// ============================================
function initTypewriter() {
    const typewriter = document.querySelector('.typewriter');
    
    if (typewriter) {
        const texts = JSON.parse(typewriter.getAttribute('data-texts') || '[]');
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 100;
        
        function type() {
            if (texts.length === 0) return;
            
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriter.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                delay = 50;
            } else {
                typewriter.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                delay = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                delay = 500;
            }
            
            setTimeout(type, delay);
        }
        
        type();
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============================================
// CURRENT YEAR (for footer)
// ============================================
function initCurrentYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

// ============================================
// FORM HANDLING
// ============================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send to a backend
            // For now, show success message
            showNotification('Message sent successfully!', 'success');
            form.reset();
        });
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#00d4aa' : type === 'error' ? '#ff6b6b' : '#45aaf2'};
        color: #0a0a0f;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 1001;
        animation: slideIn 0.3s ease;
        font-family: 'Space Mono', monospace;
        font-size: 0.9rem;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// DASHBOARD MODAL (for screenshots)
// ============================================
function openDashboardModal(imageSrc, title) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'dashboard-modal';
    modal.innerHTML = `
        <div class="dashboard-modal-content">
            <button class="modal-close">&times;</button>
            <h3>${title}</h3>
            <img src="${imageSrc}" alt="${title}">
        </div>
    `;
    
    // Add styles
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1002;
        padding: 2rem;
    `;
    
    const content = modal.querySelector('.dashboard-modal-content');
    content.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        position: relative;
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        font-size: 2rem;
        color: white;
        background: none;
        border: none;
        cursor: pointer;
    `;
    
    const img = modal.querySelector('img');
    img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        border-radius: 8px;
    `;
    
    const h3 = modal.querySelector('h3');
    h3.style.cssText = `
        color: white;
        margin-bottom: 1rem;
        font-family: 'Syne', sans-serif;
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close handlers
    closeBtn.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });
    document.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', handler);
        }
    });
}

function closeModal(modal) {
    modal.remove();
    document.body.style.overflow = '';
}

// ============================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ============================================
window.Portfolio = {
    showNotification,
    openDashboardModal,
    debounce,
    isInViewport
};
