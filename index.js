function checkScroll() {
    const $navbar = $('#navbar');
    const startScroll = $navbar.height()*5;

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
