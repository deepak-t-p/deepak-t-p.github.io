// ====================================
// Advanced Animations with GSAP & Particles.js
// ====================================

document.addEventListener('DOMContentLoaded', function () {

    // ====================================
    // Particles.js Configuration
    // ====================================
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#3B82F6'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3B82F6',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // ====================================
    // GSAP Animations
    // ====================================
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Hero Section Animation
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTimeline
            .from('.hero-greeting', {
                opacity: 0,
                y: 30,
                duration: 0.8
            })
            .from('.hero-name', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power4.out'
            }, '-=0.4')
            .from('.hero-title-wrapper', {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, '-=0.6')
            .from('.hero-description', {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, '-=0.4')
            .from('.hero-buttons .btn', {
                opacity: 0,
                y: 20,
                stagger: 0.2,
                duration: 0.6
            }, '-=0.4');

        // Sidebar Animation
        gsap.from('.profile-card', {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power3.out'
        });

        // Stats Cards Animation with ScrollTrigger
        gsap.from('.stat-card', {
            scrollTrigger: {
                trigger: '.stats-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Services Cards Animation
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 60,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Company Cards Animation
        gsap.from('.company-card', {
            scrollTrigger: {
                trigger: '.companies-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            scale: 0.8,
            stagger: 0.2,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });

        // Section Titles Animation
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                ease: 'power3.out'
            });
        });

        // Section Lines Animation
        gsap.utils.toArray('.section-line').forEach(line => {
            gsap.from(line, {
                scrollTrigger: {
                    trigger: line,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                width: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        // Hover Effects for Service Cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                gsap.to(this.querySelector('.service-icon'), {
                    scale: 1.1,
                    rotate: 5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', function () {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                gsap.to(this.querySelector('.service-icon'), {
                    scale: 1,
                    rotate: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Resume Page - Timeline Animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems.length > 0) {
            gsap.from(timelineItems, {
                scrollTrigger: {
                    trigger: '.timeline-section',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: -50,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        // Skills Animation
        const skillItems = document.querySelectorAll('.skill-item');
        if (skillItems.length > 0) {
            gsap.from(skillItems, {
                scrollTrigger: {
                    trigger: '.skills-section',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out'
            });
        }

        // Portfolio Items Animation
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        if (portfolioItems.length > 0) {
            gsap.from(portfolioItems, {
                scrollTrigger: {
                    trigger: '.portfolio-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                scale: 0.8,
                y: 50,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        // Contact Form Animation
        const formGroups = document.querySelectorAll('.form-group');
        if (formGroups.length > 0) {
            gsap.from(formGroups, {
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: -30,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out'
            });
        }
    }

    // ====================================
    // AOS (Animate On Scroll) Initialization
    // ====================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 0
        });
    }

    // ====================================
    // Parallax Mouse Movement Effect
    // ====================================
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length > 0) {
        document.addEventListener('mousemove', function (e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax') || 5;
                const x = (mouseX * speed * 2) - speed;
                const y = (mouseY * speed * 2) - speed;

                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // ====================================
    // Gradient Animation on Hover
    // ====================================
    const gradientElements = document.querySelectorAll('[class*="gradient-"]');
    gradientElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.backgroundSize = '200% 200%';
            this.style.animation = 'gradient-shift 3s ease infinite';
        });

        element.addEventListener('mouseleave', function () {
            this.style.animation = 'none';
        });
    });

    // ====================================
    // 3D Tilt Effect on Cards
    // ====================================
    function addTiltEffect(elements) {
        elements.forEach(element => {
            element.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            element.addEventListener('mouseleave', function () {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    const tiltCards = document.querySelectorAll('.service-card, .portfolio-item, .company-card');
    if (tiltCards.length > 0) {
        addTiltEffect(tiltCards);
    }

    // ====================================
    // Magnetic Button Effect
    // ====================================
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-download');
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translate(0, 0)';
        });
    });

    // ====================================
    // Smooth Page Transition
    // ====================================
    const pageLinks = document.querySelectorAll('a[href$=".html"]');
    pageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                const href = this.getAttribute('href');

                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    // ====================================
    // Profile Image Hover Effect
    // ====================================
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function () {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1.1,
                    rotate: 5,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });

        profileImage.addEventListener('mouseleave', function () {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1,
                    rotate: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    }

    // ====================================
    // Custom Cursor (Optional - Premium Effect)
    // ====================================
    function initCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';

        document.body.appendChild(cursor);
        document.body.appendChild(cursorDot);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorDot.classList.add('cursor-hover');
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorDot.classList.remove('cursor-hover');
            });
        });
    }

    // Uncomment to enable custom cursor (desktop only)
    // if (window.innerWidth > 992) {
    //     initCustomCursor();
    // }

    console.log('Advanced animations initialized!');
});
