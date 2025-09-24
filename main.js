// Basic UI interactions: nav toggle, accordion, form validation, small helpers

document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const y = new Date().getFullYear();
  document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = y);

  // Nav toggles (handle multiple pages with similar HTML)
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
      const targetId = btn.getAttribute('aria-controls') || 'mainNav';
      const nav = document.getElementById(targetId);
      if (!nav) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
      nav.style.display = expanded ? '' : 'flex';
    });
  });

  // Accordion FAQ
  document.querySelectorAll('.accordion').forEach(acc => {
    acc.addEventListener('click', function () {
      this.classList.toggle('open');
      const panel = this.nextElementSibling;
      if (!panel) return;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Contact form validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // Reset errors
      document.getElementById('errName').textContent = '';
      document.getElementById('errEmail').textContent = '';
      document.getElementById('errMessage').textContent = '';
      document.getElementById('formSuccess').textContent = '';

      if (!name.value.trim()) { document.getElementById('errName').textContent = 'Name is required'; valid=false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { document.getElementById('errEmail').textContent = 'Enter a valid email'; valid=false; }
      if (!message.value.trim() || message.value.trim().length < 10) { document.getElementById('errMessage').textContent = 'Message should be at least 10 characters'; valid=false; }

      if (!valid) return;

      // Simulate submit (replace with AJAX/fetch if you have an endpoint)
      document.getElementById('formSuccess').textContent = 'Message sent! We will get back to you within 48 hours.';
      form.reset();
    });
  }

  // Smooth scroll for internal links (optional)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:'smooth'});
    })
  });
});
