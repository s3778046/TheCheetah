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

    animateHeadings()
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

   animateHeadings()
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



function animateHeadings() {
    const tl = new TimelineLite();

    tl.from('.headings', .5, {
        x: '-900',
        y: '-300'
    })
}


// const tl = new TimelineLite();

// tl.from('.part-two', 1, {
//     y: '-900',
// })
// .from('.front', 0.5, {
//     rotationY: "60deg"
// }, "-=0.2")
// .from('.home-item h1', 0.5, {
//         x: '-900',
// })
// .from('.play', 0.5, {
//     y: '-900',
// })

