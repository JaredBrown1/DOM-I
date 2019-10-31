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

// let Links = document.getElementsByClassName("nav");
// Array.from(Links).forEach(link => {
//   link.textContent = nav.nav-item-1;
// });

let firstText = document.querySelector(".cta-text h1");
firstText.textContent = siteContent.cta.h1;

let secText = document.querySelector(".cta-text button");
secText.textContent = siteContent.cta.button;

let secImg = document.getElementById("cta-img");
secImg.setAttribute("src", siteContent["cta"]["img-src"]);

let mainContent = siteContent["main-content"];

let firstHeader = document.querySelectorAll("h4");
firstHeader[0].textContent = mainContent["features-h4"];
firstHeader[1].textContent = mainContent["about-h4"];
firstHeader[2].textContent = mainContent["services-h4"];
firstHeader[3].textContent = mainContent["product-h4"];
firstHeader[4].textContent = mainContent["vision-h4"];
firstHeader[5].textContent = siteContent.contact["contact-h4"];

let paragraph = document.querySelectorAll("p");
paragraph[0].textContent = mainContent["features-content"];
paragraph[1].textContent = mainContent["about-content"];
paragraph[2].textContent = mainContent["services-content"];
paragraph[3].textContent = mainContent["product-content"];
paragraph[4].textContent = mainContent["vision-content"];
paragraph[5].textContent = mainContent["contact-content"];

let threeImg = document.getElementById("middle-img");
threeImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contactContent = siteContent["contact"];

let contact = document.querySelectorAll(".contact p");
contact[0].textContent = contactContent.address;
contact[1].textContent = contactContent.phone;
contact[2].textContent = contactContent.email;





