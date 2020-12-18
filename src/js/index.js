document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var slides = $('.slide')
var sliderLine = $('#slider-line')
const animationDurationBreak = 1900
const animationDuration = 500

const animateIntro = () => {
    setTimeout(function(){ 
        slides.eq(0).animate({left: '-3000px'}, animationDuration, () => {
            slides.eq(0).css('left', '1920px')
        });
        sliderLine.animate({backgroundColor: '#21BCEC'}, animationDuration)
        slides.eq(1).animate({ left: (slides.eq(1).parent().width()-slides.eq(1).width())/2+"px"}, animationDuration)
        setTimeout(function(){
            slides.eq(1).animate({left: '-3000px'}, animationDuration, () => {
                slides.eq(1).css('left', '1920px')
            });
            sliderLine.animate({backgroundColor: '#ee2089'}, animationDuration)
            slides.eq(2).animate({ left: (slides.eq(2).parent().width()-slides.eq(2).width())/2+"px" }, animationDuration)
            setTimeout(function(){ 
                slides.eq(2).animate({left: '-3000px'}, animationDuration, () => {
                    slides.eq(2).css('left', '1920px')
                });
                sliderLine.animate({backgroundColor: '#ffcf08'}, animationDuration)
                slides.eq(0).animate({ left: (slides.eq(0).parent().width()-slides.eq(0).width())/2+'px' }, animationDuration)
                animateIntro()
            }, animationDurationBreak);
        }, animationDurationBreak);
    }, animationDurationBreak);
}

const animateShow = () => {

}

Reveal.on( 'slidechanged', event => {
    switch(event.indexh){
        case 0:
            sliderLine.animate({backgroundColor: '#ffcf08'}, animationDuration)
            break;
        case 1:
            sliderLine.animate({backgroundColor: '#21BCEC'}, animationDuration)
            break;
        case 2:
            sliderLine.animate({backgroundColor: '#ee2089'}, animationDuration)
            break;
        default:
            sliderLine.animate({backgroundColor: '#ffcf08'}, animationDuration)
    }
});

$(document).ready(() => {
    const config  = {
        autoSlide: 2000,
        controls: false,
        progress: false,
        keyboard: false,
        embedded: true,
        touch: false,
        disableLayout: true,
        backgroundTransition: 'slide',
        pause: false,
        autoSlideStoppable: false,
        loop: true,
        // autoAnimateEasing: 'ease-out',
        // autoAnimateDuration: 0.8,
        // autoAnimateUnmatched: false,
    }
    Reveal.initialize(config);
})