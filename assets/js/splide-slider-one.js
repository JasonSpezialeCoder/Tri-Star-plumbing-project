
// splide one js 

let splide = new Splide( '#splide-projects-one', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    arrows: true,
    paginationDirection: false,
    pagination: false,
    gap: 30,
    
    breakpoints: {
      600: {
              perPage: 1,
          },
      1000: {
              perPage: 2,
          },
          900: {
              perPage: 2,
          },
    },
  } );
  
  
  splide.mount();

  // splide two js

  let splideTwo = new Splide( '#splide-projects-two', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    arrows: true,
    paginationDirection: false,
    pagination: false,
    gap: 30,
    
    breakpoints: {
      600: {
              perPage: 1,
          },
      1000: {
              perPage: 2,
          },
          900: {
              perPage: 2,
          },
    },
  } );
  
  
  splideTwo.mount();
