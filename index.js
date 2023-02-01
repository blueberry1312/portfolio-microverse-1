const navMobile = document.querySelector('.header-nav-mobile');
const hamburger = document.querySelector('.menu');
const logoPlaceholder = document.querySelector('.logo-placeholder');
const portfolio = document.querySelector('#portfolio-mobile');
const about = document.querySelector('#about-mobile');
const contact = document.querySelector('#contact-mobile');
const closeBtn = document.querySelector('.btn-close-nav');
const popupBtn = document.querySelectorAll('.button-project');

const arrayCards = [
  {
    id: 0,
    url: 'assets/img/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 1,
    url: 'assets/img/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 2,
    url: 'assets/img/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 3,
    url: 'assets/img/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 4,
    url: 'assets/img/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 5,
    url: 'assets/img/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
];

const arrayDesktop = [
  {
    id: 0,
    url: 'assets/img/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 1,
    url: 'assets/img/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 2,
    url: 'assets/img/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 3,
    url: 'assets/img/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 4,
    url: 'assets/img/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 5,
    url: 'assets/img/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
];

const cardWorkMobile = (items) => `
  <article class="card-work-mobile">
    <img src="assets/img/closedetailbtn.svg" alt="close detail mobile" class="close-detail-mobile">
    <img src=${arrayCards[items].url} alt="details image" class="card-image-details-mobile">
    <h2 class="card-name-mobile">${arrayCards[items].name}</h2>
    <ul class="card-tags">
      <li>${arrayCards[items].tecnologies.tech1}</li>
      <li>${arrayCards[items].tecnologies.tech2}</li>
      <li>${arrayCards[items].tecnologies.tech3}</li>
    </ul>
    <p class="card-description-mobile">${arrayCards[items].description}</p>
    <div class="card-button-mobile">
      <a href=${arrayCards[items].linkVersion} class="livebtn-mobile">
        See Live
        <img src="assets/img/liveicon.svg" alt="live icon">
      </a>
      <a href=${arrayCards[items].linkSource} class="sourcebtn-mobile">
        See Source
        <img src="assets/img/sourceicon.svg" alt="source icon">
      </a>
    </div>
    <script src="index.js"></script>
  </article>
`;

const cardWorkDesktop = (items1) => `
  <article class="card-work-desktop">
    <img src="assets/img/Icon.png" alt="close detail desktop" class="close-detail-desktop">
    <img src=${arrayDesktop[items1].url} alt="details image" class="card-image-details-desktop">
    <div class="popup-title-desktop">
    <h2 class="card-name-desktop">${arrayDesktop[items1].name}</h2>
    <div class="card-button-desktop">
       <div class="btn-container">
        <a href=${arrayDesktop[items1].linkVersion} class="livebtn-desktop">
          See Live
          <img src="assets/img/liveicon.svg" alt="live icon">
        </a>
        </div>
        <div class="btn-container">
          <a href=${arrayDesktop[items1].linkSource} class="sourcebtn-desktop">
            See Source
            <img src="assets/img/sourceicon.svg" alt="source icon">
          </a>
        </div>
    </div>
    </div>
    <ul class="card-tags">
      <li>${arrayDesktop[items1].tecnologies.tech1}</li>
      <li>${arrayDesktop[items1].tecnologies.tech2}</li>
      <li>${arrayDesktop[items1].tecnologies.tech3}</li>
      <li>${arrayDesktop[items1].tecnologies.tech4}</li>
      <li>${arrayDesktop[items1].tecnologies.tech5}</li>
      <li>${arrayDesktop[items1].tecnologies.tech6}</li>
    </ul>
    <p class="card-description-desktop">${arrayDesktop[items1].description}</p>
    <script src="index.js"></script>
  </article>
`;

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

for (let i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener('click', () => {
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkMobile(i);
    document.body.append(cardWork);
    const closeDetail = document.querySelector('.close-detail-mobile');
    closeDetail.addEventListener('click', async () => {
      document.body.removeChild(cardWork);
    });
  });
}

for (let i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener('click', () => {
    const cardDesktop = document.createElement('div');
    cardDesktop.innerHTML = cardWorkDesktop(i);
    document.body.append(cardDesktop);
    const closeDetail = document.querySelector('.close-detail-desktop');
    closeDetail.addEventListener('click', async () => {
      document.body.removeChild(cardDesktop);
    });
  });
}