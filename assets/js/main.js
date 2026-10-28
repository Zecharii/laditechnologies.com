/* Ladi Technologies — site scripts */
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
    });
  }

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  // Services scroll-spy
  var links = document.querySelectorAll('.svc-nav a');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { links.forEach(function (l) { l.classList.remove('active'); }); var a = map[en.target.id]; if (a) a.classList.add('active'); }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.svc').forEach(function (s) { spy.observe(s); });
  }

  // Contact form: opens the visitor's email client with the enquiry pre-filled.
  // To receive submissions without email clients, replace this with a form service (see README).
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    var params = new URLSearchParams(location.search);
    var svc = params.get('service');
    if (svc && form.service) { form.service.value = svc; }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var d = new FormData(form);
      var subject = 'Website enquiry: ' + (d.get('service') || 'General') + ' — ' + d.get('company');
      var body = 'Name: ' + d.get('first') + ' ' + d.get('last') + '\n' +
                 'Company: ' + d.get('company') + '\n' +
                 'Email: ' + d.get('email') + '\n' +
                 'Phone: ' + (d.get('phone') || '-') + '\n' +
                 'Service of interest: ' + (d.get('service') || '-') + '\n\n' + d.get('message');
      window.location.href = 'mailto:info@laditechnologies.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      status.className = 'form-status ok';
      status.textContent = 'Thank you. Your email app should now open with your message ready to send. If it does not, email us directly at info@laditechnologies.com.';
    });
  }

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
