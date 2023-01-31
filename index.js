const navMobile = document.querySelector('.header-nav-mobile');
const hamburger = document.querySelector('.menu');
const logoPlaceholder = document.querySelector('.logo-placeholder');
const portfolio = document.querySelector('#portfolio-mobile');
const about = document.querySelector('#about-mobile');
const contact = document.querySelector('#contact-mobile');
const closeBtn = document.querySelector('.btn-close-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('hidden');
  logoPlaceholder.classList.add('hidden');
  navMobile.classList.remove('hidden');
  navMobile.style.height = '100vh';
});

closeBtn.addEventListener('click', () => {
  hamburger.classList.remove('hidden');
  logoPlaceholder.classList.remove('hidden');
  navMobile.classList.add('hidden');
});

portfolio.addEventListener('click', () => {
  hamburger.classList.remove('hidden');
  logoPlaceholder.classList.remove('hidden');
  navMobile.classList.add('hidden');
});

about.addEventListener('click', () => {
  hamburger.classList.remove('hidden');
  logoPlaceholder.classList.remove('hidden');
  navMobile.classList.add('hidden');
});

contact.addEventListener('click', () => {
  hamburger.classList.remove('hidden');
  logoPlaceholder.classList.remove('hidden');
  navMobile.classList.add('hidden');
});