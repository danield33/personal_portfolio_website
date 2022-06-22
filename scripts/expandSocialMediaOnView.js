function listenForScroll() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            console.log(entry);
            const $findMeSec = $(entry.target);

            $findMeSec.find

            // const $target = $(entry.target);
            // if (entry.isIntersecting && !$target.hasClass('start')) {
            //     $target.css('visibility', 'visible').addClass('start')
            //     observer.unobserve(entry.target);
            // }
        })


    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    observer.observe($('#findMe')[0])

}


listenForScroll()
