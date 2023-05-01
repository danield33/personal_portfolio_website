/**
 * Monitors the elements of #findMe to check if the user has scrolled into and out of the findMe div.
 * When the user scrolls into it, the social media bar animates into a relative element with buttons on it
 * When the user scrolls out of it, the buttons animate back into fixed elements on the left of the screen.
 * It will stay as a button when the user is below the #findMe div but when the user goes back up, it will animate into a fixed element
 */
function listenForScroll() {

    const $findMe = $('#findMe');
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            console.log($(window).scrollTop(), $findMe.offset().top)
            $('#iconBars').children('div').stop()
            if (entry.isIntersecting && entry.time > 500 && $(window).scrollTop() < $findMe.offset().top) {//check if user is above or below the div
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

/**
 * "Shrinks" the media buttons back into fixed social media icons by adding and removing attributes of the elements.
 */
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

/**
 * Starts the shrinking animation for the media buttons shrink back into the fixed form
 */
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

/**
 * Adds the appropriate classes to the expanded social media buttons when it is done animating
 */
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

}

/**
 * Starts to expand the social media icons when the view comes into place
 */
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

