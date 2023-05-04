jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
}

function clearImages(sectionID) {

    const section = $(`#${sectionID}`);
    console.log(section)

    const $image = $('#flip-test');
    const layer1 = $('#layer1');

    const clone = $image.clone();

    // $('body').append(clone);
    const origOff = $image.offset();
    const leftPos = $image[0].getBoundingClientRect().left  + $(section)['scrollLeft']();
    const topPos = $image[0].getBoundingClientRect().top    + $(section)['scrollTop']();
    console.log(section[0].getBoundingClientRect(), section.position(), $('body').height())
    $image//.offset({top: origOff.top-177, left: leftPos-556})
        .css({
            transform: 'matrix(3.13, 0.736, -3.86, 4.97, 0, 0)',

            // transform: layer1.css('transform'),
            // position: 'absolute',
            // top: 1500, //+ layer1.position().top,
            // left: $image.position().left + 'px',
            // width: $image.outerWidth(),
            // height: $image.outerHeight(),
            // position: 'absolute',
            // background: 'red',
            // "z-index": '40'
        })
    $image.center($('layer1'));


    console.log(clone)

    // const imageHeight = $image.height();
    // const imageWidth = $image.width();
    //
    // const height = ($(window).height() - imageHeight) / 2;
    // const width = ($(window).width() - imageWidth) / 2;
    //
    // $image.addClass('turn-card').on('animationend', () => {
    //     console.log(1);
    //     $image.removeClass('turn-card');
    //
    // })
        // .animate({
        //     transform: `rotate(180deg)`
        // })
    // $image.addClass('position-fixed')
    // $image.removeClass("separator-box")
    //     .addClass("flip-card")
    //     .css({
    //         top: height + 'px',
    //         left: width + 'px'
    //     })
4

}
// clearImages('dustie')