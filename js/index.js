const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Title

const title = document.querySelector('title');
title.textContent = 'Great Idea!';

// Nav Bar

const navLinks = document.querySelectorAll('.container header nav a');
navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];

navLinks.forEach(link => {
  link.style.color = 'green';
})

const firstLink = document.createElement('a');
firstLink.textContent = 'Click Me!';
firstLink.href = '#';
firstLink.style.color = 'green';
const nav = document.querySelector('nav');
nav.prepend(firstLink);

const lastLink = document.createElement('a');
lastLink.textContent = 'No, Click Me!';
lastLink.href = '#';
lastLink.style.color = 'green';
nav.appendChild(lastLink);

// CTA

const ctaSection = document.querySelector('.cta');
const ctaHeader = ctaSection.querySelector('h1');
const ctaButton = ctaSection.querySelector('button');
const ctaImg = ctaSection.querySelector('#cta-img')

ctaHeader.textContent = siteContent.cta['h1'];
ctaButton.textContent = siteContent.cta['button'];
ctaImg.src = siteContent.cta['img-src'];

// Main Content

const mainContent = document.querySelector('.main-content');
const topContent = mainContent.querySelector('.top-content');

const topHeaders = topContent.querySelectorAll('h4');
topHeaders[0].textContent = siteContent["main-content"]['features-h4'];
topHeaders[1].textContent = siteContent["main-content"]['about-h4'];

const topTexts = topContent.querySelectorAll('p');
topTexts[0].textContent = siteContent["main-content"]['features-content'];
topTexts[1].textContent = siteContent["main-content"]['about-content'];

const midImg = mainContent.querySelector('.middle-img');
midImg.src = siteContent["main-content"]['middle-img-src'];

const bottomContent = mainContent.querySelector('.bottom-content')

const bottomHeaders = bottomContent.querySelectorAll('h4');
bottomHeaders[0].textContent = siteContent['main-content']['services-h4'];
bottomHeaders[1].textContent = siteContent['main-content']['product-h4'];
bottomHeaders[2].textContent = siteContent['main-content']['vision-h4'];

const bottomTexts = bottomContent.querySelectorAll('p');
bottomTexts[0].textContent = siteContent['main-content']['services-content'];
bottomTexts[1].textContent = siteContent['main-content']['product-content'];
bottomTexts[2].textContent = siteContent['main-content']['vision-content'];

// Contact

const contact = document.querySelector('.contact');

const contactHead = contact.querySelector('h4');
contactHead.textContent = siteContent.contact['contact-h4'];

const contactInfos = contact.querySelectorAll('p');
contactInfos[0].textContent = siteContent.contact.address;
contactInfos[1].textContent = siteContent.contact.phone;
contactInfos[2].textContent = siteContent.contact.email;

// Footer

const footerText = document.querySelector('footer p');
footerText.textContent = siteContent.footer.copyright;




