

function centerScroll(tipe) {

    const image = document.getElementById("slider-1");
    const scrollContainer = document.getElementById("rs-module");

    const midImageW = (image.width / 2) - (scrollContainer.clientWidth / 2);
    const midImageH = (image.height / 2) - (scrollContainer.clientHeight / 2);

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

    if (image && scrollContainer) {
        if (image.complete) {
            centerScroll("image complete");
        } else {
            image.addEventListener('load', centerScroll("loading"));
        }
    }

})
