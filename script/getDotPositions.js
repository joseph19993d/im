document.addEventListener("DOMContentLoaded", () => {
  setPoints();
});


function handleResize() {
  location.reload();
}

window.addEventListener("resize", handleResize);

function waitByCounterPair(counter) {

  return new Promise((resolve) => {

    if (counter % 2 === 0) {

      setTimeout(() => {
        resolve();
      }, 500); // Espera de 2 segundos si el contador es par

    } 
    else {
      resolve();
    }

  });
}


async function createProdutPoint ( point, image, container, originalImageWidth, originalImageHeight, counter){

  await waitByCounterPair(counter);

  const pointContainer = document.createElement("div");

  pointContainer.className = "points-container";

  container.appendChild(pointContainer);

  const pointElement = document.createElement("div");

  pointElement.className = `point dot`;
  pointElement.id = point.id;

  const pointXPercent = (point.x / originalImageWidth) * 100;
  const pointYPercent = (point.y / originalImageHeight) * 100;

  const imageRect = image.getBoundingClientRect();
  const pointX = (imageRect.width * pointXPercent) / 100;
  const pointY = (imageRect.height * pointYPercent) / 100;

  pointElement.style.left = `${pointX}px`;
  pointElement.style.top = `${pointY}px`;

  if (point.color) {
    pointElement.style.border = `2px solid ${point.color}`;
  }
  

  pointElement.addEventListener("click", () =>
    clickButtonAction(point.url)
  );

  pointContainer.appendChild(pointElement);

  //add Dialog div Element
  const thisDialog = addDialogElement(
    point.id,
    pointContainer,
    `${pointX}`,
    `${pointY + 35}`,
    point.text
  );
  // console.log(thisDialog);
  // Add div point center
  createPointElementCenter(point.id, thisDialog, point.url , point.color );

}


function createPagePoint( point, image, container, originalImageWidth, originalImageHeight, directionRow  ){

  if(directionRow == undefined){
    directionRow=0;
  }
  console.log("el rango es ", directionRow);

  // Calcular coordenadas porcentuales del punto de interés
  const pointXPercent = (point.x / originalImageWidth) * 100;
  const pointYPercent = (point.y / originalImageHeight) * 100;

  const imageRect = image.getBoundingClientRect();
  const pointX = (imageRect.width * pointXPercent) / 100;
  const pointY = (imageRect.height * pointYPercent) / 100;

  const widthButton = `${point.text.length * 7}`;

  // Crear un contenedor para el punto
  const pointContainer = document.createElement("div");
  pointContainer.className = "points-container";
  container.appendChild(pointContainer);

  // Crear el elemento del botón
  const buttonElement = document.createElement("button");
  buttonElement.id = point.id;
  buttonElement.className = "navigateButton";
  buttonElement.style.left = `${pointX}px`;
  buttonElement.style.top = `${pointY}px`;
  if(point.color){
    buttonElement.style.border=`2px solid ${point.color}`
  }

  buttonElement.innerHTML = `
    <svg class="navigateRow" style="fill:${point.color?point.color:'white'} !important;  transform: rotate(${directionRow}deg); transform-origin: center;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
        <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
    <div class="text" style=" --ancho:${widthButton}px; color:${point.color?point.color:'white'}; Background:${point.textBackground?point.textBackground:"none" } ; border-radius: 5px; " > 
        ${point.text} &nbsp;
    </div>
  `;

  // Añadir evento click
  buttonElement.addEventListener("click", () =>
    clickButtonAction(point.url)
  );

  // Añadir el botón al contenedor del punto
  pointContainer.appendChild(buttonElement);

}


async function setPoints() {

  const image = document.getElementById("slider-1");

  const container = document.getElementById("rs-module");

  const originalImageWidth = imgH ? imgH:4000  ; // Ancho original de la imagen

  const originalImageHeight = imgW ? imgW:3024 ; // Alto original de la imagen

  // Cargar los datos de puntos desde el archivo JSON
  fetch("./points/initial.json")
    .then((response) => response.json())
    .then((points) => {
      // Iterar sobre cada punto y crear un elemento para cada uno
      let counter = 0;
      points.forEach((point) => {

        if (point.type !== "page") { // Asegúrate de que el tipo es correcto
            counter += 1;
            createProdutPoint(point, image, container, originalImageWidth, originalImageHeight, counter);
        } else {
            // Verifica si `directionRow` está definido en `point` o usa `0` como valor predeterminado
            const directionRow = point.directionRow !== undefined ? point.directionRow : 0;
            createPagePoint(point, image, container, originalImageWidth, originalImageHeight, directionRow );
        }

      });
    })
    .catch((error) => console.error("Error cargando puntos:", error));
}


function createPointElementCenter(id, thisDialog, url, color) {
  const lastPointElement = document.getElementById(id);
  if (lastPointElement) {
    const centerPointElement = document.createElement("div");
    centerPointElement.className = "dot-center";
    centerPointElement.id = id + "-dot-center";
    if(color){
      centerPointElement.style.border= `2px solid ${color}`
    }
    // centerPointElement.addEventListener("click", () => clickButtonAction(url));
    lastPointElement.appendChild(centerPointElement);
  }
}


function addDialogElement(id, container, x, y, text) {
  const lastPointElement = document.getElementById(id);

  if (lastPointElement) {
    try {
      const dialogBoxElement = document.createElement("div");
      dialogBoxElement.className = "box";
      dialogBoxElement.innerHTML = text;
      dialogBoxElement.id = id + "-dialog";
      dialogBoxElement.style.marginLeft = `${x - text.length * 5}px`;
      dialogBoxElement.style.marginTop = y + "px";
      container.appendChild(dialogBoxElement);

      // Add chule direction
      chuleDirection(dialogBoxElement, x, y , 90);

      return dialogBoxElement;
    } catch (err) {
      throw new Error(`Error en dialogo ${id}`);
    }
  }
  return false;
}


function chuleDirection(container, x, y) {
  const dialogBoxChuleElement = document.createElement("div");
  dialogBoxChuleElement.className = "chule-direction";
  dialogBoxChuleElement.innerHTML = "";
  dialogBoxChuleElement.style.Left = "-30px";
  container.appendChild(dialogBoxChuleElement);
}


function clickButtonAction(url) {
    window.location.href = url; // Redirige a la URL especificada
}
