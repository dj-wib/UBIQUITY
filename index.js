const sliderContainer = document.getElementById('slides-container');
console.log(sliderContainer);

const slide = document.querySelector('.slide');
console.log(slide);

const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
console.log(prevButton, nextButton);



// prevButton.addEventListener('click', function () {

//     // get the width of the slide
//     const slideWidth = slide.clientWidth;
//     console.log(slideWidth);
//     // scroll the container to the left minus the width of the slide
//     sliderContainer.scrollLeft -= slideWidth;
//     console.log('prev', sliderContainer.scrollLeft);
// })
// scope = context of the function
// nextButton.addEventListener('click', function () {
//     // get the width of the slide
//     const slideWidth = slide.clientWidth;
//     console.log(slideWidth);
//     // scroll the container to the left
//     sliderContainer.scrollLeft += slideWidth;
//     console.log('next', sliderContainer.scrollLeft);
// })

function scroll(index) {
    const slideWidth = slide.clientWidth;
    sliderContainer.scrollLeft += (slideWidth * index);
}


nextButton.addEventListener('click', () => scroll(1));
prevButton.addEventListener('click', () => scroll(-1));