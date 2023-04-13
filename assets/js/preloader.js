const preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', () =>  {
    preloaderWrapper.classList.add('fade-out-animation');

    setTimeout(() => {
        preloaderWrapper.getElementsByClassName.display = 'none';
        
    }, 2000);
});