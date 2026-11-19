(function () {
  'use strict';

  /* Mobile navigation ---------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    var setNav = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNav(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });
  }

  /* Reveal on scroll ----------------------------------------------------- */
  var revealItems = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealItems.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* Footer year ---------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* Contact form --------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var name = String(data.get('name') || '').trim();
      var company = String(data.get('company') || '').trim();
      var interest = String(data.get('interest') || '').trim();
      var message = String(data.get('message') || '').trim();

      var subject = 'Consultation request' + (company ? ' — ' + company : '');
      var body = [
        'Name: ' + name,
        'Company: ' + (company || '—'),
        'Area of interest: ' + interest,
        '',
        message
      ].join('\n');

      window.location.href = 'mailto:advisors@meridiancapital.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      if (note) {
        note.textContent = 'Your email app should open with the details filled in. If it does not, write to advisors@meridiancapital.com.';
      }
    });
  }
})();
