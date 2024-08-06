

function centerScroll(separatorWidth=2, separatorHidth =2) {

    const image = document.getElementById("slider-1");
    const scrollContainer = document.getElementById("rs-module");
    console.log('this is the separator'+separatorWidth);
    const midImageW = (image.width / separatorWidth) - (scrollContainer.clientWidth / 2);
    const midImageH = (image.height / separatorHidth) - (scrollContainer.clientHeight / 2);


    scrollContainer.scrollTo({
        top: midImageH,
        left: midImageW,
        behavior: "smooth"
    });

    // console.log("Navegando al centro "+tipe);
}

// Función para manejar el cambio de orientación
function handleOrientationChange() {
    centerScroll("rotate")
}

document.addEventListener("DOMContentLoaded", () => {

    const image = document.getElementById("slider-1");
    const scrollContainer = document.getElementById("rs-module");

    if(typeof inicialPositionSection !== 'undefined'){

        if (image && scrollContainer) {
            if (image.complete) {
                if(typeof inicialPositionSectionTop !== 'undefined'){
                    centerScroll(inicialPositionSection, inicialPositionSectionTop);
                }else{
                    centerScroll(inicialPositionSection);
                }
            } else {
                 centerScroll(inicialPositionSection);
            }
        }
    }else{
        if (image && scrollContainer) {
        centerScroll()
        }
    }



})
