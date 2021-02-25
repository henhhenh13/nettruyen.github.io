const wapperSlide = document.querySelector('.wapper-top__slides')
const wapperSlideeee = document.getElementsByClassName('wapper-top__slides')
const btnLeft = document.querySelector('.wapper-top__left')
const btnRight = document.querySelector('.wapper-top__right')

var items = wapperSlide.querySelectorAll('.wapper-slides__items')
var i = 0;
var j = wapperSlide.querySelector('.wapper-slides__items').offsetWidth;
var maxRight = items.length - 4;


btnLeft.onclick = function(click) {
    i--;
    y = -j * i;
    wapperSlide.style.transform = `translate3d(${y}px, 0px, 0px)`;
    if ( i <= 0) {
        i = maxRight - 1;
        y = -j * i;
        wapperSlide.style.transform = `translate3d(${y}px, 0px, 0px)`;
    }
}


btnRight.onclick = function(click) {
    i++;
    if(i < maxRight) {
        y = j * i;
        wapperSlide.style.transform = `translate3d(-${y}px, 0px, 0px)`;
    } else if(i >= maxRight){
        i = 1;
        y = j * i;
        wapperSlide.style.transform = `translate3d(-${y}px, 0px, 0px)`; 
    }
}