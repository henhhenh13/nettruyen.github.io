var btns = document.querySelectorAll('.body-infos__box-title')

btns.forEach(function(btn) {
    btn.onmousemove = function(on) {
        var about = btn.parentElement.querySelector('.body-infos__about');
        var x = on.clientX, y = on.clientY;
        about.style.left = (x + 20)+'px';
        about.style.top = (y + 20)+'px';
        
    }  
})