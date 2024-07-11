

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

    console.log("Navegando al centro "+tipe);
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

// // Agregar un event listener para el evento 'orientationchange'
// window.addEventListener('orientationchange', handleOrientationChange);


// // Función para manejar el cambio de tamaño de la pantalla
// function handleResize() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
    
//     console.log(`Nuevo tamaño de la pantalla: ${width}px de ancho por ${height}px de alto`);

//     centerScroll("rezise")
    
//     // Aquí puedes poner cualquier otra lógica que necesites ejecutar al cambiar el tamaño de la pantalla
// }

// // Agregar un event listener para el evento 'resize'
// window.addEventListener('resize', handleResize);

// // Opcional: Ejecutar la función una vez para manejar el tamaño inicial de la pantalla
// handleResize();