function listenForScroll() {

    const $social = $('#social-media-sidebar');
    const $linkedin = $('#linkedin-icon');
    const $linkedinSide = $('.linkedin.side');
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if(!entry.isIntersecting) return

            console.log(entry, document.body.scrollHeight, document.body.offsetHeight, );

            const $socialElem = $(entry.target);
            const position = $socialElem.position();
            const elemID = $socialElem.attr('id');
            const sideBarClassName = elemID.split('-')[0] + ".side";
            const sideBarElem = $(`.${sideBarClassName}`);
            console.log($socialElem[0].getBoundingClientRect());

            console.log(position.top);
            sideBarElem.addClass('position-absolute')
                .animate({
                'top': ($socialElem[0].getBoundingClientRect().y-$(window).height()/2)+'px',
                'left': entry.boundingClientRect.x+'px',
            }, 2000, 'swing', () => {
                // console.log('cb')
            });

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

listenForScroll()
