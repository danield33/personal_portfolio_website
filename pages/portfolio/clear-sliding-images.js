const expandedBoxes = {}

function resetCss(sectionID){
    const section = $(`#${sectionID}`);
    const box = expandedBoxes[sectionID];
    const sectionSplitter = section.find('.spacer');
    const modal = sectionSplitter.next();


    box.show().css({//remove transformations
        transform: 'none',
        'z-index': 0
    })


    section.css({//make background default color
        background: '#36393F'
    });
    modal.remove();
}

function hideModal(sectionID) {

    const section = $(`#${sectionID}`);
    const box = expandedBoxes[sectionID];
    const sectionSplitter = section.find('.spacer');
    const modal = sectionSplitter.next();


    box.show().css({//remove transformations
        transform: 'none',
        'z-index': 0,
        '--height': ''
    })


    section.css({//make background default color
        background: '#36393F'
    });
    modal.css('visibility', 'hidden');

    box.parent().parent().css({//reset z-index
        'z-index': '',
    }).removeClass('freeze')
    .one('transitionend webkitTransitionEnd oTransitionEnd', () => {//need to repeat the css modifications twice b/c of css transitions removing changes
        box.find('div').remove();

        box.show().css({//remove transformations
            transform: 'none',
            'z-index': 0,
            '--height': ''
        }).parent().parent().css({
            'z-index': 0
        })

        section.css({//make background default color
            background: '#36393F'
        });
        sectionSplitter.next().remove();

    });



    delete expandedBoxes[sectionID];

}

function showModal(sectionID) {

    const section = $(`#${sectionID}`);

    const element = $(".layered-image");
    const sectionSplitter = section.find('.spacer');

    const box = getVisibleBox();

    const layeredImage = box.parent().parent();

    if (!expandedBoxes[sectionID])
        expandedBoxes[sectionID] = box;
    else return;

    layeredImage.addClass("freeze").css({//make parent z index bigger incase it chooses bottom layer's separator box
        'z-index': 2,
    })

    const template = section.find('template')

    const [distanceX, distanceY] = getTranslationToCenterOfBigElement(box, section);
    const [scaleX, scaleY] = getScaleFactor(section, box);
    box.append(template.html());


    box.css({
        'z-index': 2,
        '--height': '500px',
        'transform': `matrix(3.13, 0.736, -3.86, 4.97, 0, 0)
         translate(${distanceX}px, ${distanceY + sectionSplitter.height()}px) rotateY(180deg) scaleY(${200}%)`,
    }).one('transitionend webkitTransitionEnd oTransitionEnd', () => {

        const element = $(template.clone().html()).insertAfter(sectionSplitter);

        element.removeClass('flipped')
            .css({
                position: 'relative',
                'z-index': 10,
                'background': '#2a2c30',
                'width': '100%',
            });
        section.css({
            'background': '#2a2c30'
        });
        box.hide();
        layeredImage.removeClass('freeze');
    })

    $(element[0]).css({
        'z-index': 2 //moves it above text content
    })

}

function getTranslationToCenterOfBigElement($targetElement, $containerElement) {
    const targetRect = $targetElement[0].getBoundingClientRect();
    const containerRect = $containerElement[0].getBoundingClientRect();

    const translationX = containerRect.left + containerRect.width / 2 - (targetRect.left + targetRect.width / 2);
    const translationY = containerRect.top + containerRect.height / 2 - (targetRect.top + targetRect.height / 2);

    return [translationX, translationY];
}


function getScaleFactor($biggerElement, $smallerElement) {
    const parent = $biggerElement[0];
    const child = $smallerElement[0];

// get the width and height of the parent and child elements
    const parentWidth = parent.getBoundingClientRect().width;
    const parentHeight = parent.getBoundingClientRect().height;
    const childWidth = child.getBoundingClientRect().width;
    console.log(childWidth, $smallerElement.width())
    const childHeight = child.getBoundingClientRect().height;

    // console.log(parentWidth, childWidth, 'width');
    // console.log(parentHeight, childHeight, 'height');
// calculate the scale factor for the child element
    const scaleX = parentWidth / childWidth;
    const scaleY = parentHeight / childHeight;
    return [scaleX, scaleY];
}

function getVisibleBox() {
    const allBoxes = $(`.separator-box`);

    const windowHeight = $(window).height();
    const windowWidth = $(window).width();
    const visibleBox = allBoxes.filter(function () {
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
    if (visibleBox.length === 0) {
        box = $(allBoxes[0]);
    } else box = $(visibleBox[0]);
    return box;
}