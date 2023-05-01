$(document).ready(function() {

    // Set up variables
    var windowHeight = $(window).height();
    const $timeline = $('#timeline');
    var timelineHeight = $timeline.height();
    var timelineTop = $timeline.offset().top;
    var branchDelay = 0;

    // Attach scroll event listener
    $(window).scroll(function(scroll) {

        // Calculate timeline progress
        const scrollTop = $(window).scrollTop();
        const scrollBottom = scrollTop + windowHeight;
        const timelineProgress = (scrollBottom - timelineTop) / timelineHeight;

    });
})


