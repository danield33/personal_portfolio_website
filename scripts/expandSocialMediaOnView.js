function listenForScroll() {

    const $social = $('#social-media-sidebar');
    const $linkedin = $('#linkedin-icon');
    const $linkedinSide = $('.linkedin.side');
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            const $socialElem = $(entry.target);
            const position = $socialElem.position();
            const elemID = $socialElem.attr('id');
            const sideBarClassName = elemID.split('-')[0] + ".side";
            const sideBarElem = $(`.${sideBarClassName}`);
            console.log(entry.isIntersecting)

            if(entry.isIntersecting){
                // console.log(entry, scrollHeight, document.body.offsetHeight, );
                const clone = sideBarElem.clone().insertAfter(sideBarElem);

                sideBarElem.addClass('invisible')
                // console.log($socialElem.offset(), 'offset');

                // console.log(position.top);//
                const boundingClientRect = entry.boundingClientRect;
                console.log($socialElem.height());
                clone.addClass('position-absolute')
                    .animate({
                        'top': ($socialElem[0].getBoundingClientRect().y-$(window).height()/2)+'px',
                        'left': (boundingClientRect.x)+'px',
                        // 'height': '124px'
                    }, 500, 'linear', () => {
                        console.log('cb')
                        $socialElem.parent().css('opacity', '100%').addClass('condenseRight')
                        // setTimeout(() => {
                            clone.remove();
                            // $socialElem.parent().addClass('condenseRight').css('opacity', '100%')//.removeClass('invisible')
                        // }, 100)
                    })//.removeClass('invisible');
            }else{
                // return;
                // if(isInViewport($socialElem[0])) return;

                const clone = sideBarElem.clone().removeClass('invisible').addClass('position-absolute').insertAfter($socialElem);
                clone.animate({
                    'top': '50%',
                    'left': '0px'
                }, 1000, 'linear', () => {
                    sideBarElem.removeClass('invisible')
                })
                // sideBarElem.animate({
                //         'top': '50%',
                //         'left': '0px',
                //     }, 100, 'swing', () => {
                //         // console.log('cb')
                //         sideBarElem.removeClass('position-absolute');
                //     })

            }



            // console.log(position)
            // console.log($socialElem)
            // console.log($linkedin.position());
            // console.log($linkedinSide.position(), 'side')

            // const socialElems = $findMeSec.find('condenseRight');



        })


    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });





    $('#findMe i').each((index, elem) => observer.observe(elem))

}

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
