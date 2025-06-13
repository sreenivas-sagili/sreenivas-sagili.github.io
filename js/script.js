// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1500);

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'js/particles-config.js');
    }

    // Typed.js initialization
    const typed = new Typed('.typing', {
        strings: [
            'intelligent systems',
            'AI-powered solutions',
            'machine learning models',
            'scalable applications',
            'innovative technologies'
        ],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });

    // Cursor animation
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    document.addEventListener('mousedown', function() {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });

    document.addEventListener('mouseup', function() {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });

    // Links and buttons hover effect
    const links = document.querySelectorAll('a, button, .btn');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        link.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });

    // Sticky navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // GSAP animations
    // Hero section animations
    gsap.from('.hero-text', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.7
    });

    gsap.from('.cta-buttons', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 2
    });

    gsap.from('.scroll-indicator', {
        duration: 1,
        y: -30,
        opacity: 0,
        ease: 'power3.out',
        delay: 2.3
    });

    // ScrollTrigger animations for sections
    gsap.registerPlugin(ScrollTrigger);

    // About section
    gsap.from('.about-cards-container', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });

    // Animate each card with stagger
    gsap.from('.about-card', {
        scrollTrigger: {
            trigger: '.about-cards-container',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });

    // News items
    gsap.from('.news-item', {
        scrollTrigger: {
            trigger: '.news',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Timeline items
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.experience',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Education items
    gsap.from('.education-item', {
        scrollTrigger: {
            trigger: '.education',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Skills categories
    gsap.from('.skills-category', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Project cards
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Publication items
    gsap.from('.publication-item', {
        scrollTrigger: {
            trigger: '.publications',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Certification cards
    gsap.from('.certification-card', {
        scrollTrigger: {
            trigger: '.certifications',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Membership cards
    gsap.from('.membership-card', {
        scrollTrigger: {
            trigger: '.memberships',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Judging items
    gsap.from('.judging-item', {
        scrollTrigger: {
            trigger: '.judging',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Volunteer items
    gsap.from('.volunteer-item', {
        scrollTrigger: {
            trigger: '.volunteer',
            start: 'top 80%'
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Contact form
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        },
        duration: 0.8,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        },
        duration: 0.8,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});
