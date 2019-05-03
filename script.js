//Buttons 
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const play = document.getElementById('play');

const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-container img');

//Counter
let counter = 1;
let size = sliderImages[0].clientWidth;


sliderContainer.style.transform = `translateX(${-size * counter}px)`; 

const nextImg = () => {
    if(counter >= sliderImages.length - 1) return;
    sliderContainer.classList.add('slide')
    counter++
    sliderContainer.style.transform = `translateX(${-size * counter}px)`; 
}

const previousImg = () => {
    if (counter <= 0) return;
    sliderContainer.classList.add('slide')
    counter--
    sliderContainer.style.transform = `translateX(${-size * counter}px)`; 
}

//Again starts from beginning when reaching last image
const loopingImages = () => {
    if (sliderImages[counter].id === 'lastClone') {
        sliderContainer.classList.remove('slide');
        counter = sliderImages.length - 2;
        sliderContainer.style.transform = `translateX(${-size * counter}px)`; 
    }
    if (sliderImages[counter].id === 'firstClone') {
        sliderContainer.classList.remove('slide');
        counter = sliderImages.length - counter;
        sliderContainer.style.transform = `translateX(${-size * counter}px)`; 
    }
}

//Displays the play button
const popPlayBtn = () => {
    play.style.transform = 'scale(1.2)';
}

//Auto slide
let inter;
inter =  setInterval(() => {
    nextImg()
}, 2500)

//Auto slide on play
const startAutoPlay = () => {
   inter = setInterval(() => {
        nextImg()
    }, 2500)
    play.style.transform = 'scale(0)';
}

const stopAutoPlay = () => {
    clearInterval(inter)
}



//Event Listeners
nextBtn.addEventListener('click', nextImg);
nextBtn.addEventListener('click', popPlayBtn);
nextBtn.addEventListener('click', stopAutoPlay);
prevBtn.addEventListener('click', previousImg);
prevBtn.addEventListener('click', popPlayBtn);
prevBtn.addEventListener('click', stopAutoPlay);
play.addEventListener('click', startAutoPlay);
sliderContainer.addEventListener('transitionend', loopingImages)