// ===============================
// GSAP ScrollTrigger
// ================================
gsap.registerPlugin(ScrollTrigger);

gsap.from(".characteristics-img", {
    duration: 1,
    x: "-1500",
    scrollTrigger: ".characteristics-img"
});

gsap.from(".cheetah-regions-content", {
    duration: 1,
    x: "-1500",
    scrollTrigger: ".cheetah-regions-content"
});

gsap.from("#slider", {
    duration: 1,
    scale: ".4",
    scrollTrigger: "#slider"
});

gsap.fromTo(".timeline", {
    duration: 1,
    scale: ".2",
    scrollTrigger: ".timeline"
}, {
    duration: 1,
    scale: "1",
    scrollTrigger: ".timeline"
});

gsap.from(".threats", {
    duration: 1,
    x: "-1000",
    rotate: "18deg",
    scrollTrigger: ".threats",
});

gsap.from(".education", {
    duration: 1,
    x: "1000",
    rotate: "-18deg",
    scrollTrigger: ".education",
});

gsap.from(".livelihood", {
    duration: 1,
    x: "-1000",
    rotate: "18deg",
    scrollTrigger: ".livelihood",
});

gsap.from(".sustainability", {
    duration: 1,
    x: "1000",
    rotate: "-18deg",
    scrollTrigger: ".sustainability",
});

gsap.from(".livestock", {
    duration: 1,
    x: "-1000",
    rotate: "18deg",
    scrollTrigger: ".livestock",
});

gsap.from("#about", {
    duration: 1,
    x: "-1000",
    scrollTrigger:"#about"
});

gsap.from("#contact", {
    duration: 1,
    scale: ".4",
    scrollTrigger: "#contact",
});

// ==========================
// GSAP
// ==========================
const tl = new TimelineLite();
tl.from('header', 1, {
        y: '-400',
        ease: "bounce",  
});

tl.from('.home-item', 1, {
    y: '-1400', 
}, "-=0.5");


tl.from('.home-content', 1, {
    scale: '1.5', 
}, "-=0.5");

// ====================================================
// Activate navigation link on scrolling 
// ====================================================
const navLinks = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

// List for the event of scrolling on each section.
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        let topOfSection = section.offsetTop;
        if (scrollY >= topOfSection - 65) {
            currentSection = section.getAttribute('id');
        }
    });

    // Loop through nav links, remove active class and add it to the current.
    navLinks.forEach(a => {
        a.classList.remove('active');
        let currentElement = 'nav ul li a[href*= ' + currentSection + ']';
        document.querySelector(currentElement).classList.add('active');
    });
});

// ====================================================
// Dropdown menu functionality 
// =====================================================
const openDropdownMenu = document.querySelector("#menu");

// Add event listener to get Started button and run open section function on click.
openDropdownMenu.addEventListener('click', function() { 
    if(document.querySelector("#dropdown-menu").style.display == "block") {

        document.querySelector("#dropdown-menu").style.display = "none";
    } else {

        document.querySelector("#dropdown-menu").style.display = "block";
    }
});

// =======================================================
// Shoelace dialog box functionality.
// ========================================================
const dialog = document.querySelector('.dialog-overview');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');
openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());

// =======================================================
//  Select image
// =======================================================
const images = document.querySelectorAll('.slider-img');
const imageWrapper = document.querySelector('.gallery-image');
images.forEach(image => {
    image.addEventListener('click', function() {
        const img = document.querySelector('#main-img');
        img.src = image.src;
        imageWrapper.style.display = 'flex';
    });
});

// ========================================================
//  Image Slider
// ========================================================
const selectorLeft = document.querySelector('#left-arrow');
const selectorRight = document.querySelector('#right-arrow');
const allImages = document.querySelectorAll('.slider-img');

// Functionality for image carousel right click button.
selectorRight.addEventListener('click', function() {

    // Store last image in variable
    const lastImageSrc = allImages[8].src;

    // Loop through all iamges and change src to the next img src.
    for(let i = allImages.length; i > 0; i--) {

        if(i < 9) {
            allImages[i].src = allImages[i - 1].src;
        }   
    }

    // Change first img src to the src of the last img.
    allImages[0].src = lastImageSrc;
});

// Functionality for image carousel Left click button.
selectorLeft.addEventListener('click', function() {

    // Store last image in variable
    const firstImageSrc = allImages[0].src;

    // Loop through all iamges and change src to the next img src.
    for(let i = 0; i < allImages.length - 1; i++) {

            allImages[i].src = allImages[i + 1].src;
    }

    // Change last img src to the src of the first img.
    allImages[8].src = firstImageSrc;
});

// ===============================================================
// SVG menu icon toggle
// ===============================================================
document.querySelector('svg').onclick = function(){
    document.querySelector('#top-stroke').classList.toggle('clicked');
    document.querySelector('#middle-stroke').classList.toggle('clicked');
    document.querySelector('#bottom-stroke').classList.toggle('clicked');
};

// ===============================================================
// Close dropdown menu
// =============================================================== 
function closeMenu() {
    document.querySelector("#dropdown-menu").style.display = "none";
    document.querySelector('#top-stroke').classList.toggle('clicked');
    document.querySelector('#middle-stroke').classList.toggle('clicked');
    document.querySelector('#bottom-stroke').classList.toggle('clicked');
}

// ==============================================================
//  When region hotspot is clicked change content to chosen data.
// ==============================================================
function displayHotSpotData(region) {

    // Get elements and store in variable
    const countries = document.querySelectorAll('.region-tooltip-content');

    // Loop through elements and display to none.
    countries.forEach(country => {
        country.style.display = 'none';
    });

    //  Get element to display and display it to block.
    const displayRegion = document.querySelector(region);
    displayRegion.style.display = 'block';

    // GSAP animation.
    const tl = new TimelineLite();
    tl.from(region, 1, {
        y: '-400',
        ease: "bounce",  
    });
}

// ===================================================
// Toggle population data on population timeline
// ===================================================
function togglePopulation(tipToActive, population){

    // Declare variable
    let tips = document.querySelectorAll(".tip");
    let populationNumber = document.querySelector(".population-number");

    //  Loop through tips and remove active class from all
    for(let i = 0; i < tips.length; i++) {
      tips[i].className = tips[i].className.replace(" population-active", "");
    }

    //  Add active class to current tip.
    tips[tipToActive].className += " population-active";

    // update population figure.
    populationNumber.innerHTML = population;

    const tl = new TimelineLite();
    tl.from('.population-number', 1, {
        x: '-500',
            rotate: '360',
            // ease: "bounce",  
    });
}

// ======================================================
// Close image
// ======================================================
function closeImage() {
    const img = document.querySelector('.gallery-image');
    img.style.display = 'none';
}
