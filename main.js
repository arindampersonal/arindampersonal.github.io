/**
 * Aurora Design System — Interactive JavaScript
 * Implements theme toggle with localStorage, dynamic typing effect,
 * cursor-following card glow, and IntersectionObserver scroll reveal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Theme Management (Dark-First with Light Override via localStorage)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const htmlRoot = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('aurora-theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlRoot.setAttribute('data-theme', 'light');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
        themeToggleBtn.setAttribute('title', 'Switch to dark theme');
      }
      if (themeIconSun) themeIconSun.style.display = 'none';
      if (themeIconMoon) themeIconMoon.style.display = 'block';
    } else {
      htmlRoot.removeAttribute('data-theme');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
        themeToggleBtn.setAttribute('title', 'Switch to light theme');
      }
      if (themeIconSun) themeIconSun.style.display = 'block';
      if (themeIconMoon) themeIconMoon.style.display = 'none';
    }
  }

  // Initial application
  applyTheme(savedTheme);

  // Toggle Listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('aurora-theme', newTheme);
    });
  }

  // -------------------------------------------------------------------------
  // 2. Typing Effect (Cycling Several Key Engineering Phrases)
  // -------------------------------------------------------------------------
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const phrases = [
      'Azure Cloud Platforms',
      'Terraform & Modular IaC',
      'Zero-Trust CI/CD Automation',
      'Enterprise AVD & NetApp Systems',
      'Platform & SRE Observability'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 85;
    const deletingSpeed = 45;
    const endPause = 2000;
    const loopPause = 400;

    function typeLoop() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentPhrase.substring(0, charIndex);
      } else {
        charIndex++;
        typingElement.textContent = currentPhrase.substring(0, charIndex);
      }

      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentPhrase.length) {
        timeout = endPause;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeout = loopPause;
      }

      setTimeout(typeLoop, timeout);
    }

    typeLoop();
  }

  // -------------------------------------------------------------------------
  // 3. Mousemove Spotlight Glow on Cards
  // Sets --x and --y CSS custom properties on card based on relative cursor pos.
  // -------------------------------------------------------------------------
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // -------------------------------------------------------------------------
  // 4. Scroll Reveal via IntersectionObserver (Threshold 0.15, Animate Once)
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // -------------------------------------------------------------------------
  // 5. Interactive Email Copy Button with Feedback
  // -------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'officiallyarindam@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = '✓ Copied!';
        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
        }, 2200);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // -------------------------------------------------------------------------
  // 6. Interactive Contact Form Handler
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Friend';
      const email = document.getElementById('contact-email')?.value || '';
      const message = document.getElementById('contact-message')?.value || '';

      // Direct mailto trigger
      const mailtoUrl = `mailto:officiallyarindam@gmail.com?subject=${encodeURIComponent('Collaboration inquiry from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;

      formStatus.textContent = `Thank you, ${name}! Opening your email client to send your message...`;
      formStatus.classList.add('show');

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);
    });
  }

  // -------------------------------------------------------------------------
  // 7. Live Local Kolkata Time Clock (IST / UTC+5:30)
  // -------------------------------------------------------------------------
  const liveClockEl = document.getElementById('live-clock');
  if (liveClockEl) {
    function updateClock() {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      liveClockEl.textContent = `${timeStr} IST`;
    }
    updateClock();
    setInterval(updateClock, 1000);
  }
});
