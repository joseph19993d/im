document.addEventListener("DOMContentLoaded", () => {
    setPoints();
});

function handleResize() {
  location.reload()
}


window.addEventListener('resize', handleResize);


function setPoints(){

  console.log("cargando puntos")
        
  const image = document.getElementById("slider-1");
  //   const image = document.getElementById("slider-1");
  const Container = document.getElementById("rs-module");

  const originalImageWidth = 2560; // Ancho original de la imagen
  const originalImageHeight = 1440; // Alto original de la imagen

  // Cargar los datos de puntos desde el archivo JSON

  fetch("./points/initial.json")
    .then((response) => response.json())
    .then((points) => {
      // Iterar sobre cada punto y crear un elemento para cada uno
      points.forEach((point) => {
        const pointContainer = document.createElement("div");

        pointContainer.className = "points-container";

        Container.appendChild(pointContainer);

        const pointElement = document.createElement("div");

        pointElement.className = `point dot`;
        pointElement.id = point.id;

        // Calcular coordenadas porcentuales del punto de interés
        const pointXPercent = (point.x / originalImageWidth) * 100;
        const pointYPercent = (point.y / originalImageHeight) * 100;
        // const widthStaticPosition = (point.x/1000) * window.innerWidth -200 ;
        // const HeigthStaticPosition = (point.y/100) * window.innerHeight ;
        // console.log(`window.innerWidth${window.innerWidth}`)
        const imageRect = image.getBoundingClientRect();
        const pointX = (imageRect.width * pointXPercent) / 100;
        const pointY = (imageRect.height * pointYPercent) / 100;

        pointElement.style.left = `${pointX}px`;
        pointElement.style.top = `${pointY}px`;

        // console.log( ` point x ${pointX}px`);
        // console.log( ` point y ${pointY}px`);

        if (point.color) {
          pointElement.style.background = point.color;
        }

        pointElement.addEventListener("click",()=>clickButtonAction(point.url))

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
        createPointElementCenter(point.id, thisDialog, point.url);
      });
    })
    .catch((error) => console.error("Error cargando puntos:", error));
}

function createPointElementCenter(id, thisDialog, url) {
  const lastPointElement = document.getElementById(id);
  if (lastPointElement) {
    const centerPointElement = document.createElement("div");
    centerPointElement.className = "dot-center";
    centerPointElement.id = id + "-dot-center";
    // centerPointElement.addEventListener("click", () => clickButtonAction(url));
    lastPointElement.appendChild(centerPointElement);
  }
}

function addDialogElement(id, container, x, y, text) {
  // var centerX = container.left + container.width / 2;
  // console.log("centerX :" +container  )
  // var centerY = container.top + container.height / 2;

  const lastPointElement = document.getElementById(id);
  if (lastPointElement) {
    try {
      const dialogBoxElement = document.createElement("div");
      dialogBoxElement.className = "box";
      dialogBoxElement.innerHTML = text;
      // longitud = longitud.length
      dialogBoxElement.id = id + "-dialog";
      dialogBoxElement.style.marginLeft = `${x - text.length * 5}px`;
      dialogBoxElement.style.marginTop = y + "px";

      container.appendChild(dialogBoxElement);
      // console.log("MIASSASASAS:::"+(dialogBoxElement.getBoundingClientRect()).left);
      // dialogBoxElement.style.marginLeft= `${(dialogBoxElement.getBoundingClientRect()).left}px`;
      const thisDialog = document.getElementById(id);
      // console.log(`${thisDialog.className}`) ;

      // Add chule direction
      chuleDirection(dialogBoxElement, x, y);

      return dialogBoxElement;
    } catch (err) {
      throw new Error(`Error en dialogo ${id}`);
    }
    // throw new Error('Parameter is not a number!');
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
  if (confirm(`¿Estás seguro de ir a ${url}?`)) {
      // Si el usuario presiona "Aceptar"
      alert(`Redirigiendo a: ${url}`);
      window.location.href = url; // Redirige a la URL especificada
  } 
  
}


