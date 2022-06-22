function checkScroll() {
    const $navbar = $('#navbar');
    const startScroll = $navbar.height()*3;

    const classesToAdd = [
            'scrolled',
        ],
        classesToRemove = [
            'mx-5'
        ]

    if ($(window).scrollTop() > startScroll) {
        classesToAdd.forEach(className => $navbar.addClass(className))
        classesToRemove.forEach(className => $navbar.removeClass(className))
        $navbar.find('a').removeClass('text-white').addClass('text-black')
    } else {
        classesToAdd.forEach(className => $navbar.removeClass(className))
        classesToRemove.forEach(className => $navbar.addClass(className))
        $navbar.find('a').removeClass('text-black').addClass('text-white')
    }

}


document.addEventListener('scroll', e => {
    checkScroll();
})

function copyToClipboard(text){
    if(typeof text !== 'string') text = String(text);
    navigator.clipboard.writeText(text).then(() => {
        window.open('https://discordapp.com/users/264521312544751617', '_blank');
    });
}

function initalizePopovers(){
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
}

function discordButtonHover(){
    $('#discordButton').popover({
        trigger: 'manual',
        html: true,
        animation: false
    }).on('mouseenter', function(){
        const that = this;
        console.log(12)
        $(this).popover('show');
        $(".popover").on('mouseleave', function(){
            $(that).popover('hide')
        })
    }).on('mouseleave', function(){
        const that = this;
        setTimeout(function(){
            if(!$(".popover:hover").length){
                $(that).popover("hide");
            }
        }, 300);
    })

}


initalizePopovers();
