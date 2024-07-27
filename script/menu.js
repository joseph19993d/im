
document.addEventListener(
  "DOMContentLoaded",
  ()=>
  {
      loadMenu();
  }
  );

function showMenu() {
  
  const menu = document.getElementById("menu");
  const bgContainer = document.getElementById("rs-module");
  const buttonMenu = document.getElementById("buttonMenu");

  if (menu.style.display == "none") {

    menuButtonAnimationsInCome();

    setTimeout(() => {
      bgContainer.style.animationName = " blurizable";
      bgContainer.style.animationDuration = "0.5s";
      bgContainer.style.animationIterationCount = 1;
      bgContainer.style.animationFillMode = "forwards";
      menu.style.display = "block";
      buttonMenu.innerText = "close";
      loadMenu();
    }, 100);

  } else {

    menuButtonAnimationsOut();

    setTimeout(() => {
      bgContainer.style.animationName = " outBlur";
      bgContainer.style.animationDuration = "0.5s";
      bgContainer.style.animationIterationCount = 1;
      bgContainer.style.animationFillMode = "forwards";
      menu.style.display = "none";
      bgContainer.style.filter = "none";
      buttonMenu.innerText = "menu";
    }, 600);

  }

}

function menuButtonAnimationsInCome() {

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton1");
  }, 50);

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton2");
  }, 200);

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton3");
  }, 230);

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton4");
  }, 240);

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton5");
  }, 250);

}


function menuButtonAnimationsOut() {

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton1");
    
  }, 50);

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton2");
  }, 100);

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton3");
  }, 130);

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton4");
  }, 140);

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton5");
  }, 150);

}


function elementAnimatioInCome(butonName) {

  const element = document.getElementById(butonName);
  element.style.display="block"
  element.style.animationName = "slide-in-left ";
  element.style.animationDuration = "0.5s";
  element.style.animationIterationCount = 1;
  element.style.animationFillMode = "forwards";

}

function elementAnimatioOnOut(butonName) {

  const element = document.getElementById(butonName);
  element.style.animationName = "slide-out-left ";
  element.style.animationDuration = "0.5s";
  element.style.animationIterationCount = 1;
  element.style.animationFillMode = "forwards";

}



function loadMenu(){
  const menu = document.getElementById("menu");
  if(menu){
      menu.innerHTML=
      `
      
    <button  src="#" class="menuItemButton"  id="menuItemButton1" style="display: none;"> 
      <div class="contenedor-texto">
        <a src="/">Home</a>
      </div>
    </button>

    <button  src="#" class="menuItemButton"  id="menuItemButton2" style="display: none;"> 
      <div class="contenedor-texto">
        <a src="/collections/all">Shop All </a>
      </div>
    </button>

    <button src="/collections/" class="menuItemButton" id="menuItemButton3" style="display: none;"> 
      <div class="contenedor-texto" >
        <a src="#">secion 1.</a>
      </div>
    </button>
    
    <button src="#" class="menuItemButton" id="menuItemButton4" style="display: none;"> 
      <div class="contenedor-texto" >
        <a src="#">secion 2.</a>
      </div>
    </button>

    <button src="#" class="menuItemButton" id="menuItemButton5" style="display: none;"> 
      <div class="contenedor-texto" >
        <a src="#">secion 3.</a>
      </div>
    </button>

      `
  }



}