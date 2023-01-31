const navMobile = document.querySelector('.header-nav-mobile');
const hamburger = document.querySelector('.menu');
const logoPlaceholder = document.querySelector('.logo-placeholder');
const portfolio = document.querySelector('#portfolio-mobile');
const about = document.querySelector('#about-mobile');
const contact = document.querySelector('#contact-mobile');
const closeBtn = document.querySelector('.btn-close-nav');
const popupBtn = document.querySelectorAll('.button-project');

const popupWindow = [
  {
    id: 0,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: '#',
    sourceBtn: '#',
  },
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: '#',
    sourceBtn: '#',
  },
  {
    id: 2,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: '#',
    sourceBtn: '#',
  },
  {
    id: 3,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: '#',
    sourceBtn: '#',
  },
  {
    id: 4,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: '#',
    sourceBtn: '#',
  },
  {
    id: 5,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'assets/img/Snapshoot.svg',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'Javscript',
    },
    liveBtn: '#',
    sourceBtn: '#',
  },
];

// button close details mobile inside the image??

const cardWork = (items) => `
  <article class="card-work-mobile">
    <div class="card-image-mobile">
      <img src=${popupWindow[items].featuredImage} alt="snapshot portfolio">
    </div>
    <h2 class="card-name-mobile">${popupWindow[items].name}</h2>
    <ul class="card-tech-mobile">
      <li class="tech-mobile">${popupWindow[items].technologies.tech1}</li>
      <li class="tech-mobile">${popupWindow[items].technologies.tech2}</li>
      <li class="tech-mobile">${popupWindow[items].technologies.tech3}</li>
    </ul>
    <p class="card-description-mobile">${popupWindow[items].description}</p>
    <div class="card-button-mobile">
      <a href=${popupWindow[items].liveBtn} class="livebtn-mobile">See Live</a>
      <a href=${popupWindow[items].sourceBtn} class="sourcebtn-mobile">See Source</a>
    </div>
    <script src="index.js"></script>
  </article>
  `;

for (let i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener('click', () => {
    const popupCard = document.createElement('div');
    popupCard.innerHTML = cardWork(i);
    document.body.append(popupCard);
    // something like removechild about popupcard, in a eventlistener with the "button close details, i need to define a button instead the image
  });
}

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
