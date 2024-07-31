
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
  }, 101);


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

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton6");
  }, 250);




}


function menuButtonAnimationsOut() {

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton7");
  }, 100);


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

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton6");
  }, 150);


  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton7");
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
  if(element){
  element.style.animationName = "slide-out-left ";
  element.style.animationDuration = "0.5s";
  element.style.animationIterationCount = 1;
  element.style.animationFillMode = "forwards";
  }
}



function loadMenu(){
  const menu = document.getElementById("menu");
  if(menu){
      menu.innerHTML=
      `
      
    <button class="menuItemButton"  id="menuItemButton1" style="display: none; "> 
      <div class="contenedor-texto">
        <a href="/collections" style=" text-decoration: none; color: white; "> Home </a>
      </div>
    </button>

    <button class="menuItemButton"  id="menuItemButton2" style="display: none;"> 
      <div class="contenedor-texto">
        <a href="/collections/all" style=" text-decoration: none; color: white; ">Shop All </a>
      </div>
    </button>

    <button class="menuItemButton" id="menuItemButton3" style="display: none;"> 
      <div class="contenedor-texto" >
        <a href="/pages/shoes" style=" text-decoration: none; color: white;">Shoes</a>
      </div>
    </button>
    
    <button class="menuItemButton" id="menuItemButton4" style="display: none;"> 
      <div class="contenedor-texto" >
        <a style=" text-decoration: none; color: white; href="/pages/t-shirts"> T-shirts </a>
      </div>
    </button>

    <button  class="menuItemButton" id="menuItemButton5" style="display: none;"> 
      <div class="contenedor-texto" >
        <a  href="/pages/tshirt-and-pants" style=" text-decoration: none; color: white; "> Pants </a>
      </div>
    </button>

    <button  class="menuItemButton" id="menuItemButton6" style="display: none;"> 
      <div class="contenedor-texto" >
        <a style=" text-decoration: none; color: white; " href="/pages/jeans-and-jackets"> Jeans and Jackets </a>
      </div>
    </button>


      `
  }



}