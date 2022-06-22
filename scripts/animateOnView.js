function toggleFadeInOnScroll(){

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            const $target = $(entry.target);
            if(entry.isIntersecting && !$target.hasClass('start')){
                $target.css('visibility', 'visible').addClass('start')
                observer.unobserve(entry.target);
            }
        })


    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    $('.fadeIn').each((index, elem) => {
        observer.observe(elem)
    })

}


toggleFadeInOnScroll()
