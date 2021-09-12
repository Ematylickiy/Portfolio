document.addEventListener('scroll', startAnimation)

function startAnimation() {
    if (pageYOffset > 1100) {
        barJS.style.animation = 'loading-2 1.2s linear forwards 1.8s';
        barHTML.style.animation = 'loading-5 1.2s linear forwards 1.8s';
        barCSS.style.animation = 'loading-2 1.2s linear forwards 1.8s';
        allBars.forEach(bar => bar.style.animation = 'loading-1 1.8s linear forwards');
        document.removeEventListener('scroll', startAnimation)
    }
}

const barHTML = document.querySelector('.progress.orange .progress-left .progress-bar');
const barCSS = document.querySelector('.progress.blue .progress-left .progress-bar');
const barJS = document.querySelector('.progress.yellow .progress-left .progress-bar');
const allBars = document.querySelectorAll('.progress .progress-right .progress-bar');


function changeOpacityPhoto() {
    const myPhoto = document.querySelector('.photo');
    myPhoto.classList.add('opacityPhoto');
}
changeOpacityPhoto()
//////////////////////////////////////////////////////////////////////////////////////////////
let scrollUp = ''
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    if (scrollUp < pageYOffset) {
        nav.classList.add('opacityNav')
    }
    else if (scrollUp = 0 || scrollUp > pageYOffset){
        nav.classList.remove('opacityNav')
    }
    scrollUp = pageYOffset;
})


//////////////////////////////////////////////////////////////////////////////////////////////////
function move() {
    if (pageYOffset > 760) {
        let bars = document.querySelectorAll('.bar')
        bars.forEach(bar => {
            let width = 1;
            let id = setInterval(frame, 15);
            function frame() {
                if (width >= 95) {
                    clearInterval(id);
                } else {
                    width++;
                    bar.firstElementChild.style.width = width + '%';
                }
            }
        })
        document.removeEventListener('scroll', move)
    }
}

document.addEventListener('scroll', move)
//////////////////////////////////////////////////////////////////////////////////////////////////
