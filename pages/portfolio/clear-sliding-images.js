function clearImages(sectionID) {

    const section = $(`#${sectionID}`);
    console.log(section)

    const $image = $('#image-1');

    const imageHeight = $image.height();
    const imageWidth = $image.width();

    const height = ($(window).height() - imageHeight) / 2;
    const width = ($(window).width() - imageWidth) / 2;
    $image.addClass('position-fixed')
    $image.removeClass("separator-box")
        .addClass("flip-card")
        .css({
            top: height + 'px',
            left: width + 'px'
        })


}