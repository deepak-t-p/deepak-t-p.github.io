// ====================================
// Config Loader - Renders Portfolio from Config
// ====================================

document.addEventListener('DOMContentLoaded', function () {

    // Check if config is loaded
    if (typeof portfolioConfig === 'undefined') {
        console.error('Configuration file not loaded! Make sure config.js is included.');
        return;
    }

    const config = portfolioConfig;

    // ====================================
    // Render Personal Information
    // ====================================
    function renderPersonalInfo() {
        // Update profile name and title
        const profileName = document.querySelector('.profile-name');
        const profileTitle = document.querySelector('.profile-title');
        const profileCompany = document.querySelector('.profile-company');
        const profileImage = document.querySelector('#profileImg');

        if (profileName) profileName.textContent = config.personal.name;
        if (profileTitle) profileTitle.textContent = config.personal.title;
        if (profileCompany) profileCompany.textContent = config.personal.company;
        if (profileImage) profileImage.src = config.personal.profileImage;

        // Update contact info in sidebar
        const contactItems = document.querySelectorAll('.contact-item');
        if (contactItems.length >= 3) {
            contactItems[0].querySelector('p').textContent = config.personal.email;
            contactItems[1].querySelector('p').textContent = config.personal.phone;
            contactItems[2].querySelector('p').textContent = config.personal.location;
        }

        // Update social links
        const socialLinks = document.querySelectorAll('.social-links a');
        if (socialLinks.length >= 4) {
            socialLinks[0].href = config.personal.social.linkedin;
            socialLinks[1].href = config.personal.social.github;
            socialLinks[2].href = config.personal.social.email;
            socialLinks[3].href = config.personal.social.phone;
        }

        // Update download CV button
        const downloadBtn = document.querySelector('.btn-download');
        if (downloadBtn) downloadBtn.href = config.personal.resumePDF;

        // Update hero section
        const heroName = document.querySelector('.hero-name');
        const heroGreeting = document.querySelector('.hero-greeting');
        const heroDescription = document.querySelector('.hero-description');

        if (heroName) heroName.textContent = config.personal.name;
        if (heroGreeting) heroGreeting.textContent = config.personal.about.greeting;
        if (heroDescription) heroDescription.textContent = config.personal.about.description[0];

        // Update about section
        const aboutTexts = document.querySelectorAll('.about-text');
        if (aboutTexts.length >= 2) {
            aboutTexts[0].textContent = config.personal.about.description[1];
            aboutTexts[1].textContent = config.personal.about.description[2];
        }
    }

    // ====================================
    // Render Stats
    // ====================================
    function renderStats() {
        const statsGrid = document.querySelector('.stats-grid');
        if (!statsGrid) return;

        statsGrid.innerHTML = config.stats.map(stat => `
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="${stat.icon}"></i>
                </div>
                <div class="stat-content">
                    <h3 class="stat-number" data-target="${stat.number}">0</h3>
                    <p class="stat-label">${stat.label}</p>
                </div>
            </div>
        `).join('');

        // Re-initialize counter observers
        initStatsCounters();
    }

    // ====================================
    // Render Services
    // ====================================
    function renderServices() {
        const servicesGrid = document.querySelector('.services-grid');
        if (!servicesGrid) return;

        servicesGrid.innerHTML = config.services.map(service => `
            <div class="service-card" data-aos="flip-left" data-aos-delay="100">
                <div class="service-icon ${service.gradient}">
                    <i class="${service.icon}"></i>
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            </div>
        `).join('');
    }

    // ====================================
    // Render Experience Timeline
    // ====================================
    function renderExperience() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = config.experience.map((exp, index) => `
            <div class="timeline-item" data-aos="fade-right" data-aos-delay="${(index + 1) * 100}">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${exp.date}</span>
                    <h3 class="timeline-title">${exp.title}</h3>
                    <h4 class="timeline-company">${exp.company}</h4>
                    <ul class="timeline-description">
                        ${exp.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <div class="timeline-tags">
                        ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ====================================
    // Render Education
    // ====================================
    function renderEducation() {
        const educationGrid = document.querySelector('.education-grid');
        if (!educationGrid) return;

        educationGrid.innerHTML = config.education.map((edu, index) => `
            <div class="education-card" data-aos="zoom-in" data-aos-delay="${(index + 1) * 100}">
                <div class="education-icon">
                    <i class="${edu.icon}"></i>
                </div>
                <div class="education-content">
                    <span class="education-year">${edu.year}</span>
                    <h3 class="education-degree">${edu.degree}</h3>
                    <h4 class="education-school">${edu.institution}</h4>
                    <p class="education-description">${edu.description}</p>
                </div>
            </div>
        `).join('');
    }

    // ====================================
    // Render Skills
    // ====================================
    function renderSkills() {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = Object.keys(config.skills).map(category => `
            <div class="skill-category">
                <h3 class="skill-category-title">${category}</h3>
                ${config.skills[category].map(skill => `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percentage">${skill.percentage}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress ${skill.gradient}" style="width: ${skill.percentage}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
    }

    // ====================================
    // Render Certifications
    // ====================================
    function renderCertifications() {
        const certsGrid = document.querySelector('.certifications-grid');
        if (!certsGrid) return;

        certsGrid.innerHTML = config.certifications.map((cert, index) => `
            <div class="cert-card" data-aos="flip-up" data-aos-delay="${(index + 1) * 100}">
                <div class="cert-icon">
                    <i class="${cert.icon}"></i>
                </div>
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <span class="cert-badge">${cert.badge}</span>
            </div>
        `).join('');
    }

    // ====================================
    // Render Projects
    // ====================================
    function renderProjects() {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (!portfolioGrid) return;

        portfolioGrid.innerHTML = config.projects.map((project, index) => `
            <div class="portfolio-item" data-category="${project.category}" data-aos="zoom-in" data-aos-delay="${(index % 3 + 1) * 100}">
                <div class="portfolio-card">
                    <div class="portfolio-image">
                        <div class="placeholder-image ${project.gradient}">
                            <i class="${project.icon} fa-3x"></i>
                        </div>
                        <div class="portfolio-overlay">
                            <a href="#" class="overlay-btn">
                                <i class="fas fa-eye"></i>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-content">
                        <span class="portfolio-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                        <h3 class="portfolio-title">${project.title}</h3>
                        <p class="portfolio-description">${project.description}</p>
                        <div class="portfolio-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ====================================
    // Render Achievements
    // ====================================
    function renderAchievements() {
        const achievementsGrid = document.querySelector('.achievements-grid');
        if (!achievementsGrid) return;

        achievementsGrid.innerHTML = config.achievements.map((achievement, index) => `
            <div class="achievement-card" data-aos="flip-left" data-aos-delay="${(index + 1) * 100}">
                <div class="achievement-icon">
                    <i class="${achievement.icon}"></i>
                </div>
                <h3 class="achievement-title">${achievement.title}</h3>
                <p class="achievement-description">${achievement.description}</p>
            </div>
        `).join('');
    }

    // ====================================
    // Render Companies
    // ====================================
    function renderCompanies() {
        const companiesGrid = document.querySelector('.companies-grid');
        if (!companiesGrid) return;

        companiesGrid.innerHTML = config.companies.map((company, index) => `
            <div class="company-card" data-aos="zoom-in" data-aos-delay="${(index + 1) * 100}">
                <div class="company-logo">
                    <i class="${company.icon}"></i>
                </div>
                <h4>${company.name}</h4>
                <p>${company.role}</p>
                <span class="company-year">${company.period}</span>
            </div>
        `).join('');
    }

    // ====================================
    // Render Contact Info
    // ====================================
    function renderContactInfo() {
        const contactInfoGrid = document.querySelector('.contact-info-grid');
        if (!contactInfoGrid) return;

        contactInfoGrid.innerHTML = config.contactInfo.map((info, index) => `
            <div class="contact-info-card" data-aos="zoom-in" data-aos-delay="${(index + 1) * 100}">
                <div class="contact-info-icon">
                    <i class="${info.icon}"></i>
                </div>
                <h3 class="contact-info-title">${info.title}</h3>
                <p class="contact-info-text">${info.text}</p>
                <a href="${info.link}" class="contact-info-link">${info.linkText}</a>
            </div>
        `).join('');
    }

    // ====================================
    // Render Portfolio Filters
    // ====================================
    function renderPortfolioFilters() {
        const portfolioFilters = document.querySelector('.portfolio-filters');
        if (!portfolioFilters) return;

        portfolioFilters.innerHTML = config.portfolioFilters.map((filter, index) => `
            <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${filter.id}">
                <i class="${filter.icon}"></i>
                <span>${filter.label}</span>
            </button>
        `).join('');
    }

    // ====================================
    // Helper: Re-initialize Stats Counters
    // ====================================
    function initStatsCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => statsObserver.observe(stat));
    }

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // ====================================
    // Initialize All Sections
    // ====================================
    renderPersonalInfo();
    renderStats();
    renderServices();
    renderExperience();
    renderEducation();
    renderSkills();
    renderCertifications();
    renderProjects();
    renderAchievements();
    renderCompanies();
    renderContactInfo();
    renderPortfolioFilters();

    // Re-initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }

    console.log('Portfolio loaded from configuration!');
});
