function listenForScroll() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            console.log(entry);
            const $findMeSec = $(entry.target);

            const socialElems = $findMeSec.find('condenseRight');



        })


    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    $('#social-media-sidebar')

    observer.observe($('#findMe')[0])

}


listenForScroll()
