function showModal(sectionID) {

    const section = $(`#${sectionID}`);

    const element = $(".layered-image");
    const allBoxes = $(`.separator-box`);

    const windowHeight = $(window).height();
    const windowWidth = $(window).width();
    const visibleBox = allBoxes.filter(function() {
        const rect = this.getBoundingClientRect();
        const visibleHeight = windowHeight - rect.top;
        const visibleWidth = windowWidth - rect.left;

        return (
            visibleHeight > 0 &&
            visibleWidth > 0 &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= windowHeight &&
            rect.left <= windowWidth
        );
    });

    let box;
    if(visibleBox.length === 0){
        box = $(allBoxes[0]);
    }else box = $(visibleBox[0]);
    
    element.addClass("freeze");
    box.addClass('expand');



    const [distanceX, distanceY] = getTranslationToCenterOfScreen(box[0]);
    const [scaleX, scaleY] = getScaleFactor(section, box);

    // console.log(scaleX, scaleY);
    box.parent().parent().css({//make parent z index bigger incase it chooses bottom layer's separator box
        'z-index': 2,
    })
    box.css({
        'z-index': 2,
        'transform': `matrix(3.13, 0.736, -3.86, 4.97, 0, 0) translate(${distanceX-58}px, ${distanceY-47}px) rotateY(180deg)`,
        width: section.width(),
        height: section.height()
    }).one('transitionend webkitTransitionEnd oTransitionEnd', () => {
        /*
        to rest:
        box.css({transform: 'none'})
         */
        // console.log(distanceX);
        // console.log(getTranslationToCenterOfScreen(box[0]))

    })

    $(element[0]).css({
        'z-index': 2 //moves it above text content
    })

    setTimeout(() => {



    }, 1000);

}

function getTranslationToCenterOfBigElement(smallerElement, biggerElement) {
    const rect = smallerElement.getBoundingClientRect();

// Calculate the distance to the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    //calculate distance to move
    const distanceX = centerX - rect.left - rect.width / 2;
    const distanceY = centerY - rect.top - rect.height / 2;
    return [distanceX, distanceY];
}

function getScaleFactor(biggerElement, smallerElement) {
    const parent = biggerElement[0];
    const child = smallerElement[0];

// get the width and height of the parent and child elements
    const parentWidth = parent.getBoundingClientRect().width;
    const parentHeight = parent.getBoundingClientRect().height;
    const childWidth = child.getBoundingClientRect().width;
    console.log(childWidth, smallerElement.width())
    const childHeight = child.getBoundingClientRect().height;

    // console.log(parentWidth, childWidth, 'width');
    // console.log(parentHeight, childHeight, 'height');
// calculate the scale factor for the child element
    const scaleX = parentWidth / childWidth;
    const scaleY = parentHeight / childHeight;
    return [scaleX, scaleY];
}