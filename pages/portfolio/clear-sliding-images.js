function showModal(sectionID) {

    const section = $(`#${sectionID}`);

    const element = document.getElementById("parent-test-box");
    const box = $(`#test-box`);

    $(element).addClass("freeze");
    box.addClass('expand');
    const rect = box[0].getBoundingClientRect();

// Calculate the distance to the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    //calculate distance to move
    const distanceX = centerX - rect.left - rect.width / 2;
    const distanceY = centerY - rect.top - rect.height / 2;

    const parent = section[0];
    const child = box[0];

// get the width and height of the parent and child elements
    const parentWidth = parent.getBoundingClientRect().width;
    const parentHeight = parent.getBoundingClientRect().height;
    const childWidth = child.getBoundingClientRect().width;
    const childHeight = child.getBoundingClientRect().height;

// calculate the scale factor for the child element
    const scaleX = parentWidth / childWidth;
    const scaleY = parentHeight / childHeight;
    const scale = Math.max(scaleX, scaleY);


    box.css({
        'transform': `matrix(3.13, 0.736, -3.86, 4.97, 0, 0) translate(${distanceX}px, ${distanceY}px) rotateY(180deg)  scale(${scale})`,
    }).on('animationend', () => {
        console.log(23)
    })
    $(element).css({
        'z-index': 2 //moves it above text content
    })
}
).addEventListener('click', getTranslateX);