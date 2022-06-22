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
