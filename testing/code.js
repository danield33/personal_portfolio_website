const transform = "matrix(1.00,0.00,0.00,10,0,0)",
    transformTopRect = "matrix(1.00,0.00,0.00,10.00,0,0)",
    transformLeftRect = "matrix(0.71,-0.71,7.07,7.07,0,0)",
    transformRightRect = "matrix(0.71,0.71,-7.07,7.07,0,0)",
    transformBotRect = "matrix(-0.00,-1.00,10.00,-0.00,0,0)",
    transformBotLeftRect = "matrix(-0.71,-0.71,7.07,-7.07,0,0)",
    transformBotRightRect = "matrix(0.71,-0.71,7.07,7.07,0,0)"

function* a() {
    yield transformTopRect;
    yield transformLeftRect;
    yield transformRightRect;
    yield transformBotRect;
    yield transformBotRightRect;
    yield transformBotLeftRect;
}

$(document).ready(function () {
    $("#change").click(function () {
        const branches = $("#branches"),
            branchesDown = $("#branchesDown");
        let transforms = a();

        [...branches.find("line")].forEach(line => {
            const anim = transforms.next().value;
            console.log(anim);
            $(line).css({
                "transform": anim,
                "-webkit-transform": anim,
                "-ms-transform": anim
            });
        });

        //     .css({
        //     "transform":transform,
        //     "-webkit-transform":transforms.next().value,
        //     "-ms-transform":transform
        // });
        // branches.find("rect").css({
        //     "transform":transformRect,
        //     "-webkit-transform":transformRect,
        //     "-ms-transform":transformRect
        // });
    });

});