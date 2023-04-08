import { gsap } from "../../node_modules/gsap/all.js";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";
import {EasePack} from "../../node_modules/gsap/EasePack.js";
import { ScrollToPlugin } from "../../node_modules/gsap/ScrollToPlugin.js";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(gsap);
gsap.registerEase(EasePack);
gsap.registerPlugin(ScrollToPlugin);



let navLinks = document.querySelectorAll('nav a');
let imgsNav = document.querySelectorAll('navbar-brand img');
let buttonHeader = document.querySelectorAll('.fabrx-header-links btn');
let title = document.querySelector('.display-4');
let heroPara = document.querySelector('.hero-para');
let buttonHeader2 = document.querySelectorAll('.btn-resume');

window.addEventListener('load', revealAnim);

function revealAnim(){
    gsap.config({
        nullTargetWarn: false
      });

    const TLFADE = gsap.timeline();

    TLFADE 
    .from(navLinks, {autoAlpha:0, y:-50, duration: 0.8, stagger: 0.1}, '-=0.2')
    .from(imgsNav, {autoAlpha: 0, y: -50, duration: 0.8})
    .from(buttonHeader, {autoAlpha: 0, y: -50, duration: 0.8, stagger: 0.1}, '-=0.2')
    .from(title, {autoAlpha: 0, y: -50, duration: 0.8, delay: 0.1}, '-=0.2')
    .from(heroPara, {autoAlpha: 0, y: -50, duration: 0.8, delay: 0.1}, '-=0.2')
    .from(buttonHeader2, {autoAlpha: 0, y: -50, delay: 0.1}, '-=0.2')

}

// about section

let aboutInfo = document.querySelectorAll('.about-section .about-info-animation');
let aboutImage = document.querySelectorAll('.about-section .portfolio-image-animation');


for(let i=0; i < aboutInfo.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = -movement; // even rows
    };
    gsap.from(aboutInfo[i], {
        scrollTrigger:{trigger:aboutInfo[i], start:'top 85%', end:'bottom 95%', scrub:1}, 
        x:movement, opacity:0
    });
};

for(let i=0; i < aboutImage.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = -movement; // even rows
    };
    gsap.from(aboutImage[i], {
        scrollTrigger:{trigger:aboutImage[i], start:'top 85%', end:'bottom 95%', scrub:1}, 
        x:-movement, opacity:0
    });
};



    // project section 1 

let projectsTitle1 = document.querySelector('.projects-title-1');
let splideProject1 = document.querySelector('#splide-projects-one');

ScrollTrigger.matchMedia({
    '(min-width: 768px)': function() {
        gsap.from(projectsTitle1, {
            duration: 2, 
            y: -50,
            opacity: 0,
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.project-section',
                start: "top 50%",
                end: "bottom"
            },
        })
        
        gsap.from(splideProject1, {
            duration: 2,
            y: 50,
            opacity: 0,
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.project-section',
                start: "top 50%",
                end: "bottom"
            },
        })
    },
    '(max-width: 576px)':function() {
        gsap.from(projectsTitle1, {
            duration: 2, 
            x: -100,
            opacity: 0,
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.project-section',
                start: "top 50%",
                end: "bottom"            
            },
        })
        
        gsap.from(splideProject1, {
            duration: 2,
            x: 100,
            opacity: 0,
            ease: "sine.in",
            delay: 2,
        
            scrollTrigger: {
                trigger: '.project-section',
                start: "top 50%",
                end: "bottom"
            },
        })
    }
    });

let projectsTitle2 = document.querySelector('.projects-title-2');
let splideProject2 = document.querySelector('#splide-projects-two');

