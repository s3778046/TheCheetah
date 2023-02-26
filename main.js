// *************************************************************************************************
//                              GSAP ScrollTrigger
// *************************************************************************************************

gsap.from("#home", {
    duration: 1,
    x: "-1500",
    scrollTrigger: "#home"
  });

gsap.from("#cheetah", {
    duration: 1,
    x: "-1500",
    scrollTrigger: "#cheetah"
  });

  gsap.from("#conservation", {
    duration: 1,
    x: "-1500",
    scrollTrigger: "#conservation"
  });

  gsap.from("#about", {
    duration: 1,
    x: "-1500",
    scrollTrigger:"#about"
  });

  gsap.from("#contact", {
    duration: 1,
    x: "-1500",
    scrollTrigger: "#contact",
  });


  // *************************************************************************************************
//                              GSAP 
// *************************************************************************************************
const tl = new TimelineLite();
tl.from('header', 2, {
        y: '-400',
        ease: "bounce",  
})

function animateSection(section) {

    const tl = new TimelineLite();
    tl.from(section, 1, {
        x: "1700",
    })
};




// ************************************************************************************
//                      Dropdown menu functionality 
// *************************************************************************************
const openDropdownMenu = document.querySelector("#menu");

// Add event listener to get Started button and run open section function on click.
openDropdownMenu.addEventListener('click', function() { 
    if(document.querySelector("#dropdown-menu").style.display == "block") {

        document.querySelector("#dropdown-menu").style.display = "none";
    } else {

        document.querySelector("#dropdown-menu").style.display = "block";
    }
});

// Close dropdown menu
function closeMenu() {
    document.querySelector("#dropdown-menu").style.display = "none";
}

// ***************************************************************************************
//    Open sections and change active link on cheetah and conservation menu. 
// ***************************************************************************************
function openSection(sections, newSection, Links, newLink) {

     // declare variable and store values
     const allLinks = document.querySelectorAll(Links);
     const changeToActive = document.querySelector(newLink);
     const allSections = document.querySelectorAll(sections);
     const changeToSection = document.querySelector(newSection);
     const mobileLabel = document.querySelector('.mobile-menu-label');
 
     // Loop through links and remove all active classes
     for (i = 0; i < allLinks.length; i++) {
         allLinks[i].className = allLinks[i].className.replace(" menu-active", "");
     }

      // Loop through Sections and display all to none
      for (i = 0; i < allSections.length; i++) {
         allSections[i].style.display = "none";
    }
 
     // Add active class to selected link
     changeToActive.className += " menu-active";

    // Change newSection to display block
    changeToSection.style.display = "flex";
}

// ***************************************************************************************
//    Open sections and change active link on mobile cheetah and conservation menu. 
// ***************************************************************************************
function openSectionMobile(sections, newSection, Links, newLink, label) {

    // declare variable and store values
    const allLinks = document.querySelectorAll(Links);
    const changeToActive = document.querySelector(newLink);
    const allSections = document.querySelectorAll(sections);
    const changeToSection = document.querySelector(newSection);
    const mobileLabelCheetah = document.querySelector('.ch-label');
    const mobileLabelConservation = document.querySelector('.co-label');

    // Loop through links and remove all active classes
    for (i = 0; i < allLinks.length; i++) {
        allLinks[i].className = allLinks[i].className.replace(" mobile-menu-active", "");
    }

     // Loop through Sections and display all to none
     for (i = 0; i < allSections.length; i++) {
        allSections[i].style.display = "none";
   }

    // Add active class to selected link
    changeToActive.className += " mobile-menu-active";

   // Change newSection to display block
   changeToSection.style.display = "flex";

   // Change mobile menu label
   mobileLabelCheetah.innerHTML = label;
   mobileLabelConservation.innerHTML = label;
}


// *************************************************************************************************
//                                  Activate links on scrolling
// *************************************************************************************************
const navLinks = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        let topOfSection = section.offsetTop;
        if (scrollY >= topOfSection - 65) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(a => {
        a.classList.remove('active');
        let currentElement = 'nav ul li a[href*= ' + currentSection + ']';
        document.querySelector(currentElement).classList.add('active');
    });
});


// *************************************************************************************************
//                              Region tooltips
// *************************************************************************************************
function displayHotSpotData(region) {

    const countries = document.querySelectorAll('.region-tooltip-content');
    countries.forEach(country => {
        country.style.display = 'none';
    })

    const displayRegion = document.querySelector(region);
    displayRegion.style.display = 'block';
}

// *************************************************************************************************
//                                  Population timeline
// *************************************************************************************************
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
    })

}

// *************************************************************************************************
//                              Select image
// *************************************************************************************************
const images = document.querySelectorAll('.slider-img');
const imageWrapper = document.querySelector('.gallery-image');
images.forEach(image => {
    image.addEventListener('click', e => {
        const img = document.querySelector('#main-img');
        img.src = image.src;
        imageWrapper.style.display = 'flex';
    })
})

// *************************************************************************************************
//                              Image Slider
// *************************************************************************************************
const selectorLeft = document.querySelector('#left-arrow');
const selectorRight = document.querySelector('#right-arrow');
const allImages = document.querySelectorAll('.slider-img');

// Functionality for image carousel right click button.
selectorRight.addEventListener('click', function() {

    // Store last image in variable
    const lastImageSrc = allImages[8].src

    // Loop through all iamges and change src to the next img src.
    for(let i = allImages.length; i > 0; i--) {

        if(i < 9) {
            allImages[i].src = allImages[i - 1].src;
        }   
    }

    // Change first img src to the src of the last img.
    allImages[0].src = lastImageSrc;
})

// Functionality for image carousel Left click button.
selectorLeft.addEventListener('click', function() {

    // Store last image in variable
    const firstImageSrc = allImages[0].src

    // Loop through all iamges and change src to the next img src.
    for(let i = 0; i < allImages.length - 1; i++) {

            allImages[i].src = allImages[i + 1].src;
    }

    // Change last img src to the src of the first img.
    allImages[8].src = firstImageSrc;
})

function openVideo() {
    const video = document.querySelector('.video-wrapper');
    video.style.display = 'flex';
}

function closeVideo() {
    const video = document.querySelector('.video-wrapper');
    video.style.display = 'none';
}

function closeImage() {
    const img = document.querySelector('.gallery-image');
    img.style.display = 'none';
}

