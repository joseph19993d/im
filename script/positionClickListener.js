document.addEventListener('click', function(event) {
    const xPos = event.clientX; // Posición X del clic respecto al borde izquierdo de la ventana
    const yPos = event.clientY; // Posición Y del clic respecto al borde superior de la ventana

    console.log(`Posición del clic - X: ${xPos}, Y: ${yPos}`);
});


