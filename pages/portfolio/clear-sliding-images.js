function showModal(sectionID) {

    const section = $(`#${sectionID}`);

    const element = $(".layered-image");
    const box = $(`#test-box`);

    $(element[0]).addClass("freeze");
    box.addClass('expand');


    const [distanceX, distanceY] = getTranslationToCenterOfScreen(box[0]);
    const scale = getScaleFactor(section, box);

    box.css({
        'transform': `matrix(3.13, 0.736, -3.86, 4.97, 0, 0) translate(${distanceX}px, ${distanceY}px) rotateY(180deg)  scale(${scale})`,
    }).one('transitionend webkitTransitionEnd oTransitionEnd', () => {


    })
    $(element[0]).css({
        'z-index': 2 //moves it above text content
    })

    setTimeout(() => {

    }, 1000);

}

function getTranslationToCenterOfScreen(smallerElement) {
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
    const childHeight = child.getBoundingClientRect().height;

// calculate the scale factor for the child element
    const scaleX = parentWidth / childWidth;
    const scaleY = parentHeight / childHeight;
    return Math.max(scaleX, scaleY);
}