ScrollTrigger.matchMedia({
    '(min-width: 768px)': function() {
        gsap.from(projectsTitle2, {
            duration: 2, 
            y: -50,
            opacity: 0,
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.project-section-2',
                start: "top 50%",
                end: "bottom"
            },
        })
        
        gsap.from(splideProject2, {
            duration: 2,
            y: 50,
            opacity: 0,
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.project-section-2',
                start: "top 50%",
                end: "bottom"
            },
        })
    },
    '(max-width: 576px)':function() {
        gsap.from(projectsTitle2, {
            duration: 2, 
            x: -100,
            opacity: 0,
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.project-section-2',
                start: "top 50%",
                end: "bottom"
            },
        })
        
        gsap.from(splideProject2, {
            duration: 2,
            x: 100,
            opacity: 0,
            ease: "sine.in",
            delay: 2,
        
            scrollTrigger: {
                trigger: '.project-section-2',
                start: "top 50%",
                end: "bottom"
            },
        })
    }
    });

// Skill info

let skillsInfo1 = document.querySelectorAll('.skills-section .skills-animation');
let skillsInfo2 = document.querySelectorAll('.skills-section .card-body');

for(let i=0; i < skillsInfo1.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = -movement; // even rows
    };
    gsap.from(skillsInfo1[i], {
        scrollTrigger:{trigger:skillsInfo2[i], start:'top 85%', end:'bottom 80%', scrub:1}, 
        x:-movement, opacity:0
    });
};

for(let i=0; i < skillsInfo2.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = -movement; // even rows
    };
    gsap.from(skillsInfo2[i], {
        scrollTrigger:{trigger:skillsInfo2[i], start:'top 85%', end:'bottom 80%', scrub:1}, 
        x:movement, opacity:0
    });
};
        
// Certificates section

let certificatesTitle = document.querySelectorAll('.certificates-section .certificates-title-animation');
let certificates1 = document.querySelectorAll('.certificates-section .certificates-animation-1');
let certificates2 = document.querySelectorAll('.certificates-section .certificates-animation-2');

for(let i=0; i < certificatesTitle.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = movement; // even rows
    };
    gsap.from(certificatesTitle[i], {
        scrollTrigger:{trigger:certificatesTitle[i], start:'top 85%', end:'bottom 80%', scrub:1}, 
        x:movement, opacity:0
    });
};

for(let i=0; i < certificates1.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = -movement; // even rows
    };
    gsap.from(certificates1[i], {
        scrollTrigger:{trigger:certificates1[i], start:'top 85%', end:'bottom 80%', scrub:1}, 
        x:movement, opacity:0
    });
};

for(let i=0; i < certificates2.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = movement; // even rows
    };
    gsap.from(certificates2[i], {
        scrollTrigger:{trigger:certificates2[i], start:'top 85%', end:'bottom 92%', scrub:1}, 
        x:movement, opacity:0
    });
};

// Contact Form 

const contactHeadingAnimation = document.querySelectorAll('.contact-heading-animation');
const contactFormAnimation = document.querySelectorAll('.contact-form-animation');

for(let i=0; i < contactHeadingAnimation.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = -movement; // even rows
    };
    gsap.from(contactHeadingAnimation[i], {
        scrollTrigger:{trigger:contactHeadingAnimation[i], start:'top 75%', end:'bottom 80%', scrub:1}, 
        x:movement, opacity:0
    });
};

for(let i=0; i < contactFormAnimation.length; i++) {
    let movement = '100'; // odd rows
    if( i % 2 == 0 ) {
        movement = -movement; // even rows
    };
    gsap.from(contactFormAnimation[i], {
        scrollTrigger:{trigger:contactFormAnimation[i], start:'top 85%', end:'bottom 92%', scrub:1}, 
        x:-movement, opacity:0
    });
};

// Call To Action 

const ctaAnimation = document.querySelector('.cta-box');

ScrollTrigger.matchMedia({
    '(min-width: 768px)': function() {
        gsap.from(ctaAnimation, {
            duration: 1, 
            y: 60, 
            transformOrigin:"center",
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.cta-section',
                start: "top 50%",
                end: "bottom"
            },
        })
    },
    '(max-width: 576px)':function() {
        gsap.from(ctaAnimation, {
            duration: 1, 
            y: 60,
            transformOrigin:"center",
            ease: "sine.in",
        
            scrollTrigger: {
                trigger: '.cta-section',
                start: "top 50%",
                end: "bottom"
            },
        })
    }
    });






