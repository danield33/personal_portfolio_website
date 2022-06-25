function listenForScroll() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            $('#linkedin').stop()
            if(entry.isIntersecting && entry.time > 500){
                expandElement();
            }else if(!entry.isIntersecting){
                shrinkElement();
            }

        })


    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0
    });


    $('#findMe').each((index, elem) => observer.observe(elem))

}

function shrinkElement() {
    const $linkedin = $('#linkedin');

    $linkedin.addClass('position-absolute')
        .animate({
            bottom: `${$(window).height() - window.pageYOffset + 50}px`,
            left: '0%',
            width: '0%',
            height: '0%'
        }, 500, 'swing', () => {
            $('#iconBars').removeClass('container').addClass('icon-bar')
            $linkedin.css('width', '100%').height('height', '100%');
            $linkedin[0].className = "";
            $linkedin.children('.linkedin').removeClass('fa-4x')
            $linkedin.children('#linkedinContent').remove();
        })


}

function expandElement() {


    const $linkedinTemplate = $('#linkedinTemplate');
    const $linkedinCloneContent = $linkedinTemplate.contents().clone();
    const $linkedin = $('#linkedin');
    const $iconBars = $('#iconBars');
    $iconBars.removeClass('icon-bar').addClass('container')
    const boundingClientRect = $iconBars[0].getBoundingClientRect();

    $linkedin[0].className = $linkedinCloneContent[1].className

    $linkedin.addClass('position-absolute')
        .css('width', '0%')
        .animate({
            top: `${$(window).height() - boundingClientRect.y+500}px`,
            left: `${boundingClientRect.x}px`,
            height: '100%',
            width: '80%'
        }, 500, 'swing', () => {

            $linkedin.removeClass('position-absolute');
            $linkedin.children('i.linkedin').remove();

            $linkedin.append($linkedinCloneContent.children('#linkedinContent').parent().html());
            $linkedin.animate({
                width: '100%'
            }, 500, 'swing', () => {
                $linkedin[0].style = undefined
            })

        })

}

$('#iconBars').append($('#iconBars').children('template').contents().clone())
// listenForScroll();
// setTimeout(() => {
//     shrinkElement()
// }, 1000)


// let time = 1500;
// setTimeout(() => {
//     shrinkElement()
//     setTimeout(() => {
//         expandElement()
//         setTimeout(() => {
//             shrinkElement();
//             setTimeout(() => {
//                 expandElement();
//             }, time);
//         }, time);
//
//     }, time);
// }, time)

// listenForScroll()


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight + rect.height) || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
