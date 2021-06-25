const hamburguer = document.getElementById('hbg');
const xBtn = document.getElementById('x_btn');
const mobMenu = document.getElementById('mobile_menu');
const headline = document.getElementById('headline');
const navbar = document.getElementById('nav');
const portfolio = document.getElementById('mobile_prt');
const about = document.getElementById('mobile_abt');
const contact = document.getElementById('mobile_cnt');

hamburguer.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
  headline.style = 'filter: blur(6px);';
  navbar.style = 'filter: blur(6px);';
});

xBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  headline.style = '';
  navbar.style = '';
});

portfolio.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  headline.style = '';
  navbar.style = '';
});

about.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  headline.style = '';
  navbar.style = '';
});

contact.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  headline.style = '';
  navbar.style = '';
});

const workProjects = [
  {
    id: 1,
    imgSrc: './images/SnapshootPortfolio@2x.png',
    imgSrcSet: './images/SnapshootPortfolio@2x.png 295w, ./images/SnapshootPortfolio@2x.png 544w',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://leonardodiasb.github.io/Personal-Portfolio/',
    linkSource: 'https://github.com/leonardodiasb/Personal-Portfolio',
  },
  {
    id: 2,
    imgSrc: './images/SnapshootPortfolio(1).png',
    imgSrcSet: './images/SnapshootPortfolio(1).png 295w, ./images/SnapshootPortfolio(1).png 544w',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://leonardodiasb.github.io/Personal-Portfolio/',
    linkSource: 'https://github.com/leonardodiasb/Personal-Portfolio',
  },
  {
    id: 3,
    imgSrc: './images/SnapshootPortfolio(2).png',
    imgSrcSet: './images/SnapshootPortfolio(2).png 295w, ./images/SnapshootPortfolio(2).png 544w',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://leonardodiasb.github.io/Personal-Portfolio/',
    linkSource: 'https://github.com/leonardodiasb/Personal-Portfolio',
  },
  {
    id: 4,
    imgSrc: './images/SnapshootPortfolio(3).png',
    imgSrcSet: './images/SnapshootPortfolio(3).png 295w, ./images/SnapshootPortfolio(3).png 544w',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://leonardodiasb.github.io/Personal-Portfolio/',
    linkSource: 'https://github.com/leonardodiasb/Personal-Portfolio',
  },
];

function createElement(item, key, element, parent = null) {
  const createdElement = document.createElement(element.element);
  if (element.attributes) {
    const attributes = Object.keys(element.attributes);
    attributes.forEach((key) => {
      createdElement.setAttribute(key, element.attributes[key]);
    });
  }
  if (element.classes) {
    const { classes } = element;
    classes.forEach((key) => {
      createdElement.classList.add(key);
    });
  }
  if (element.text) {
    const textNodeElement = document.createTextNode(element.text);
    createdElement.appendChild(textNodeElement);
  }
  if (element.id) {
    createdElement.id = element.id;
  }
  if (parent) {
    parent.appendChild(createdElement);
  }
  if (element.children) {
    for (let i = 0; i < element.children.length; i += 1) {
      createElement(item, key, element.children[i], createdElement);
    }
  }
  return createdElement;
}

for (let i = 0; i < workProjects.length; i += 1) {
  const elements = {
    element: 'li',
    id: i + 1,
    classes: i % 2 === 0 ? ['container'] : ['container', 'rev'],
    children: [
      {
        element: 'img',
        attributes: {
          src: workProjects[i].imgSrc,
          srcset: workProjects[i].imgSrcSet,
          alt: 'tonic',
          sizes: '(max-width: 600px) 295px, 544px',
        },
        classes: ['work-img'],
      },
      {
        element: 'div',
        classes: ['work-content'],
        children: [
          {
            element: 'h2',
            text: workProjects[i].title,
          },
          {
            element: 'ul',
            classes: ['work-information'],
            children: [
              {
                element: 'li',
                text: 'CANOPY',
                classes: ['business'],
              },
              {
                element: 'li',
                children: [
                  {
                    element: 'span',
                    classes: ['dot'],
                  },
                ],
              },
              {
                element: 'li',
                text: 'Back End Dev',
                classes: ['wrkArea'],
              },
              {
                element: 'li',
                children: [
                  {
                    element: 'span',
                    classes: ['dot'],
                  },
                ],
              },
              {
                element: 'li',
                text: '2015',
                classes: ['wrkYear'],
              },
            ],
          },
          {
            element: 'p',
            text: workProjects[i].description,
            classes: ['work-description'],
          },
          {
            element: 'ul',
            classes: ['work-tags'],
            children: [],
          },
          {
            element: 'button',
            classes: ['work-btn'],
            text: 'See Project',
            attributes: {
              type: 'button',
            },
          },
        ],
      },
    ],
  };
  for (let t = 0; t < workProjects[i].technologies.length; t += 1) {
    elements.children[1].children[3].children.push({
      element: 'li',
      text: workProjects[i].technologies[t],
    });
  }
  const createdElement = createElement(workProjects[i], i, elements);
  document.getElementById('portfolio').appendChild(createdElement);
}

