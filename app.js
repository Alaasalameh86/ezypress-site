// Language switching
let currentLang = 'en';

const langSwitcher = document.getElementById('lang-switcher');
const bodyEl = document.getElementById('body');

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  langSwitcher.textContent = currentLang === 'en' ? 'AR' : 'EN';

  if (currentLang === 'ar') {
    bodyEl.classList.remove('ltr');
    bodyEl.classList.add('rtl');
    bodyEl.setAttribute('dir', 'rtl');
  } else {
    bodyEl.classList.remove('rtl');
    bodyEl.classList.add('ltr');
    bodyEl.setAttribute('dir', 'ltr');
  }

  const enElements = document.querySelectorAll('[id$="-en"]');
  const arElements = document.querySelectorAll('[id$="-ar"]');

  if (currentLang === 'ar') {
    enElements.forEach(el => el.classList.add('hidden'));
    arElements.forEach(el => el.classList.remove('hidden'));
  } else {
    arElements.forEach(el => el.classList.add('hidden'));
    enElements.forEach(el => el.classList.remove('hidden'));
  }
}

langSwitcher.addEventListener('click', switchLanguage);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Card reveal on scroll
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.book-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});