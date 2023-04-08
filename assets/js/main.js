// light dark mode

const themeBtn = document.querySelector('.theme');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
  localStorage.getItem('.theme') ? theme = localStorage.getItem('.theme') : null;
  console.log(theme);
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    themeBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#fff" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z" fill="#fff" /> 
                          </svg>`;
  } else {
    themeBtn.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Icon/moon-stars</title>
    <g id="Icon/moon-stars" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M11.9998191,2.24200002 L12.0511777,2.24371847 L12.111,2.25 L12.393,2.25 C13.0386561,2.25 13.3672528,2.99987564 12.9755466,3.47326146 L12.9755466,3.47326146 L12.9035236,3.54942302 C10.5177622,5.7662714 10.0550547,9.37048673 11.8034833,12.1180805 C13.5519119,14.8656743 17.0128542,15.9730789 20.0315236,14.750823 C20.6485862,14.500975 21.2610597,15.1190856 21.0055691,15.7338334 C19.1284773,20.2503903 14.1955346,22.6772426 9.47200392,21.4079838 C4.7484732,20.138725 1.69633088,15.5662024 2.33588164,10.717106 C2.97543239,5.86800967 7.10872934,2.24317975 11.9998191,2.24200002 L11.9998191,2.24200002 Z M10.68,3.848 L10.4827787,3.8821355 C7.03340656,4.52597537 4.29651658,7.32304718 3.82300304,10.9132435 C3.28184471,15.016325 5.86442667,18.8853826 9.86126036,19.9593709 C13.2628209,20.8734034 16.7927254,19.522173 18.7478198,16.7435777 L18.7478198,16.7435777 L18.818,16.638 L18.5207026,16.6816761 C15.5064357,17.0586878 12.4567469,15.7409237 10.6868976,13.1492305 L10.6868976,13.1492305 L10.5379827,12.9233806 C8.74889291,10.1118893 8.85403768,6.56654803 10.6467987,3.89678997 L10.6467987,3.89678997 L10.68,3.848 Z M20,9.25 C20.3796958,9.25 20.693491,9.53215388 20.7431534,9.89822944 L20.75,10 L20.75,10.25 L21,10.25 C21.4142136,10.25 21.75,10.5857864 21.75,11 C21.75,11.3796958 21.4678461,11.693491 21.1017706,11.7431534 L21,11.75 L20.75,11.75 L20.75,12 C20.75,12.4142136 20.4142136,12.75 20,12.75 C19.6203042,12.75 19.306509,12.4678461 19.2568466,12.1017706 L19.25,12 L19.25,11.75 L19,11.75 C18.5857864,11.75 18.25,11.4142136 18.25,11 C18.25,10.6203042 18.5321539,10.306509 18.8982294,10.2568466 L19,10.25 L19.25,10.25 L19.25,10 C19.25,9.58578644 19.5857864,9.25 20,9.25 Z M17,3.25 L17.1017706,3.25684662 C17.4345665,3.30199427 17.6980057,3.56543348 17.7431534,3.89822944 L17.75,4 C17.75,4.64720869 18.2418747,5.1795339 18.8721948,5.24354639 L19,5.25 C19.9583333,5.25 19.9982639,6.62760417 19.1197917,6.74240451 L19,6.75 C18.3527913,6.75 17.8204661,7.24187466 17.7564536,7.87219476 L17.75,8 C17.75,8.95833333 16.3723958,8.99826389 16.2575955,8.11979167 L16.25,8 C16.25,7.35279131 15.7581253,6.8204661 15.1278052,6.75645361 L15,6.75 C14.0416667,6.75 14.0017361,5.37239583 14.8802083,5.25759549 L15,5.25 C15.6472087,5.25 16.1795339,4.75812534 16.2435464,4.12780524 L16.25,4 C16.25,3.62030423 16.5321539,3.30650904 16.8982294,3.25684662 L17,3.25 Z" id="Icon-Color" fill="#fff"></path> </g>
    </svg>`;
  }
  root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  let audio;
  if(theme === 'dark'){
    audio = document.querySelector('.theme-audio--light-on');
    theme = 'light';
  } else {
    audio = document.querySelector('.theme-audio--light-off');
    theme = 'dark';
  }
  audio.currentTime = 0;
  audio.play();
  localStorage.setItem('.theme', `${theme}`);
  loadTheme(theme);
})

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
})

//Fabrx Back To Top JavaScript
const scrollToTopButton = document.querySelector('.fabrx-back-top')
scrollToTopButton.style.display = 'none';
const scrollFunc = () => {
  let y = window.scrollY;
  if(y > 150) {
      scrollToTopButton.style.display = 'block';
    }
    else {
      scrollToTopButton.style.display = 'none';
    }
};
window.addEventListener("scroll", scrollFunc);
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c);
  }
};
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
};

// splide sliders

let splide = new Splide( '.splide', {
  perPage: 2,
  gap: '1rem',
  rewind : true,
  pagination : false,
  breakpoints: {
		768: {
			perPage: 1,
		},
  }
} );

splide.mount();

let splideTwo = new Splide( '#splide-2', {
  perPage: 2,
  gap: '3rem',
  rewind : true,
  pagination : false,
  type   : 'loop',
  padding: '5rem',
  focus    : 'center',
  breakpoints: {
		768: {
			perPage: 1,
      padding: '0',
		},
  }
} );

splideTwo.mount();

// form submit 

let redirect = document.getElementById('redirect');
redirect.value = new URL('Success.html', location).href;
