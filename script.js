// VELOCE heritage — small enhancements, no dependencies.
(function () {
  var CONTACT_EMAIL = 'b.sutter@me.com';

  // Year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) toggle.click();
    });
  }

  // Buttons with data-event preselect the matching option in the form
  document.querySelectorAll('[data-event]').forEach(function (link) {
    link.addEventListener('click', function () {
      var wanted = link.getAttribute('data-event');
      var radios = document.querySelectorAll('input[name="event"]');
      var matched = false;
      radios.forEach(function (r) { if (r.value === wanted) { r.checked = true; matched = true; } });
      if (!matched && /Miglia/.test(wanted)) {
        radios.forEach(function (r) { if (r.value === '1000 Miglia 2028') r.checked = true; });
      }
    });
  });

  // Inquiry form → prefilled email (no data stored on the site)
  var form = document.getElementById('inquire-form');
  if (!form) return;
  var errorBox = document.getElementById('form-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var problems = [];
    form.name.removeAttribute('aria-invalid');
    form.email.removeAttribute('aria-invalid');
    if (!name) { problems.push('your name'); form.name.setAttribute('aria-invalid', 'true'); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { problems.push('a valid email address'); form.email.setAttribute('aria-invalid', 'true'); }
    if (problems.length) {
      errorBox.textContent = 'Please add ' + problems.join(' and ') + ' so Beat can reply.';
      errorBox.hidden = false;
      (form.querySelector('[aria-invalid="true"]') || form.name).focus();
      return;
    }
    errorBox.hidden = true;

    var event = (form.querySelector('input[name="event"]:checked') || {}).value || '';
    var isPartner = event === 'Partnership';
    var subject = isPartner ? 'Inquiry: VELOCE heritage partnership' : 'Inquiry: ' + event + ' co-driver seat';
    var lines = [
      'Hello Beat,',
      '',
      isPartner
        ? 'I am interested in a partnership with VELOCE heritage (official technical partner or heritage partner).'
        : 'I am interested in joining you as co-driver at the ' + event + '. Please get in touch to arrange a first 15-minute call.',
      '',
      'Name: ' + name,
      'Email: ' + email,
      'Phone: ' + (form.phone.value.trim() || '-'),
      'Location / best time to call: ' + (form.where.value.trim() || '-'),
    ];
    var msg = form.message.value.trim();
    if (msg) lines.push('', msg);
    lines.push('', 'Sent from veloce-heritage website');

    window.location.href = 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines.join('\n'));
  });
})();
