const navMobile = document.querySelector('.header-nav-mobile');
const hamburger = document.querySelector('.menu');
const logoPlaceholder = document.querySelector('.logo-placeholder');
const portfolio = document.querySelector('#portfolio-mobile');
const about = document.querySelector('#about-mobile');
const contact = document.querySelector('#contact-mobile');
const closeBtn = document.querySelector('.btn-close-nav');
const popupBtn = document.querySelectorAll('.button-project');
const overlay = document.querySelector('#overlay');
const email = document.getElementById('email');
const errMsgEmail = document.querySelector('small');
const submitBtn = document.querySelector('.submit-button');
const re = /^[a-z0-9]+([._%+-][a-z0-9]+)*@[a-z0-9]+([.-][a-z0-9]+)*\.[a-z]{2,}$/;

const arrayCards = [
  {
    id: 0,
    url: 'assets/img/Snapshoot-Portfolio.png',
    url2: 'assets/img/Snapshoot.svg',
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
    url2: 'assets/img/Snapshoot.svg',
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
    url2: 'assets/img/Snapshoot.svg',
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
    url2: 'assets/img/Snapshoot.svg',
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
    url2: 'assets/img/Snapshoot.svg',
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
    url2: 'assets/img/Snapshoot.svg',
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
    <div class="close-detail" id="close-detail-mobile">
      <img src="assets/img/closedetailbtn.svg" alt="closebtn mobile">
    </div>
    <div  class="close-detail" id="close-detail-desktop">
      <img src="assets/img/Icon.png" alt="closebtn desktop">
    </div>
    <div id="card-image-details-mobile">
      <img src=${arrayCards[items].url2} alt="details image mobile">
    </div>
    <div id="card-image-details-desktop">
      <img src=${arrayCards[items].url} alt="details image desktop">
    </div>
    <h2 class="card-name-mobile">${arrayCards[items].name}</h2>
    <ul class="card-tags-tech">
      <li id="tech1">${arrayCards[items].tecnologies.tech1}</li>
      <li id="tech2">${arrayCards[items].tecnologies.tech2}</li>
      <li id="tech3">${arrayCards[items].tecnologies.tech3}</li>
      <li id="tech4">${arrayCards[items].tecnologies.tech4}</li>
      <li id="tech5">${arrayCards[items].tecnologies.tech5}</li>
      <li id="tech6">${arrayCards[items].tecnologies.tech6}</li>
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

submitBtn.addEventListener('click', (e) => {
  if (re.test(email.value) && email.value === email.value.toLowerCase()) {
    errMsgEmail.innerText = '';
  } else {
    errMsgEmail.innerText = 'Your email should be in lowercase!';
    errMsgEmail.classList.add('error-message');
    e.preventDefault();
  }
});

for (let i = 0; i < popupBtn.length; i += 1) {
  popupBtn[i].addEventListener('click', () => {
    overlay.classList.add('active');
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkMobile(i);
    document.body.append(cardWork);
    const closeDetail = document.querySelectorAll('.close-detail');
    for (let j = 0; j < closeDetail.length; j += 1) {
      closeDetail[j].addEventListener('click', async () => {
        overlay.classList.remove('active');
        document.body.removeChild(cardWork);
      });
    }
  });
}
