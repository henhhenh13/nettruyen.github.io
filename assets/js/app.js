const headerBottomLink = document.querySelectorAll('.header-bottom__item');


headerBottomLink.forEach(function(link) {
    link.onmouseover = function() {
        headerBottomLink.forEach(function(link) {
            link.querySelector('.header-bottom__link').classList.remove('active')
            link.querySelector('.header-bottom__link').classList.remove('hover')
        });
        link.querySelector('.header-bottom__link').classList.add('hover');
    }
    link.onmouseout = function() {
        link.querySelector('.header-bottom__link').classList.remove('hover')
        const headerBottomLinkFirst = document.querySelector('.header-bottom__link');
        headerBottomLinkFirst.classList.add('active')
    }

});


const headerFixed = document.querySelector('.header__bottom');
const croll = document.querySelector('.croll');
window.addEventListener('scroll', function() {
    headerFixed.classList.toggle('stuck', window.scrollY > 0);
    croll.classList.toggle('onCroll', window.scrollY > 0);
});

croll.addEventListener('click', function() {
    window.scrollTo(0, 0);
})


const eleParrent = document.querySelector('.header-bottom__downlist');
const text = document.querySelector('.header-bottom__downlist .header-bottom__info p');
const lis = document.querySelectorAll('.header-bottom__downlist ul li');

lis.forEach(function(li) {
    li.onmouseover = function() {
        text.innerHTML = li.getAttribute('data-title');
    }
})


const onNav = document.querySelector('.on-nav-mobile');

onNav.onclick = function() {
    const navMobile = document.querySelector('.nav-mobile');
    navMobile.classList.toggle('on');
    const body = document.querySelector('body');
    body.classList.toggle('off');
    onNav.classList.toggle('fa-times');
}















