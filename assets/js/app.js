/* ═══════════════════════════════════════════════
   APP.JS — Nothing Phone Portfolio Core Logic
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Theme Toggle (Light / Dark) ──
  function initTheme() {
    // Load saved theme or default to dark
    var saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);

    // Bind all toggle buttons on the page
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'dark';
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    });
  }
  initTheme();
  // ── Status Bar Clock ──
  function updateClock() {
    const el = document.getElementById('statusTime');
    if (!el) return;
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    el.textContent = `${h}:${m}`;
  }
  updateClock();
  setInterval(updateClock, 10000);

  // ── Active Tab Highlight ──
  function setActiveTab() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.tab-bar a').forEach(function (a) {
      a.classList.remove('active');
      const href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
      }
      // Handle project detail pages
      if (page.startsWith('project') && href === 'projects.html') {
        // don't highlight projects for project detail pages within /projects/ folder
      }
    });
    // Special: if we're in /projects/ subfolder, highlight the projects tab
    if (path.includes('/projects/')) {
      document.querySelectorAll('.tab-bar a').forEach(function (a) {
        a.classList.remove('active');
        if (a.getAttribute('href') && a.getAttribute('href').includes('projects.html')) {
          a.classList.add('active');
        }
      });
    }
  }
  setActiveTab();

  // ── Widget Reveal on Scroll ──
  function revealWidgets() {
    const widgets = document.querySelectorAll('.widget-reveal');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    widgets.forEach(function (w) { observer.observe(w); });
  }
  revealWidgets();

  // ── Typing Animation ──
  function initTyping() {
    const el = document.getElementById('typingText');
    if (!el) return;

    const texts = (window.siteConfig && window.siteConfig.profile && window.siteConfig.profile.typingTexts) ||
      ['Developer', 'Engineer', 'Researcher'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const current = texts[textIndex];
      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 800);
  }
  initTyping();

  // ── Video Widget Visibility ──
  function checkVideoWidget() {
    const videoWidget = document.getElementById('videoWidget');
    if (!videoWidget) return;

    // Hide by default, only show if video actually loads
    videoWidget.classList.add('hidden');

    const videoEl = videoWidget.querySelector('video');
    const iframe = videoWidget.querySelector('iframe');

    // Check iframe (e.g., YouTube embed)
    if (iframe && iframe.src && iframe.src !== '' && iframe.src !== 'about:blank') {
      videoWidget.classList.remove('hidden');
      return;
    }

    // Check local video file via fetch HEAD
    if (videoEl) {
      const sources = videoEl.querySelectorAll('source');
      var checked = 0;
      var found = false;

      if (sources.length === 0) return;

      sources.forEach(function (source) {
        if (found) return;
        fetch(source.src, { method: 'HEAD' })
          .then(function (res) {
            checked++;
            if (res.ok && !found) {
              found = true;
              videoWidget.classList.remove('hidden');
              var placeholder = videoWidget.querySelector('.video-widget__placeholder');
              if (placeholder) placeholder.style.display = 'none';
              videoEl.load();
            }
          })
          .catch(function () {
            checked++;
            // If all sources checked and none found, stay hidden
          });
      });
    }
  }
  checkVideoWidget();

  // ── Config Loader (populates DOM from config.js) ──
  function loadConfig() {
    const cfg = window.siteConfig;
    if (!cfg) return;

    // Profile
    if (cfg.profile) {
      const nameEl = document.getElementById('profileName');
      if (nameEl) nameEl.textContent = cfg.profile.name || '';

      const avatarEl = document.getElementById('profileAvatar');
      if (avatarEl && cfg.profile.avatar) avatarEl.src = cfg.profile.avatar;

      const bioEl = document.getElementById('bioText');
      if (bioEl && cfg.profile.bio) {
        bioEl.innerHTML = '<p>' + cfg.profile.bio + '</p>';
      }
    }

    // Education
    if (cfg.education) {
      const eduContainer = document.getElementById('educationTimeline');
      if (eduContainer) {
        eduContainer.innerHTML = cfg.education.map(function (e) {
          return '<div class="timeline__item">' +
            '<div class="timeline__dot"></div>' +
            '<div class="timeline__date">' + e.year + '</div>' +
            '<div class="timeline__title">' + e.degree + '</div>' +
            '<div class="timeline__subtitle">' + e.institution + '</div>' +
            '<div class="timeline__desc">' + e.description + '</div>' +
            '</div>';
        }).join('');
      }
    }

    // Experience
    if (cfg.experience) {
      const expContainer = document.getElementById('experienceTimeline');
      if (expContainer) {
        expContainer.innerHTML = cfg.experience.map(function (e) {
          var tags = (e.tags || []).map(function (t) {
            return '<span class="tag">' + t + '</span>';
          }).join('');
          var desc = Array.isArray(e.description) ? e.description.join(' · ') : e.description;
          return '<div class="timeline__item">' +
            '<div class="timeline__dot"></div>' +
            '<div class="timeline__date">' + e.period + '</div>' +
            '<div class="timeline__title">' + e.role + '</div>' +
            '<div class="timeline__subtitle">' + e.company + '</div>' +
            '<div class="timeline__desc">' + desc + '</div>' +
            '<div class="timeline__tags">' + tags + '</div>' +
            '</div>';
        }).join('');
      }
    }

    // Projects
    if (cfg.projects) {
      const projContainer = document.getElementById('projectsList');
      if (projContainer) {
        projContainer.innerHTML = cfg.projects.map(function (p) {
          var tags = (p.tags || []).map(function (t) {
            return '<span class="tag">' + t + '</span>';
          }).join('');
          return '<a href="' + p.page + '" class="project-card widget-reveal">' +
            '<div class="project-card__title">' + p.title + '</div>' +
            '<div class="project-card__summary">' + p.summary + '</div>' +
            '<div class="project-card__tags">' + tags + '</div>' +
            '</a>';
        }).join('');
        revealWidgets();
      }
    }

    // Research
    if (cfg.research) {
      // Get badge colors from config (with defaults)
      var implColor = cfg.research.implementedColor || '#4ade80';
      var intColor = cfg.research.interestedColor || '#60a5fa';

      function hexToRgba(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
      }

      const implContainer = document.getElementById('researchImplemented');
      if (implContainer && cfg.research.implemented) {
        implContainer.innerHTML = cfg.research.implemented.map(function (r) {
          var links = '';
          if (r.paper_url) links += '<a href="' + r.paper_url + '" class="paper-card__link" target="_blank">📄 Paper</a>';
          if (r.repo_url) links += '<a href="' + r.repo_url + '" class="paper-card__link" target="_blank">💻 Code</a>';
          return '<div class="paper-card">' +
            '<span class="paper-card__badge" style="color:' + implColor + '; background:' + hexToRgba(implColor, 0.1) + '; border: 1px solid ' + hexToRgba(implColor, 0.25) + ';">Implemented</span>' +
            '<div class="paper-card__title">' + r.title + '</div>' +
            '<div class="paper-card__desc">' + r.description + '</div>' +
            '<div class="paper-card__links">' + links + '</div>' +
            '</div>';
        }).join('');
      }

      const intContainer = document.getElementById('researchInterested');
      if (intContainer && cfg.research.interested) {
        intContainer.innerHTML = cfg.research.interested.map(function (r) {
          var links = '';
          if (r.paper_url) links += '<a href="' + r.paper_url + '" class="paper-card__link" target="_blank">📄 Paper</a>';
          return '<div class="paper-card">' +
            '<span class="paper-card__badge" style="color:' + intColor + '; background:' + hexToRgba(intColor, 0.1) + '; border: 1px solid ' + hexToRgba(intColor, 0.25) + ';">Reading List</span>' +
            '<div class="paper-card__title">' + r.title + '</div>' +
            '<div class="paper-card__desc">' + r.description + '</div>' +
            '<div class="paper-card__links">' + links + '</div>' +
            '</div>';
        }).join('');
      }
    }

    // Technologies
    if (cfg.technologies) {
      const techContainer = document.getElementById('techGrid');
      if (techContainer && cfg.technologies.stack) {
        techContainer.innerHTML = cfg.technologies.stack.map(function (t) {
          return '<div class="tech-item">' +
            '<div class="tech-item__icon">' + t.icon + '</div>' +
            '<div class="tech-item__name">' + t.name + '</div>' +
            '</div>';
        }).join('');
      }

      const workingContainer = document.getElementById('workingProjects');
      if (workingContainer && cfg.technologies.working_on) {
        workingContainer.innerHTML = cfg.technologies.working_on.map(function (w) {
          var statusClass = 'status-dot--' + (w.status || 'active');
          var statusLabel = (w.status || 'active').charAt(0).toUpperCase() + (w.status || 'active').slice(1);
          var tags = (w.tags || []).map(function (t) {
            return '<span class="tag">' + t + '</span>';
          }).join('');
          return '<div class="working-card">' +
            '<div class="working-card__status"><span class="status-dot ' + statusClass + '"></span> ' + statusLabel + '</div>' +
            '<div class="working-card__title">' + w.title + '</div>' +
            '<div class="working-card__desc">' + w.description + '</div>' +
            '<div class="project-card__tags">' + tags + '</div>' +
            '</div>';
        }).join('');
      }
    }

    // Resume PDF path
    if (cfg.resume) {
      const pdfEmbed = document.getElementById('resumePdf');
      if (pdfEmbed && cfg.resume.pdfPath) {
        pdfEmbed.src = cfg.resume.pdfPath;
      }
      const dlBtn = document.getElementById('resumeDownload');
      if (dlBtn && cfg.resume.pdfPath) {
        dlBtn.href = cfg.resume.pdfPath;
      }
    }

    // Social links
    if (cfg.profile && cfg.profile.social) {
      const socialContainer = document.getElementById('socialLinks');
      if (socialContainer) {
        var html = '';
        if (cfg.profile.social.github) html += '<a href="' + cfg.profile.social.github + '" target="_blank" aria-label="GitHub">git</a>';
        if (cfg.profile.social.linkedin) html += '<a href="' + cfg.profile.social.linkedin + '" target="_blank" aria-label="LinkedIn">in</a>';
        if (cfg.profile.social.email) html += '<a href="mailto:' + cfg.profile.social.email + '" aria-label="Email">@</a>';
        socialContainer.innerHTML = html;
      }
    }

    // GitHub page
    if (cfg.github) {
      var emptyEl = document.getElementById('githubEmpty');
      var contentEl = document.getElementById('githubContent');
      if (emptyEl && contentEl) {
        if (cfg.github.enabled) {
          // Show real content, hide empty state
          emptyEl.style.display = 'none';
          contentEl.style.display = 'block';

          // Username + profile link
          var usernameEl = document.getElementById('githubUsername');
          if (usernameEl) usernameEl.textContent = cfg.github.username || '';
          var profileLinkEl = document.getElementById('githubProfileLink');
          if (profileLinkEl) profileLinkEl.href = cfg.github.profileUrl || '#';
          var viewProfileEl = document.getElementById('githubViewProfile');
          if (viewProfileEl) viewProfileEl.href = cfg.github.profileUrl || '#';

          // Stats
          var statsEl = document.getElementById('githubStats');
          if (statsEl && cfg.github.stats) {
            var s = cfg.github.stats;
            statsEl.innerHTML =
              '<div class="github-stat"><div class="github-stat__number">' + (s.repos || 0) + '</div><div class="github-stat__label">Repos</div></div>' +
              '<div class="github-stat"><div class="github-stat__number">' + (s.stars || 0) + '</div><div class="github-stat__label">Stars</div></div>' +
              '<div class="github-stat"><div class="github-stat__number">' + (s.contributions || 0) + '</div><div class="github-stat__label">Commits</div></div>' +
              '<div class="github-stat"><div class="github-stat__number">' + (s.followers || 0) + '</div><div class="github-stat__label">Followers</div></div>';
          }

          // Pinned Repos
          var reposEl = document.getElementById('githubRepos');
          if (reposEl && cfg.github.pinned && cfg.github.pinned.length > 0) {
            reposEl.innerHTML = cfg.github.pinned.map(function (r) {
              return '<a href="' + (r.url || '#') + '" target="_blank" class="github-repo-card">' +
                '<div class="github-repo-card__name">📁 ' + r.name + '</div>' +
                '<div class="github-repo-card__desc">' + (r.description || '') + '</div>' +
                '<div class="github-repo-card__meta">' +
                '<span>◉ ' + (r.language || '') + '</span>' +
                '<span>★ ' + (r.stars || 0) + '</span>' +
                '<span>⑂ ' + (r.forks || 0) + '</span>' +
                '</div>' +
                '</a>';
            }).join('');
          } else if (reposEl) {
            // No pinned repos yet
            var reposWidget = document.getElementById('githubReposWidget');
            if (reposWidget) reposWidget.style.display = 'none';
          }

        } else {
          // Keep empty state visible (default)
          emptyEl.style.display = 'block';
          contentEl.style.display = 'none';
        }
      }
    }

    // Contact page
    if (cfg.contact) {
      var c = cfg.contact;

      // Build contact details dynamically
      var detailsEl = document.getElementById('contactDetails');
      if (detailsEl) {
        var dHtml = '';
        if (c.email) {
          dHtml += '<div class="contact-detail"><span class="contact-detail__icon">✉</span>' +
            '<div class="contact-detail__info"><div class="contact-detail__label">Email</div>' +
            '<a href="mailto:' + c.email + '" class="contact-detail__value">' + c.email + '</a></div></div>';
        }
        if (c.phone) {
          dHtml += '<div class="contact-detail"><span class="contact-detail__icon">☎</span>' +
            '<div class="contact-detail__info"><div class="contact-detail__label">Phone</div>' +
            '<span class="contact-detail__value">' + c.phone + '</span></div></div>';
        }
        if (c.location) {
          dHtml += '<div class="contact-detail"><span class="contact-detail__icon">◎</span>' +
            '<div class="contact-detail__info"><div class="contact-detail__label">Location</div>' +
            '<span class="contact-detail__value">' + c.location + '</span></div></div>';
        }
        if (c.availability) {
          dHtml += '<div class="contact-detail"><span class="contact-detail__icon">◉</span>' +
            '<div class="contact-detail__info"><div class="contact-detail__label">Status</div>' +
            '<span class="contact-detail__value contact-detail__value--status">' +
            '<span class="status-dot status-dot--active"></span> ' + c.availability + '</span></div></div>';
        }
        detailsEl.innerHTML = dHtml;
      }

      // Mailto fallback button
      var mailtoBtn = document.getElementById('mailtoBtn');
      if (mailtoBtn && c.email) mailtoBtn.href = 'mailto:' + c.email;

      // Extra links
      var linksEl = document.getElementById('contactLinks');
      if (linksEl && c.links && c.links.length > 0) {
        linksEl.innerHTML = c.links.map(function (l) {
          return '<a href="' + l.url + '" target="_blank" class="contact-link-btn">' +
            (l.icon ? '<span>' + l.icon + '</span> ' : '') + l.label + '</a>';
        }).join('');
      } else if (linksEl) {
        linksEl.style.display = 'none';
      }

      // Contact page social links
      if (cfg.profile && cfg.profile.social) {
        var contactSocialEl = document.getElementById('contactSocial');
        if (contactSocialEl) {
          var sHtml = '';
          if (cfg.profile.social.github) sHtml += '<a href="' + cfg.profile.social.github + '" target="_blank" aria-label="GitHub">⌂</a>';
          if (cfg.profile.social.linkedin) sHtml += '<a href="' + cfg.profile.social.linkedin + '" target="_blank" aria-label="LinkedIn">in</a>';
          if (cfg.profile.social.email) sHtml += '<a href="mailto:' + cfg.profile.social.email + '" aria-label="Email">@</a>';
          contactSocialEl.innerHTML = sHtml;
        }
      }

      // Form embed setup
      var embedEl = document.getElementById('formEmbed');
      var iframeEl = document.getElementById('formIframe');
      var notice = document.getElementById('formNotice');
      var fallback = document.getElementById('formFallback');

      if (c.formEmbedUrl && c.formEmbedUrl !== '') {
        // Embed URL configured — load iframe
        if (embedEl && iframeEl) {
          iframeEl.src = c.formEmbedUrl;
          embedEl.style.display = 'block';
        }
      } else {
        // No form configured — show notice + mailto fallback
        if (notice) notice.style.display = 'block';
        if (fallback) fallback.style.display = 'block';
      }
    }
  }

  // Wait for config to be available
  if (window.siteConfig) {
    loadConfig();
  } else {
    document.addEventListener('DOMContentLoaded', loadConfig);
  }

})();
