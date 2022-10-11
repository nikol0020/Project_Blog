let elements = document.querySelectorAll('.carousel__container');
let elem = elements[0];
let moveCarousel = elem.animate([
    {left: "-2320px"},
    {left: "0px"}
], {duration: 10000, iterations: Infinity, direction: 'normal', easing: 'linear'});

elem.addEventListener('mouseover', (e) => {
    moveCarousel.pause();
});

elem.addEventListener('mouseout', (e) => {
    moveCarousel.play();
});
