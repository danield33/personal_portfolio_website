$(document).ready(function() {
    var socialMediaBar = $('.social-media-bar');
    var socialMediaButtons = socialMediaBar.find('a');
    var expandSection = $('.expand');
    var isExpanded = false;

    $('.expand-button').click(function() {
        if (!isExpanded) {
            socialMediaBar.animate({
                'left': expandSection.offset().left + 'px',
                'top': expandSection.offset().top - socialMediaBar.outerHeight() + 'px'
            }, 500, function() {
                socialMediaBar.css('position', 'relative');
                socialMediaButtons.addClass('expanded').appendTo(expandSection);
                $('html, body').animate({
                    'height': expandSection.outerHeight() + socialMediaBar.outerHeight() + 20
                }, 500);
            });
            isExpanded = true;
        } else {
            socialMediaButtons.removeClass('expanded');
            socialMediaBar.animate({
                'left': 'auto',
                'right': '10px',
                'top': '50%'
            }, 500, function() {
                socialMediaBar.css('position', 'fixed');
                socialMediaButtons.appendTo(socialMediaBar);
                $('html, body').animate({
                    'height': $('html').css('height')
                }, 500, function() {
                    $('html, body').css('height', 'auto');
                });
            });
            isExpanded = false;
        }
    });
});
