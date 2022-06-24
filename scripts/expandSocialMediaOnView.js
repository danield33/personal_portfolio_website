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
            const sideBarElem = $(`#linkedinSide`);
            console.log(entry.isIntersecting)

            const $appendTo = $('#linkedinAppend')

            if (entry.isIntersecting) {


                // $('#linkedinTemplate').contents().clone().insertAfter('#linkedinAppend')

                // return;
                // console.log(entry, scrollHeight, document.body.offsetHeight, );
                sideBarElem.addClass('invisible')

                const clone = sideBarElem.clone().removeClass('invisible').insertAfter(sideBarElem);

                // console.log($socialElem.offset(), 'offset');

                // console.log(position.top);//
                const boundingClientRect = entry.boundingClientRect;
                console.log(boundingClientRect);

                clone.addClass('position-absolute')
                    .animate({
                        'top': (boundingClientRect.y - $(window).height() / 2 + 30) + 'px',
                        'left': (boundingClientRect.x) + 'px',
                        'height': '124px'
                    }, 500, 'swing', () => {
                        console.log('cb')
                        // $socialElem.parent().css('opacity', '100%').addClass('condenseRight')
                        setTimeout(() => {
                            // clone.remove();
                            $('#linkedinTemplate').contents().clone().addClass('condenseRight').insertAfter('#linkedinAppend')
                            clone.remove();
                        }, 300)
                    })
            } else {
                const clone = sideBarElem.clone()
                    .removeClass('invisible')
                    .addClass('position-absolute')
                clone.insertAfter($appendTo)
                // $appendTo.append(clone);

                    clone.animate({
                        'top': '50%',
                        'left': '0px'
                    }, 1000, 'linear', () => {

                        console.log(1)
                        $appendTo.siblings('div').first().remove();
                        sideBarElem.removeClass('invisible')

                    })


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


    $('#linkedinAppend').each((index, elem) => observer.observe(elem))

}

listenForScroll()


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight + rect.height) || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
