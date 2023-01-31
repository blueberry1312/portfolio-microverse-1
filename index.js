const navMobile = document.querySelector('.header-nav-mobile');
const hamburger = document.querySelector('.menu');
const logoPlaceholder = document.querySelector('.logo-placeholder');
const portfolio = document.querySelector('#portfolio-mobile');
const about = document.querySelector('#about-mobile');
const contact = document.querySelector('#contact-mobile');
const closeBtn = document.querySelector('.btn-close-nav');
const popupBtn = document.querySelector('.button-project');
const list = document.getElementById('myList');

const popupWindow = [
  {
    id: '0',
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: 'See Live',
    sourceBtn: 'See Source',
  },
  {
    id: '1',
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: 'See Live',
    sourceBtn: 'See Source',
  },
  {
    id: '2',
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: 'See Live',
    sourceBtn: 'See Source',
  },
  {
    id: '3',
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: 'See Live',
    sourceBtn: 'See Source',
  },
  {
    id: '4',
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: 'See Live',
    sourceBtn: 'See Source',
  },
  {
    id: '5',
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: 'See Live',
    sourceBtn: 'See Source',
  },
];

hamburger.addEventListener('click', () => {
  hamburger.classList.add('hidden');
  logoPlaceholder.classList.add('hidden');
  navMobile.classList.remove('hidden');
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

popupBtn.addEventListener('click', () => {
  popupWindow.forEach(() => {
  
  });
});