const workBtn = document.querySelectorAll('.work-btn');

for (let i = 0; i < workBtn.length; i += 1) {
  workBtn[i].addEventListener('click', () => {
    const description = document.querySelectorAll('.work-description');
    const workImg = document.querySelectorAll('.work-img');
    const tags = document.querySelectorAll('.work-tags');
    const header = document.querySelectorAll('h2');
    const cnpy = document.querySelectorAll('.business');
    const wrkArea = document.querySelectorAll('.wrkArea');
    const wrkYear = document.querySelectorAll('.wrkYear');

    const popupSection = document.createElement('section');
    popupSection.classList.add('popup-section');
    const popup = document.createElement('div');
    popupSection.appendChild(popup);
    popup.classList.add('modal');
    const popupTop = document.createElement('div');
    popupTop.classList.add('popup-top');
    popup.appendChild(popupTop);
    const projectName = document.createElement('h2');
    projectName.style = 'margin-left: 0;';
    projectName.innerHTML = header[i].innerHTML;
    popupTop.appendChild(projectName);
    const closePopup = document.createElement('img');
    closePopup.src = './images/IconGray.png';
    popupTop.appendChild(closePopup);
    const workHeaderItems = document.createElement('ul');
    workHeaderItems.style = 'margin-left: 0;';
    workHeaderItems.classList.add('work-information');
    popup.appendChild(workHeaderItems);
    const canopy = document.createElement('li');
    canopy.classList.add('business');
    canopy.innerHTML = cnpy[i].innerHTML;
    workHeaderItems.appendChild(canopy);
    const dotDiv = document.createElement('li');
    workHeaderItems.appendChild(dotDiv);
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotDiv.appendChild(dot);
    const workArea = document.createElement('li');
    workArea.innerHTML = wrkArea[i].innerHTML;
    workHeaderItems.appendChild(workArea);
    const year = document.createElement('li');
    year.innerHTML = wrkYear[i].innerHTML;
    workHeaderItems.appendChild(year);
    const popupImg = document.createElement('img');
    popupImg.classList.add('popup-image');
    popupImg.src = workImg[i].src;
    popup.appendChild(popupImg);
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popup.appendChild(popupContent);
    const popupDescription = document.createElement('p');
    popupDescription.classList.add('work-description');
    popupDescription.style = 'margin-left: 0;';
    popupDescription.innerHTML = description[i].innerHTML;
    popupContent.appendChild(popupDescription);
    const popupElements = document.createElement('div');
    popupContent.appendChild(popupElements);
    popupElements.classList.add('popup-elements');
    const popupTags = document.createElement('ul');
    popupElements.appendChild(popupTags);
    popupTags.classList.add('work-tags');
    popupTags.style = 'margin-left: 0;';
    for (let j = 0; j < tags[i].childNodes.length; j += 1) {
      const tagElement = document.createElement('li');
      tagElement.innerHTML = tags[i].childNodes[j].innerHTML;
      popupTags.appendChild(tagElement);
    }
    const popupButtons = document.createElement('div');
    popupButtons.classList.add('popup-buttons');
    popupElements.appendChild(popupButtons);
    const popBtn1 = document.createElement('button');
    popBtn1.style = 'margin-left: 0;';
    popBtn1.classList.add('work-btn');
    popBtn1.innerHTML = 'See live';
    popupButtons.appendChild(popBtn1);
    const popBtn2 = document.createElement('button');
    popBtn2.classList.add('work-btn');
    popBtn2.innerHTML = 'See Source';
    popupButtons.appendChild(popBtn2);
    document.body.appendChild(popupSection);

    closePopup.addEventListener('click', () => {
      popupSection.remove();
      popup.remove();
      popupTop.remove();
      projectName.remove();
      closePopup.remove();
      workHeaderItems.remove();
      canopy.remove();
      dotDiv.remove();
      dot.remove();
      workArea.remove();
      year.remove();
      popupImg.remove();
      popupContent.remove();
      popupDescription.remove();
      popupButtons.remove();
      popBtn1.remove();
      popBtn2.remove();
    });
  });
}

const form = document.getElementById('input-box');
const { email } = form.elements;
const error = document.getElementById('email-error');

function validadeEmail(input) {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  if (validadeEmail(email.value)) {
    error.style = 'opacity: 0';
  } else {
    e.preventDefault();
    error.style = 'opacity: 1';
  }
});

