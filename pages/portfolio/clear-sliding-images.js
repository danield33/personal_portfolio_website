function clearImages(sectionID) {

    const section = $(`#${sectionID}`);
    console.log(section)

    const element = document.getElementById("parent-test-box");
    const box = $(`#test-box`);
    const translate = getTranslate(element);

    box.css({
        transform: `matrix(3.13, 0.736, -3.86, 4.97, 0, 0) translate(${-translate.x}px, ${-translate.y}px) scale(0.5)`,
        position: 'fixed'
    })

}

function getTranslate(myElement) {
    var style = window.getComputedStyle(myElement);
    var matrix = new WebKitCSSMatrix(style.transform);
    return {x: matrix.m41, y: matrix.m42}
}

// document.querySelector('button').addEventListener('click', getTranslateX);