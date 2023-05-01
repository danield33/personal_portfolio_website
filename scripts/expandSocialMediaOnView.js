function listenForScroll() {

    const $findMe = $('#findMe');
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            console.log($(window).scrollTop(), $findMe.offset().top)
            $('#iconBars').children('div').stop()
            if (entry.isIntersecting && entry.time > 500 && $(window).scrollTop() < $findMe.offset().top) {
                expandElement();
            } else if (!entry.isIntersecting && $(window).scrollTop() < $findMe.offset().top) {
                shrinkElement();
            }

        })


    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0
    });


    $findMe.each((index, elem) => observer.observe(elem));

}

function onShrinkFinish() {
    const $iconBars = $('#iconBars');
    const $socialBars = $iconBars.children('div');

    $iconBars.removeClass('container').addClass('icon-bar');
    $socialBars.css('width', '100%').height('height', '100%');
    $socialBars.attr('class', "")
    $socialBars.children('.icon').removeClass('fa-4x');
    $socialBars.children('[icon-content]').remove();
    // $socialBars.attr('style', "")
    $socialBars.each((inx, obj) => {
        const $obj = $(obj);
        $obj.hover(() => {
            $obj.css('background', 'black')
        }, () => {
            $obj.css('background', "")
        }).click(() => {
            document.getElementById('findMe').scrollIntoView()
        })
    })
}

function shrinkElement() {
    const $socialBars = $('#iconBars').children('div');

    $socialBars.addClass('position-absolute')
        .animate({
            bottom: `${$(window).height() - window.pageYOffset + 50}px`,
            left: '0%',
            width: '0%',
            height: '0%'
        }, 500, 'swing', onShrinkFinish)

}

function onExpandFinish() {
    const $iconBars = $('#iconBars');
    const $socialBars = $iconBars.children('div');
    $socialBars.unbind('mouseenter mouseleave click')
    const $templateContent = $iconBars.children('template');
    const $templateCloneContent = $templateContent.contents().clone();


    $socialBars.removeClass('position-absolute');
    $socialBars.children('.icon').remove();


    $socialBars.each((index, obj) => {
        $(obj).empty().append($($templateCloneContent.children('[icon-content]').parent().get(index)).html())
    })
    $socialBars.animate({
        width: '100%'
    }, 500, 'swing', () => {
        $socialBars.attr('style', "")
    })
    discordButtonHover();

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
            if (once === 0) {
                onExpandFinish()
            }
            once++;
        });

}
// const $iconBars = ;
$('#iconBars').append($('#iconBars').children('template').contents().clone());
listenForScroll();

