function listenForScroll() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            console.log('see')
            $('#iconBars').children('div').stop()
            if (entry.isIntersecting && entry.time > 500) {
                expandElement();
            } else if (!entry.isIntersecting) {
                shrinkElement();
            }

        })


    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0
    });


    $('#findMe').each((index, elem) => observer.observe(elem));

}

function shrinkElement() {
    const $socialBars = $('#iconBars').children('div');

    $socialBars.addClass('position-absolute')
        .animate({
            bottom: `${$(window).height() - window.pageYOffset + 50}px`,
            left: '0%',
            width: '0%',
            height: '0%'
        }, 500, 'swing', () => {
            $('#iconBars').removeClass('container').addClass('icon-bar');
            $socialBars.css('width', '100%').height('height', '100%');
            $socialBars.attr('class', "")
            $socialBars.children('.icon').removeClass('fa-4x');
            $socialBars.children('[icon-content]').remove();
        })


}

function expandElement() {

    const $iconBars = $('#iconBars');

    const $templateContent = $iconBars.children('template');
    const $templateCloneContent = $templateContent.contents().clone();
    const $socialBars = $iconBars.children('div');
    $iconBars.removeClass('icon-bar').addClass('container');
    const boundingClientRect = $iconBars[0].getBoundingClientRect();

    $socialBars.attr('class', $templateCloneContent[1].className);

    let once = 0;
    $socialBars.addClass('position-absolute')
        .css('width', '0%')
        .animate({
            top: `${$(window).height() - boundingClientRect.y + 500}px`,
            left: `${boundingClientRect.x}px`,
            height: '100%',
            width: '80%'
        }, 500, 'swing', () => {

            if (once > 0) return;

            $socialBars.removeClass('position-absolute');
            $socialBars.children('.icon').remove();


            $socialBars.each((index, obj) => {
                $(obj).append($($templateCloneContent.children('[icon-content]').parent().get(index)).html())
            })
            once++;
            $socialBars.animate({
                width: '100%'
            }, 500, 'swing', () => {
                $socialBars.attr('style', "")
            })

        });

}

$('#iconBars').append($('#iconBars').children('template').contents().clone());
listenForScroll();

