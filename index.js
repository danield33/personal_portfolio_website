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

function toggleContainerClass() {
    var myDiv = document.getElementById('iconBars');
    if (window.innerWidth >= 768) { // Greater than or equal to md (768px)
        myDiv.classList.add('container');
    } else { // Less than sm (768px)
        myDiv.classList.remove('container');
    }
}

// Call the function on page load and when the window is resized
toggleContainerClass();
window.addEventListener('resize', toggleContainerClass);


document.addEventListener('scroll', e => {
    checkScroll();
})