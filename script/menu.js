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
    }, 200);

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

  console.log("showMenu");
}

function menuButtonAnimationsInCome() {

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton1");
  }, 50);

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton2");
  }, 200);

}

function menuButtonAnimationsOut() {

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton1");
  }, 50);

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton2");
  }, 200);

}

function elementAnimatioInCome(butonName) {

  const element = document.getElementById(butonName);
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
